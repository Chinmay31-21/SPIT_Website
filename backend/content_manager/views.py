from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import (
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
)
from .serializers import (
    AnnouncementSerializer, DepartmentSerializer, EventSerializer,
    GallerySerializer, NewsArticleSerializer, DocumentSerializer,
    PageContentSerializer, QuickLinkSerializer
)


class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admins to edit objects.
    """
    def has_permission(self, request, view):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions are only allowed to staff users
        return request.user and request.user.is_staff


class AnnouncementViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing announcements.
    """
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['priority', 'is_active', 'publish_date']
    search_fields = ['title', 'content']
    ordering_fields = ['publish_date', 'priority', 'created_at']
    ordering = ['-publish_date']
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        # For non-staff users, only show active announcements
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class DepartmentViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing departments.
    """
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['is_active']
    search_fields = ['name', 'code', 'head_of_department']
    ordering_fields = ['name', 'created_at']
    ordering = ['name']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class EventViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing events.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['event_type', 'department', 'is_active']
    search_fields = ['title', 'description', 'venue']
    ordering_fields = ['start_date', 'created_at']
    ordering = ['-start_date']
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class GalleryViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing gallery images.
    """
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'is_featured', 'is_active']
    search_fields = ['title', 'description']
    ordering_fields = ['uploaded_at']
    ordering = ['-uploaded_at']
    
    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class NewsArticleViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing news articles.
    """
    queryset = NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['is_featured', 'is_published']
    search_fields = ['title', 'summary', 'content']
    ordering_fields = ['published_date', 'created_at']
    ordering = ['-published_date']
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_published=True)
        return queryset


class DocumentViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing documents.
    """
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['document_type', 'department', 'is_active']
    search_fields = ['title', 'description']
    ordering_fields = ['uploaded_at']
    ordering = ['-uploaded_at']
    
    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class PageContentViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing page content.
    """
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['page_name', 'is_active']
    search_fields = ['section_name', 'section_key', 'content']
    ordering_fields = ['page_name', 'order']
    ordering = ['page_name', 'order']
    
    def perform_create(self, serializer):
        serializer.save(updated_by=self.request.user)
    
    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset


class QuickLinkViewSet(viewsets.ModelViewSet):
    """
    ViewSet for viewing and editing quick links.
    """
    queryset = QuickLink.objects.all()
    serializer_class = QuickLinkSerializer
    permission_classes = [IsAdminOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['is_active']
    search_fields = ['title', 'description']
    ordering_fields = ['order']
    ordering = ['order']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset
