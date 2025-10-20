from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
)


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ['title', 'priority', 'is_active', 'publish_date', 'expiry_date', 'created_by']
    list_filter = ['priority', 'is_active', 'publish_date', 'created_at']
    search_fields = ['title', 'content']
    date_hierarchy = 'publish_date'
    readonly_fields = ['created_at', 'updated_at', 'created_by']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'content', 'priority')
        }),
        ('Media', {
            'fields': ('pdf_file', 'image')
        }),
        ('Publishing', {
            'fields': ('is_active', 'publish_date', 'expiry_date')
        }),
        ('Metadata', {
            'fields': ('created_by', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new object
            obj.created_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'code', 'head_of_department', 'email', 'is_active']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'code', 'head_of_department']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'event_type', 'department', 'start_date', 'end_date', 'is_active']
    list_filter = ['event_type', 'department', 'is_active', 'start_date']
    search_fields = ['title', 'description', 'venue']
    date_hierarchy = 'start_date'
    readonly_fields = ['created_at', 'updated_at', 'created_by']
    
    fieldsets = (
        ('Event Information', {
            'fields': ('title', 'description', 'event_type', 'department')
        }),
        ('Schedule & Venue', {
            'fields': ('venue', 'start_date', 'end_date', 'registration_link')
        }),
        ('Media', {
            'fields': ('poster', 'brochure')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Metadata', {
            'fields': ('created_by', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'is_active', 'image_preview', 'uploaded_at']
    list_filter = ['category', 'is_featured', 'is_active', 'uploaded_at']
    search_fields = ['title', 'description']
    readonly_fields = ['uploaded_at', 'uploaded_by', 'image_preview']
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="100" style="object-fit: cover;" />', obj.image.url)
        return "No image"
    image_preview.short_description = 'Preview'
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_featured', 'is_published', 'published_date', 'author']
    list_filter = ['is_featured', 'is_published', 'published_date']
    search_fields = ['title', 'summary', 'content']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'published_date'
    readonly_fields = ['created_at', 'updated_at', 'author']
    
    fieldsets = (
        ('Article Information', {
            'fields': ('title', 'slug', 'summary', 'content')
        }),
        ('Media', {
            'fields': ('featured_image', 'pdf_attachment')
        }),
        ('Publishing', {
            'fields': ('is_featured', 'is_published', 'published_date')
        }),
        ('Metadata', {
            'fields': ('author', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.author = request.user
        super().save_model(request, obj, form, change)


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ['title', 'document_type', 'department', 'file_size_display', 'is_active', 'uploaded_at']
    list_filter = ['document_type', 'department', 'is_active', 'uploaded_at']
    search_fields = ['title', 'description']
    date_hierarchy = 'uploaded_at'
    readonly_fields = ['file_size', 'uploaded_at', 'updated_at', 'uploaded_by']
    
    def file_size_display(self, obj):
        if obj.file_size:
            size_kb = obj.file_size / 1024
            if size_kb < 1024:
                return f"{size_kb:.2f} KB"
            else:
                size_mb = size_kb / 1024
                return f"{size_mb:.2f} MB"
        return "Unknown"
    file_size_display.short_description = 'File Size'
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = ['page_name', 'section_name', 'section_key', 'is_active', 'order', 'updated_at']
    list_filter = ['page_name', 'is_active']
    search_fields = ['section_name', 'section_key', 'content']
    readonly_fields = ['created_at', 'updated_at', 'updated_by']
    
    fieldsets = (
        ('Page Information', {
            'fields': ('page_name', 'section_name', 'section_key', 'order')
        }),
        ('Content', {
            'fields': ('content', 'image')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Metadata', {
            'fields': ('updated_by', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        obj.updated_by = request.user
        super().save_model(request, obj, form, change)


@admin.register(QuickLink)
class QuickLinkAdmin(admin.ModelAdmin):
    list_display = ['title', 'url', 'is_active', 'order']
    list_filter = ['is_active']
    search_fields = ['title', 'description']
