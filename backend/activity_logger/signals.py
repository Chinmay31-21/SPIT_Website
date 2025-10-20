from django.db.models.signals import post_save, post_delete, pre_save
from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.dispatch import receiver
from django.contrib.contenttypes.models import ContentType
from .models import ActivityLog, AdminSession
from content_manager.models import (
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
)


def get_client_ip(request):
    """Extract client IP address from request"""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def get_user_agent(request):
    """Extract user agent from request"""
    return request.META.get('HTTP_USER_AGENT', '')


def log_activity(user, action, description, obj=None, request=None, changes=None):
    """Helper function to create activity log"""
    content_type = None
    object_id = None
    
    if obj:
        content_type = ContentType.objects.get_for_model(obj)
        object_id = obj.pk
    
    ip_address = None
    user_agent = ''
    
    if request:
        ip_address = get_client_ip(request)
        user_agent = get_user_agent(request)
    
    ActivityLog.objects.create(
        user=user,
        username=user.username if user else 'Anonymous',
        action=action,
        description=description,
        content_type=content_type,
        object_id=object_id,
        ip_address=ip_address,
        user_agent=user_agent,
        changes=changes
    )


# Track model changes for content manager models
TRACKED_MODELS = [
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
]

# Store original values before save
original_values = {}


@receiver(pre_save)
def store_original_values(sender, instance, **kwargs):
    """Store original values before saving"""
    if sender in TRACKED_MODELS and instance.pk:
        try:
            original = sender.objects.get(pk=instance.pk)
            original_values[f"{sender.__name__}_{instance.pk}"] = {
                field.name: getattr(original, field.name)
                for field in sender._meta.fields
                if field.name not in ['created_at', 'updated_at']
            }
        except sender.DoesNotExist:
            pass


@receiver(post_save)
def log_model_save(sender, instance, created, **kwargs):
    """Log when models are created or updated"""
    if sender in TRACKED_MODELS:
        # Try to get the user from the instance
        user = None
        if hasattr(instance, 'created_by'):
            user = instance.created_by
        elif hasattr(instance, 'uploaded_by'):
            user = instance.uploaded_by
        elif hasattr(instance, 'updated_by'):
            user = instance.updated_by
        elif hasattr(instance, 'author'):
            user = instance.author
        
        if user and user.is_staff:
            model_name = sender.__name__
            
            if created:
                description = f"Created {model_name}: {str(instance)}"
                log_activity(user, 'create', description, obj=instance)
            else:
                # Check for changes
                key = f"{model_name}_{instance.pk}"
                if key in original_values:
                    old_values = original_values[key]
                    changes = {}
                    
                    for field in sender._meta.fields:
                        if field.name not in ['created_at', 'updated_at']:
                            old_val = old_values.get(field.name)
                            new_val = getattr(instance, field.name)
                            
                            # Skip file fields for comparison
                            if not field.get_internal_type() in ['FileField', 'ImageField']:
                                if old_val != new_val:
                                    changes[field.name] = {
                                        'old': str(old_val),
                                        'new': str(new_val)
                                    }
                    
                    if changes:
                        description = f"Updated {model_name}: {str(instance)}"
                        log_activity(user, 'update', description, obj=instance, changes=changes)
                    
                    # Clean up
                    del original_values[key]


@receiver(post_delete)
def log_model_delete(sender, instance, **kwargs):
    """Log when models are deleted"""
    if sender in TRACKED_MODELS:
        # Try to get the user from the instance
        user = None
        if hasattr(instance, 'created_by'):
            user = instance.created_by
        elif hasattr(instance, 'uploaded_by'):
            user = instance.uploaded_by
        elif hasattr(instance, 'updated_by'):
            user = instance.updated_by
        elif hasattr(instance, 'author'):
            user = instance.author
        
        if user and user.is_staff:
            model_name = sender.__name__
            description = f"Deleted {model_name}: {str(instance)}"
            log_activity(user, 'delete', description)


@receiver(user_logged_in)
def log_user_login(sender, request, user, **kwargs):
    """Log when admin users log in"""
    if user.is_staff:
        ip_address = get_client_ip(request)
        user_agent = get_user_agent(request)
        
        # Create session record
        AdminSession.objects.create(
            user=user,
            session_key=request.session.session_key,
            ip_address=ip_address,
            user_agent=user_agent
        )
        
        # Log activity
        description = f"Admin user {user.username} logged in"
        log_activity(user, 'login', description, request=request)


@receiver(user_logged_out)
def log_user_logout(sender, request, user, **kwargs):
    """Log when admin users log out"""
    if user and user.is_staff:
        # Update session record
        try:
            session = AdminSession.objects.filter(
                user=user,
                session_key=request.session.session_key,
                is_active=True
            ).latest('login_time')
            
            from django.utils import timezone
            session.logout_time = timezone.now()
            session.is_active = False
            session.save()
        except AdminSession.DoesNotExist:
            pass
        
        # Log activity
        description = f"Admin user {user.username} logged out"
        log_activity(user, 'logout', description, request=request)
