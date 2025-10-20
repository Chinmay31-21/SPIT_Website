from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Announcement(models.Model):
    """Model for managing college announcements"""
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]
    
    title = models.CharField(max_length=255)
    content = models.TextField()
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    pdf_file = models.FileField(upload_to='announcements/pdfs/', blank=True, null=True)
    image = models.ImageField(upload_to='announcements/images/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    publish_date = models.DateTimeField(default=timezone.now)
    expiry_date = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='announcements')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-publish_date', '-priority']
        verbose_name = 'Announcement'
        verbose_name_plural = 'Announcements'
    
    def __str__(self):
        return self.title
    
    @property
    def is_expired(self):
        if self.expiry_date:
            return timezone.now() > self.expiry_date
        return False


class Department(models.Model):
    """Model for college departments"""
    
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=20, unique=True)
    description = models.TextField(blank=True)
    head_of_department = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['name']
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'
    
    def __str__(self):
        return f"{self.name} ({self.code})"


class Event(models.Model):
    """Model for college events"""
    
    EVENT_TYPE_CHOICES = [
        ('workshop', 'Workshop'),
        ('seminar', 'Seminar'),
        ('conference', 'Conference'),
        ('cultural', 'Cultural Event'),
        ('sports', 'Sports Event'),
        ('technical', 'Technical Event'),
        ('other', 'Other'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    event_type = models.CharField(max_length=20, choices=EVENT_TYPE_CHOICES, default='other')
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True, related_name='events')
    venue = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    registration_link = models.URLField(blank=True)
    poster = models.ImageField(upload_to='events/posters/', blank=True, null=True)
    brochure = models.FileField(upload_to='events/brochures/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='events')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-start_date']
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
    
    def __str__(self):
        return self.title


class Gallery(models.Model):
    """Model for managing gallery images"""
    
    CATEGORY_CHOICES = [
        ('campus', 'Campus'),
        ('events', 'Events'),
        ('infrastructure', 'Infrastructure'),
        ('students', 'Students'),
        ('achievements', 'Achievements'),
        ('other', 'Other'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    image = models.ImageField(upload_to='gallery/')
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='gallery_images')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-uploaded_at']
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'
    
    def __str__(self):
        return self.title


class NewsArticle(models.Model):
    """Model for news articles and updates"""
    
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    summary = models.TextField(max_length=500)
    content = models.TextField()
    featured_image = models.ImageField(upload_to='news/featured/', blank=True, null=True)
    pdf_attachment = models.FileField(upload_to='news/pdfs/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    published_date = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='articles')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-published_date']
        verbose_name = 'News Article'
        verbose_name_plural = 'News Articles'
    
    def __str__(self):
        return self.title


class Document(models.Model):
    """Model for managing various documents and PDFs"""
    
    DOCUMENT_TYPE_CHOICES = [
        ('syllabus', 'Syllabus'),
        ('timetable', 'Timetable'),
        ('notice', 'Notice'),
        ('circular', 'Circular'),
        ('form', 'Form'),
        ('policy', 'Policy'),
        ('guideline', 'Guideline'),
        ('report', 'Report'),
        ('other', 'Other'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    document_type = models.CharField(max_length=20, choices=DOCUMENT_TYPE_CHOICES, default='other')
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True, related_name='documents')
    file = models.FileField(upload_to='documents/')
    file_size = models.IntegerField(blank=True, null=True)  # in bytes
    is_active = models.BooleanField(default=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='documents')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-uploaded_at']
        verbose_name = 'Document'
        verbose_name_plural = 'Documents'
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.file:
            self.file_size = self.file.size
        super().save(*args, **kwargs)


class PageContent(models.Model):
    """Model for managing dynamic page content"""
    
    PAGE_CHOICES = [
        ('home', 'Home Page'),
        ('about', 'About Us'),
        ('admissions', 'Admissions'),
        ('placements', 'Placements'),
        ('contact', 'Contact Us'),
        ('faculty', 'Faculty'),
        ('research', 'Research'),
        ('other', 'Other'),
    ]
    
    page_name = models.CharField(max_length=50, choices=PAGE_CHOICES)
    section_name = models.CharField(max_length=100)
    section_key = models.CharField(max_length=100, unique=True, help_text="Unique identifier for this section")
    content = models.TextField()
    image = models.ImageField(upload_to='pages/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0, help_text="Display order on the page")
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='page_updates')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['page_name', 'order']
        verbose_name = 'Page Content'
        verbose_name_plural = 'Page Contents'
    
    def __str__(self):
        return f"{self.get_page_name_display()} - {self.section_name}"


class QuickLink(models.Model):
    """Model for managing quick links"""
    
    title = models.CharField(max_length=100)
    url = models.URLField()
    icon = models.CharField(max_length=50, blank=True, help_text="Icon class name")
    description = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'title']
        verbose_name = 'Quick Link'
        verbose_name_plural = 'Quick Links'
    
    def __str__(self):
        return self.title
