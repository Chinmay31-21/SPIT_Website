# SPIT Admin Backend - API Documentation

## Base URL
```
Development: http://localhost:8000
Production: https://your-domain.com
```

## Authentication

### JWT Token Authentication
All write operations (POST, PUT, PATCH, DELETE) require authentication. Read operations (GET) are public.

### Login
**Endpoint:** `POST /api/auth/login/`

**Request Body:**
```json
{
  "username": "admin",
  "password": "your_password"
}
```

**Response:**
```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

### Refresh Token
**Endpoint:** `POST /api/auth/refresh/`

**Request Body:**
```json
{
  "refresh": "your_refresh_token"
}
```

**Response:**
```json
{
  "access": "new_access_token"
}
```

### Verify Token
**Endpoint:** `POST /api/auth/verify/`

**Request Body:**
```json
{
  "token": "your_access_token"
}
```

### Using Authentication
Include the access token in the Authorization header:
```
Authorization: Bearer your_access_token
```

---

## Announcements API

### List Announcements
**Endpoint:** `GET /api/announcements/`

**Query Parameters:**
- `priority`: Filter by priority (low, medium, high, urgent)
- `is_active`: Filter by active status (true/false)
- `search`: Search in title and content
- `ordering`: Sort by field (e.g., `-publish_date`, `priority`)
- `page`: Page number for pagination

**Response:**
```json
{
  "count": 25,
  "next": "http://localhost:8000/api/announcements/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Important Notice",
      "content": "Content here...",
      "priority": "high",
      "pdf_file": "http://localhost:8000/media/announcements/pdfs/file.pdf",
      "image": "http://localhost:8000/media/announcements/images/image.jpg",
      "is_active": true,
      "publish_date": "2024-01-15T10:00:00Z",
      "expiry_date": null,
      "created_by": 1,
      "created_by_name": "admin",
      "created_at": "2024-01-15T10:00:00Z",
      "updated_at": "2024-01-15T10:00:00Z"
    }
  ]
}
```

### Get Single Announcement
**Endpoint:** `GET /api/announcements/{id}/`

### Create Announcement (Admin only)
**Endpoint:** `POST /api/announcements/`

**Request Body:**
```json
{
  "title": "New Announcement",
  "content": "Announcement content here",
  "priority": "high",
  "is_active": true,
  "publish_date": "2024-01-15T10:00:00Z",
  "expiry_date": null
}
```

For file uploads, use `multipart/form-data`:
```javascript
const formData = new FormData();
formData.append('title', 'New Announcement');
formData.append('content', 'Content here');
formData.append('priority', 'high');
formData.append('pdf_file', pdfFile);
formData.append('image', imageFile);
```

### Update Announcement (Admin only)
**Endpoint:** `PUT /api/announcements/{id}/` or `PATCH /api/announcements/{id}/`

### Delete Announcement (Admin only)
**Endpoint:** `DELETE /api/announcements/{id}/`

---

## Events API

### List Events
**Endpoint:** `GET /api/events/`

**Query Parameters:**
- `event_type`: Filter by type (workshop, seminar, conference, cultural, sports, technical, other)
- `department`: Filter by department ID
- `is_active`: Filter by active status
- `search`: Search in title, description, venue
- `ordering`: Sort by field (e.g., `-start_date`)

**Response:**
```json
{
  "count": 15,
  "results": [
    {
      "id": 1,
      "title": "Tech Workshop",
      "description": "Workshop description...",
      "event_type": "workshop",
      "department": 1,
      "department_name": "Computer Engineering",
      "venue": "Auditorium",
      "start_date": "2024-02-01T14:00:00Z",
      "end_date": "2024-02-01T17:00:00Z",
      "registration_link": "https://example.com/register",
      "poster": "http://localhost:8000/media/events/posters/poster.jpg",
      "brochure": "http://localhost:8000/media/events/brochures/brochure.pdf",
      "is_active": true,
      "created_by": 1,
      "created_by_name": "admin"
    }
  ]
}
```

### Create/Update/Delete Events
Similar to Announcements API (requires admin authentication)

---

## Documents API

### List Documents
**Endpoint:** `GET /api/documents/`

**Query Parameters:**
- `document_type`: Filter by type (syllabus, timetable, notice, circular, form, policy, guideline, report, other)
- `department`: Filter by department ID
- `is_active`: Filter by active status
- `search`: Search in title and description

**Response:**
```json
{
  "count": 30,
  "results": [
    {
      "id": 1,
      "title": "Semester 1 Syllabus",
      "description": "Complete syllabus for semester 1",
      "document_type": "syllabus",
      "department": 1,
      "department_name": "Computer Engineering",
      "file": "http://localhost:8000/media/documents/syllabus.pdf",
      "file_size": 2048576,
      "file_size_display": "2.00 MB",
      "is_active": true,
      "uploaded_by": 1,
      "uploaded_by_name": "admin",
      "uploaded_at": "2024-01-15T10:00:00Z"
    }
  ]
}
```

---

## Gallery API

### List Gallery Images
**Endpoint:** `GET /api/gallery/`

**Query Parameters:**
- `category`: Filter by category (campus, events, infrastructure, students, achievements, other)
- `is_featured`: Filter featured images (true/false)
- `is_active`: Filter by active status

**Response:**
```json
{
  "count": 50,
  "results": [
    {
      "id": 1,
      "title": "Campus View",
      "description": "Beautiful campus view",
      "category": "campus",
      "image": "http://localhost:8000/media/gallery/campus1.jpg",
      "is_featured": true,
      "is_active": true,
      "uploaded_by": 1,
      "uploaded_by_name": "admin",
      "uploaded_at": "2024-01-15T10:00:00Z"
    }
  ]
}
```

---

## News Articles API

### List News Articles
**Endpoint:** `GET /api/news/`

**Query Parameters:**
- `is_featured`: Filter featured articles
- `is_published`: Filter published articles
- `search`: Search in title, summary, content

**Response:**
```json
{
  "count": 20,
  "results": [
    {
      "id": 1,
      "title": "College Wins National Award",
      "slug": "college-wins-national-award",
      "summary": "Short summary...",
      "content": "Full article content...",
      "featured_image": "http://localhost:8000/media/news/featured/image.jpg",
      "pdf_attachment": "http://localhost:8000/media/news/pdfs/article.pdf",
      "is_featured": true,
      "is_published": true,
      "published_date": "2024-01-15T10:00:00Z",
      "author": 1,
      "author_name": "admin"
    }
  ]
}
```

---

## Page Content API

### List Page Content
**Endpoint:** `GET /api/page-content/`

**Query Parameters:**
- `page_name`: Filter by page (home, about, admissions, placements, contact, faculty, research, other)
- `is_active`: Filter by active status

**Response:**
```json
{
  "count": 10,
  "results": [
    {
      "id": 1,
      "page_name": "home",
      "section_name": "Hero Section",
      "section_key": "home_hero",
      "content": "Welcome to SPIT...",
      "image": "http://localhost:8000/media/pages/hero.jpg",
      "is_active": true,
      "order": 1,
      "updated_by": 1,
      "updated_by_name": "admin"
    }
  ]
}
```

---

## Departments API

### List Departments
**Endpoint:** `GET /api/departments/`

**Response:**
```json
{
  "count": 8,
  "results": [
    {
      "id": 1,
      "name": "Computer Engineering",
      "code": "COMPS",
      "description": "Department description...",
      "head_of_department": "Dr. John Doe",
      "email": "comps@spit.ac.in",
      "phone": "+91 9876543210",
      "is_active": true
    }
  ]
}
```

---

## Quick Links API

### List Quick Links
**Endpoint:** `GET /api/quick-links/`

**Response:**
```json
{
  "count": 5,
  "results": [
    {
      "id": 1,
      "title": "Admissions",
      "url": "https://spit.ac.in/admissions",
      "icon": "graduation-cap",
      "description": "Apply for admissions",
      "is_active": true,
      "order": 1
    }
  ]
}
```

---

## Activity Logs API (Admin Only)

### List Activity Logs
**Endpoint:** `GET /api/logs/activities/`

**Query Parameters:**
- `action`: Filter by action (create, update, delete, login, logout, view, download, upload)
- `user`: Filter by user ID
- `start_date`: Filter from date
- `end_date`: Filter to date
- `my_logs`: Show only current user's logs (true/false)

**Response:**
```json
{
  "count": 100,
  "results": [
    {
      "id": 1,
      "user": 1,
      "user_display": "admin",
      "username": "admin",
      "action": "create",
      "action_display": "Created",
      "description": "Created Announcement: Important Notice",
      "content_type": "announcement",
      "content_type_display": "announcement",
      "object_id": 5,
      "ip_address": "127.0.0.1",
      "user_agent": "Mozilla/5.0...",
      "changes": {
        "title": {"old": "", "new": "Important Notice"}
      },
      "timestamp": "2024-01-15T10:00:00Z"
    }
  ]
}
```

### List Admin Sessions
**Endpoint:** `GET /api/logs/sessions/`

**Query Parameters:**
- `active_only`: Show only active sessions (true/false)

**Response:**
```json
{
  "count": 5,
  "results": [
    {
      "id": 1,
      "user": 1,
      "username": "admin",
      "session_key": "abc123...",
      "ip_address": "127.0.0.1",
      "user_agent": "Mozilla/5.0...",
      "login_time": "2024-01-15T10:00:00Z",
      "logout_time": "2024-01-15T12:00:00Z",
      "is_active": false,
      "duration": "2h 0m"
    }
  ]
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "field_name": ["Error message"]
}
```

### 401 Unauthorized
```json
{
  "detail": "Authentication credentials were not provided."
}
```

### 403 Forbidden
```json
{
  "detail": "You do not have permission to perform this action."
}
```

### 404 Not Found
```json
{
  "detail": "Not found."
}
```

### 500 Server Error
```json
{
  "detail": "Internal server error."
}
```

---

## File Upload Example (JavaScript)

```javascript
// Upload announcement with PDF and image
const formData = new FormData();
formData.append('title', 'New Announcement');
formData.append('content', 'Announcement content');
formData.append('priority', 'high');
formData.append('is_active', true);
formData.append('pdf_file', pdfFileInput.files[0]);
formData.append('image', imageFileInput.files[0]);

fetch('http://localhost:8000/api/announcements/', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  },
  body: formData
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

## Filtering and Searching Example

```javascript
// Get high priority active announcements
fetch('http://localhost:8000/api/announcements/?priority=high&is_active=true')
  .then(response => response.json())
  .then(data => console.log(data));

// Search announcements
fetch('http://localhost:8000/api/announcements/?search=exam')
  .then(response => response.json())
  .then(data => console.log(data));

// Get announcements sorted by date
fetch('http://localhost:8000/api/announcements/?ordering=-publish_date')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Rate Limiting
Currently no rate limiting is implemented. Consider implementing rate limiting in production.

## CORS
CORS is enabled for origins specified in the `.env` file. Update `CORS_ALLOWED_ORIGINS` to include your frontend domain.
