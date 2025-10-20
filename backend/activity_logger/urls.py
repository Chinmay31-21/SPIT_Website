from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ActivityLogViewSet, AdminSessionViewSet

router = DefaultRouter()
router.register(r'activities', ActivityLogViewSet, basename='activitylog')
router.register(r'sessions', AdminSessionViewSet, basename='adminsession')

urlpatterns = [
    path('', include(router.urls)),
]
