from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AnnouncementViewSet, DepartmentViewSet, EventViewSet,
    GalleryViewSet, NewsArticleViewSet, DocumentViewSet,
    PageContentViewSet, QuickLinkViewSet
)

router = DefaultRouter()
router.register(r'announcements', AnnouncementViewSet, basename='announcement')
router.register(r'departments', DepartmentViewSet, basename='department')
router.register(r'events', EventViewSet, basename='event')
router.register(r'gallery', GalleryViewSet, basename='gallery')
router.register(r'news', NewsArticleViewSet, basename='news')
router.register(r'documents', DocumentViewSet, basename='document')
router.register(r'page-content', PageContentViewSet, basename='pagecontent')
router.register(r'quick-links', QuickLinkViewSet, basename='quicklink')

urlpatterns = [
    path('', include(router.urls)),
]
