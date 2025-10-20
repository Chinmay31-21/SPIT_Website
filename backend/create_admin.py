#!/usr/bin/env python
"""
Quick script to create admin superuser
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spit_admin.settings')
django.setup()

from django.contrib.auth.models import User

# Create superuser
username = 'admin'
email = 'admin@spit.ac.in'
password = 'admin123'  # Change this after first login!

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print("Superuser created successfully!")
    print(f"   Username: {username}")
    print(f"   Password: {password}")
    print("   WARNING: Please change the password after first login!")
else:
    print(f"Superuser '{username}' already exists")
