from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import ActivityLog, AdminSession
from .serializers import ActivityLogSerializer, AdminSessionSerializer


class IsAdminUser(permissions.BasePermission):
    """
    Custom permission to only allow admin users to view logs.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_staff


class ActivityLogViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing activity logs (read-only).
    Only admin users can access this.
    """
    queryset = ActivityLog.objects.all()
    serializer_class = ActivityLogSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['action', 'user', 'timestamp']
    search_fields = ['username', 'description', 'ip_address']
    ordering_fields = ['timestamp', 'action', 'username']
    ordering = ['-timestamp']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by date range if provided
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        
        if start_date:
            queryset = queryset.filter(timestamp__gte=start_date)
        if end_date:
            queryset = queryset.filter(timestamp__lte=end_date)
        
        # Filter by current user if requested
        my_logs = self.request.query_params.get('my_logs', None)
        if my_logs and my_logs.lower() == 'true':
            queryset = queryset.filter(user=self.request.user)
        
        return queryset


class AdminSessionViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing admin sessions (read-only).
    Only admin users can access this.
    """
    queryset = AdminSession.objects.all()
    serializer_class = AdminSessionSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['user', 'is_active', 'login_time']
    search_fields = ['user__username', 'ip_address']
    ordering_fields = ['login_time', 'logout_time']
    ordering = ['-login_time']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter active sessions only if requested
        active_only = self.request.query_params.get('active_only', None)
        if active_only and active_only.lower() == 'true':
            queryset = queryset.filter(is_active=True)
        
        return queryset
