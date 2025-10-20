from django.contrib import admin
from django.utils.html import format_html
from .models import ActivityLog, AdminSession


@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ['user_display', 'action', 'description_short', 'timestamp', 'ip_address']
    list_filter = ['action', 'timestamp', 'user']
    search_fields = ['username', 'description', 'ip_address']
    date_hierarchy = 'timestamp'
    readonly_fields = ['user', 'username', 'action', 'description', 'content_type', 
                       'object_id', 'ip_address', 'user_agent', 'changes', 'timestamp']
    
    def has_add_permission(self, request):
        return False  # Logs should only be created automatically
    
    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser  # Only superusers can delete logs
    
    def user_display(self, obj):
        if obj.user:
            color = 'green' if obj.user.is_superuser else 'blue'
            return format_html('<span style="color: {};">{}</span>', color, obj.username)
        return format_html('<span style="color: red;">{} (deleted)</span>', obj.username)
    user_display.short_description = 'User'
    
    def description_short(self, obj):
        if len(obj.description) > 80:
            return obj.description[:80] + '...'
        return obj.description
    description_short.short_description = 'Description'
    
    fieldsets = (
        ('User Information', {
            'fields': ('user', 'username', 'ip_address', 'user_agent')
        }),
        ('Action Details', {
            'fields': ('action', 'description', 'content_type', 'object_id')
        }),
        ('Changes', {
            'fields': ('changes',),
            'classes': ('collapse',)
        }),
        ('Timestamp', {
            'fields': ('timestamp',)
        }),
    )


@admin.register(AdminSession)
class AdminSessionAdmin(admin.ModelAdmin):
    list_display = ['user', 'login_time', 'logout_time', 'duration_display', 'is_active', 'ip_address']
    list_filter = ['is_active', 'login_time', 'user']
    search_fields = ['user__username', 'ip_address', 'session_key']
    date_hierarchy = 'login_time'
    readonly_fields = ['user', 'session_key', 'ip_address', 'user_agent', 
                       'login_time', 'logout_time', 'duration_display']
    
    def has_add_permission(self, request):
        return False
    
    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
    
    def duration_display(self, obj):
        duration = obj.duration
        hours, remainder = divmod(duration.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        if duration.days > 0:
            return f"{duration.days}d {hours}h {minutes}m"
        elif hours > 0:
            return f"{hours}h {minutes}m"
        else:
            return f"{minutes}m {seconds}s"
    duration_display.short_description = 'Duration'
