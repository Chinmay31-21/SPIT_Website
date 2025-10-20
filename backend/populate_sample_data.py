#!/usr/bin/env python
"""
Script to populate sample data for testing
"""
import os
import django
from datetime import datetime, timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spit_admin.settings')
django.setup()

from django.contrib.auth.models import User
from content_manager.models import (
    Announcement, Department, Event, Gallery, 
    NewsArticle, Document, PageContent, QuickLink
)

# Get admin user
admin_user = User.objects.filter(is_superuser=True).first()

if not admin_user:
    print("Error: No admin user found. Please create a superuser first.")
    exit(1)

print("Creating sample data...")

# Create Departments
departments_data = [
    {"name": "Computer Engineering", "code": "COMPS", "description": "Department of Computer Engineering", "email": "comps@spit.ac.in"},
    {"name": "Information Technology", "code": "IT", "description": "Department of Information Technology", "email": "it@spit.ac.in"},
    {"name": "Electronics Engineering", "code": "EXTC", "description": "Department of Electronics & Telecommunication", "email": "extc@spit.ac.in"},
    {"name": "Mechanical Engineering", "code": "MECH", "description": "Department of Mechanical Engineering", "email": "mech@spit.ac.in"},
]

departments = []
for dept_data in departments_data:
    dept, created = Department.objects.get_or_create(
        code=dept_data['code'],
        defaults=dept_data
    )
    departments.append(dept)
    if created:
        print(f"Created department: {dept.name}")

# Create Announcements
announcements_data = [
    {
        "title": "Important: Semester Examination Schedule Released",
        "content": "The examination schedule for the upcoming semester has been released. Students are requested to check the official notice board and download their hall tickets.",
        "priority": "urgent"
    },
    {
        "title": "Workshop on AI and Machine Learning",
        "content": "Join us for a comprehensive workshop on AI and ML. Industry experts will share insights and hands-on experience. Register now!",
        "priority": "high"
    },
    {
        "title": "Library Hours Extended",
        "content": "Library hours have been extended during examination period. New timings: 8:00 AM to 10:00 PM on weekdays.",
        "priority": "medium"
    },
]

for ann_data in announcements_data:
    ann, created = Announcement.objects.get_or_create(
        title=ann_data['title'],
        defaults={
            **ann_data,
            'created_by': admin_user,
            'is_active': True,
            'publish_date': datetime.now()
        }
    )
    if created:
        print(f"Created announcement: {ann.title}")

# Create Events
events_data = [
    {
        "title": "Tech Fest 2024",
        "description": "Annual technical festival featuring coding competitions, project exhibitions, and guest lectures.",
        "event_type": "technical",
        "venue": "Main Auditorium",
        "start_date": datetime.now() + timedelta(days=15),
        "end_date": datetime.now() + timedelta(days=17),
    },
    {
        "title": "Industry Expert Seminar: Future of Technology",
        "description": "Renowned industry experts will discuss emerging trends and career opportunities in technology.",
        "event_type": "seminar",
        "venue": "Conference Hall",
        "start_date": datetime.now() + timedelta(days=7),
        "end_date": datetime.now() + timedelta(days=7),
    },
]

for event_data in events_data:
    event, created = Event.objects.get_or_create(
        title=event_data['title'],
        defaults={
            **event_data,
            'created_by': admin_user,
            'department': departments[0],
            'is_active': True
        }
    )
    if created:
        print(f"Created event: {event.title}")

# Create News Articles
news_data = [
    {
        "title": "SPIT Students Win National Hackathon",
        "slug": "spit-students-win-national-hackathon",
        "summary": "Team from Computer Engineering department secures first place in prestigious national-level hackathon.",
        "content": "Students from SPIT College have made the institution proud by winning the first prize in the National Hackathon 2024. The team developed an innovative solution for smart city management using AI and IoT technologies.",
        "is_featured": True,
        "is_published": True,
    },
    {
        "title": "New Research Lab Inaugurated",
        "slug": "new-research-lab-inaugurated",
        "summary": "State-of-the-art research laboratory for robotics and automation inaugurated at SPIT campus.",
        "content": "The college has inaugurated a new research laboratory equipped with cutting-edge technology for robotics and automation research. This facility will enable students and faculty to conduct advanced research projects.",
        "is_featured": False,
        "is_published": True,
    },
]

for news_item in news_data:
    article, created = NewsArticle.objects.get_or_create(
        slug=news_item['slug'],
        defaults={
            **news_item,
            'author': admin_user,
            'published_date': datetime.now()
        }
    )
    if created:
        print(f"Created news article: {article.title}")

# Create Quick Links
quick_links_data = [
    {"title": "Student Portal", "url": "https://spit.ac.in/portal", "icon": "user", "order": 1},
    {"title": "Academic Calendar", "url": "https://spit.ac.in/calendar", "icon": "calendar", "order": 2},
    {"title": "Library", "url": "https://spit.ac.in/library", "icon": "book", "order": 3},
    {"title": "Placements", "url": "https://spit.ac.in/placements", "icon": "briefcase", "order": 4},
    {"title": "Contact Us", "url": "https://spit.ac.in/contact", "icon": "phone", "order": 5},
]

for link_data in quick_links_data:
    link, created = QuickLink.objects.get_or_create(
        title=link_data['title'],
        defaults=link_data
    )
    if created:
        print(f"Created quick link: {link.title}")

# Create Page Content
page_content_data = [
    {
        "page_name": "home",
        "section_name": "Hero Section",
        "section_key": "home_hero",
        "content": "Welcome to Sardar Patel Institute of Technology - Nurturing Excellence in Engineering Education",
        "order": 1
    },
    {
        "page_name": "about",
        "section_name": "About SPIT",
        "section_key": "about_intro",
        "content": "SPIT is a premier engineering institution committed to providing quality education and fostering innovation. With state-of-the-art infrastructure and experienced faculty, we prepare students for successful careers in technology.",
        "order": 1
    },
]

for content_data in page_content_data:
    content, created = PageContent.objects.get_or_create(
        section_key=content_data['section_key'],
        defaults={
            **content_data,
            'updated_by': admin_user,
            'is_active': True
        }
    )
    if created:
        print(f"Created page content: {content.section_name}")

print("\n" + "="*50)
print("Sample data population completed!")
print("="*50)
print("\nSummary:")
print(f"Departments: {Department.objects.count()}")
print(f"Announcements: {Announcement.objects.count()}")
print(f"Events: {Event.objects.count()}")
print(f"News Articles: {NewsArticle.objects.count()}")
print(f"Quick Links: {QuickLink.objects.count()}")
print(f"Page Contents: {PageContent.objects.count()}")
print("\nYou can now view these in the admin panel at http://localhost:8000/admin/")
