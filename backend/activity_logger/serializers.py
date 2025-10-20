from rest_framework import serializers
from .models import ActivityLog, AdminSession


class ActivityLogSerializer(serializers.ModelSerializer):
    user_display = serializers.CharField(source='username', read_only=True)
    action_display = serializers.CharField(source='get_action_display', read_only=True)
    content_type_display = serializers.SerializerMethodField()
    
    class Meta:
        model = ActivityLog
        fields = [
            'id', 'user', 'user_display', 'username', 'action', 
            'action_display', 'description', 'content_type', 
            'content_type_display', 'object_id', 'ip_address', 
            'user_agent', 'changes', 'timestamp'
        ]
        read_only_fields = '__all__'
    
    def get_content_type_display(self, obj):
        if obj.content_type:
            return str(obj.content_type)
        return None


class AdminSessionSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    duration = serializers.SerializerMethodField()
    
    class Meta:
        model = AdminSession
        fields = [
            'id', 'user', 'username', 'session_key', 'ip_address', 
            'user_agent', 'login_time', 'logout_time', 'is_active', 'duration'
        ]
        read_only_fields = '__all__'
    
    def get_duration(self, obj):
        duration = obj.duration
        hours, remainder = divmod(duration.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        
        if duration.days > 0:
            return f"{duration.days}d {hours}h {minutes}m"
        elif hours > 0:
            return f"{hours}h {minutes}m"
        else:
            return f"{minutes}m {seconds}s"
