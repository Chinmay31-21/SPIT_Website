from rest_framework import serializers
from .models import (
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
)


class AnnouncementSerializer(serializers.ModelSerializer):
    created_by_name = serializers.CharField(source='created_by.username', read_only=True)
    
    class Meta:
        model = Announcement
        fields = '__all__'
        read_only_fields = ['created_by', 'created_at', 'updated_at']


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']


class EventSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)
    created_by_name = serializers.CharField(source='created_by.username', read_only=True)
    
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['created_by', 'created_at', 'updated_at']


class GallerySerializer(serializers.ModelSerializer):
    uploaded_by_name = serializers.CharField(source='uploaded_by.username', read_only=True)
    
    class Meta:
        model = Gallery
        fields = '__all__'
        read_only_fields = ['uploaded_by', 'uploaded_at']


class NewsArticleSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = NewsArticle
        fields = '__all__'
        read_only_fields = ['author', 'created_at', 'updated_at']


class DocumentSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)
    uploaded_by_name = serializers.CharField(source='uploaded_by.username', read_only=True)
    file_size_display = serializers.SerializerMethodField()
    
    class Meta:
        model = Document
        fields = '__all__'
        read_only_fields = ['uploaded_by', 'file_size', 'uploaded_at', 'updated_at']
    
    def get_file_size_display(self, obj):
        if obj.file_size:
            size_kb = obj.file_size / 1024
            if size_kb < 1024:
                return f"{size_kb:.2f} KB"
            else:
                size_mb = size_kb / 1024
                return f"{size_mb:.2f} MB"
        return "Unknown"


class PageContentSerializer(serializers.ModelSerializer):
    updated_by_name = serializers.CharField(source='updated_by.username', read_only=True)
    
    class Meta:
        model = PageContent
        fields = '__all__'
        read_only_fields = ['updated_by', 'created_at', 'updated_at']


class QuickLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuickLink
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']
