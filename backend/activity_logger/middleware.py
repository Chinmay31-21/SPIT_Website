from django.utils.deprecation import MiddlewareMixin
from .signals import log_activity


class ActivityLoggerMiddleware(MiddlewareMixin):
    """
    Middleware to track admin activities
    """
    
    def process_view(self, request, view_func, view_args, view_kwargs):
        """Log admin views"""
        if request.user.is_authenticated and request.user.is_staff:
            # Store request in thread local for access in signals
            if not hasattr(request, '_activity_logged'):
                request._activity_logged = True
                
                # Log admin panel access
                if request.path.startswith('/admin/'):
                    path_parts = request.path.split('/')
                    if len(path_parts) >= 4 and path_parts[2] and path_parts[3]:
                        app_label = path_parts[2]
                        model_name = path_parts[3]
                        
                        # Don't log activity_logger views to avoid recursion
                        if app_label != 'activity_logger':
                            description = f"Accessed admin panel: {app_label}/{model_name}"
                            log_activity(
                                request.user,
                                'view',
                                description,
                                request=request
                            )
        
        return None
