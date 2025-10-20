#!/usr/bin/env python
"""
Script to test API endpoints
"""
import requests
import json

BASE_URL = "http://localhost:8000/api"
AUTH_URL = "http://localhost:8000/api/auth"

print("="*60)
print("SPIT Admin Backend - API Testing")
print("="*60)

# Test 1: Get Announcements (Public - No Auth Required)
print("\n1. Testing GET /api/announcements/ (Public)")
print("-" * 60)
try:
    response = requests.get(f"{BASE_URL}/announcements/")
    if response.status_code == 200:
        data = response.json()
        print(f"✓ Success! Found {data['count']} announcements")
        if data['results']:
            print(f"\nFirst announcement:")
            print(f"  Title: {data['results'][0]['title']}")
            print(f"  Priority: {data['results'][0]['priority']}")
            print(f"  Created by: {data['results'][0]['created_by_name']}")
    else:
        print(f"✗ Failed with status code: {response.status_code}")
except Exception as e:
    print(f"✗ Error: {e}")

# Test 2: Get Departments (Public)
print("\n2. Testing GET /api/departments/ (Public)")
print("-" * 60)
try:
    response = requests.get(f"{BASE_URL}/departments/")
    if response.status_code == 200:
        data = response.json()
        print(f"✓ Success! Found {data['count']} departments")
        for dept in data['results']:
            print(f"  - {dept['name']} ({dept['code']})")
    else:
        print(f"✗ Failed with status code: {response.status_code}")
except Exception as e:
    print(f"✗ Error: {e}")

# Test 3: Get Events (Public)
print("\n3. Testing GET /api/events/ (Public)")
print("-" * 60)
try:
    response = requests.get(f"{BASE_URL}/events/")
    if response.status_code == 200:
        data = response.json()
        print(f"✓ Success! Found {data['count']} events")
        if data['results']:
            print(f"\nUpcoming event:")
            print(f"  Title: {data['results'][0]['title']}")
            print(f"  Type: {data['results'][0]['event_type']}")
            print(f"  Venue: {data['results'][0]['venue']}")
    else:
        print(f"✗ Failed with status code: {response.status_code}")
except Exception as e:
    print(f"✗ Error: {e}")

# Test 4: Get News Articles (Public)
print("\n4. Testing GET /api/news/ (Public)")
print("-" * 60)
try:
    response = requests.get(f"{BASE_URL}/news/")
    if response.status_code == 200:
        data = response.json()
        print(f"✓ Success! Found {data['count']} news articles")
        if data['results']:
            print(f"\nLatest news:")
            print(f"  Title: {data['results'][0]['title']}")
            print(f"  Summary: {data['results'][0]['summary'][:80]}...")
    else:
        print(f"✗ Failed with status code: {response.status_code}")
except Exception as e:
    print(f"✗ Error: {e}")

# Test 5: Get Quick Links (Public)
print("\n5. Testing GET /api/quick-links/ (Public)")
print("-" * 60)
try:
    response = requests.get(f"{BASE_URL}/quick-links/")
    if response.status_code == 200:
        data = response.json()
        print(f"✓ Success! Found {data['count']} quick links")
        for link in data['results']:
            print(f"  - {link['title']}: {link['url']}")
    else:
        print(f"✗ Failed with status code: {response.status_code}")
except Exception as e:
    print(f"✗ Error: {e}")

# Test 6: Login to get JWT Token
print("\n6. Testing POST /api/auth/login/ (Authentication)")
print("-" * 60)
print("Attempting to login as admin...")
try:
    login_data = {
        "username": "admin",
        "password": "admin123"
    }
    response = requests.post(f"{AUTH_URL}/login/", json=login_data)
    if response.status_code == 200:
        tokens = response.json()
        access_token = tokens.get('access')
        refresh_token = tokens.get('refresh')
        print("✓ Login successful!")
        print(f"  Access token (first 50 chars): {access_token[:50]}...")
        print(f"  Refresh token (first 50 chars): {refresh_token[:50]}...")
        
        # Test 7: Create Announcement (Requires Auth)
        print("\n7. Testing POST /api/announcements/ (Requires Authentication)")
        print("-" * 60)
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        }
        new_announcement = {
            "title": "API Test Announcement",
            "content": "This announcement was created via the API for testing purposes.",
            "priority": "low",
            "is_active": True
        }
        response = requests.post(f"{BASE_URL}/announcements/", 
                               json=new_announcement, 
                               headers=headers)
        if response.status_code == 201:
            data = response.json()
            print("✓ Announcement created successfully!")
            print(f"  ID: {data['id']}")
            print(f"  Title: {data['title']}")
            
            # Clean up - delete the test announcement
            announcement_id = data['id']
            delete_response = requests.delete(
                f"{BASE_URL}/announcements/{announcement_id}/",
                headers=headers
            )
            if delete_response.status_code == 204:
                print("✓ Test announcement cleaned up successfully")
        else:
            print(f"✗ Failed with status code: {response.status_code}")
            print(f"  Response: {response.text}")
        
        # Test 8: Get Activity Logs (Admin Only)
        print("\n8. Testing GET /api/logs/activities/ (Admin Only)")
        print("-" * 60)
        response = requests.get(f"{BASE_URL}/logs/activities/", headers=headers)
        if response.status_code == 200:
            data = response.json()
            print(f"✓ Success! Found {data['count']} activity logs")
            if data['results']:
                print(f"\nRecent activity:")
                for log in data['results'][:3]:
                    print(f"  - {log['username']}: {log['action_display']} - {log['description'][:60]}...")
        else:
            print(f"✗ Failed with status code: {response.status_code}")
            
    else:
        print(f"✗ Login failed with status code: {response.status_code}")
        print(f"  Response: {response.text}")
except Exception as e:
    print(f"✗ Error: {e}")

print("\n" + "="*60)
print("API Testing Complete!")
print("="*60)
print("\nNext Steps:")
print("1. Visit http://localhost:8000/admin/ to see the admin dashboard")
print("2. Login with username: admin, password: admin123")
print("3. Explore the content management features")
print("4. Check API_DOCUMENTATION.md for complete API reference")
print("5. See FRONTEND_INTEGRATION.md for frontend integration examples")
