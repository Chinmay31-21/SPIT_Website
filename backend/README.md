# SPIT College Admin Backend

A comprehensive Django-based admin backend for managing college website content with authentication, activity logging, and RESTful APIs.

## Features

### 🔐 Admin Authentication
- Secure login/signup system using JWT tokens
- Session management and tracking
- Role-based access control

### 📊 Content Management
- **Announcements**: Manage college announcements with priority levels, PDFs, and images
- **Events**: Create and manage college events with posters and brochures
- **News Articles**: Publish news and updates
- **Gallery**: Manage image gallery with categories
- **Documents**: Upload and organize PDFs (syllabi, timetables, notices, etc.)
- **Departments**: Manage department information
- **Page Content**: Dynamic content management for website pages
- **Quick Links**: Manage quick access links

### 📝 Activity Logging
- Comprehensive logging of all admin activities
- Track creates, updates, and deletes
- Login/logout tracking
- Session duration monitoring
- IP address and user agent logging
- Change tracking with before/after values

### 🚀 API Features
- RESTful API endpoints for all models
- JWT authentication
- Filtering, searching, and pagination
- CORS enabled for frontend integration
- Read-only access for public, full access for admins

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Steps

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Create environment file**
   ```bash
   copy .env.example .env
   ```
   Edit `.env` and update the SECRET_KEY and other settings.

6. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. **Create superuser (admin)**
   ```bash
   python manage.py createsuperuser
   ```
   Follow the prompts to create your admin account.

8. **Create static directories**
   ```bash
   mkdir static
   mkdir media
   ```

9. **Collect static files**
   ```bash
   python manage.py collectstatic --noinput
   ```

10. **Run the development server**
    ```bash
    python manage.py runserver
    ```

The admin panel will be available at: `http://localhost:8000/admin/`

## API Endpoints

### Authentication
- `POST /api/auth/login/` - Login (get JWT tokens)
- `POST /api/auth/refresh/` - Refresh access token
- `POST /api/auth/verify/` - Verify token

### Content Management APIs
- `/api/announcements/` - Announcements CRUD
- `/api/departments/` - Departments CRUD
- `/api/events/` - Events CRUD
- `/api/gallery/` - Gallery images CRUD
- `/api/news/` - News articles CRUD
- `/api/documents/` - Documents CRUD
- `/api/page-content/` - Page content CRUD
- `/api/quick-links/` - Quick links CRUD

### Activity Logging APIs (Admin only)
- `/api/logs/activities/` - View activity logs
- `/api/logs/sessions/` - View admin sessions

## API Authentication

### Getting Tokens
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

Response:
```json
{
  "refresh": "refresh_token_here",
  "access": "access_token_here"
}
```

### Using Tokens
```bash
curl -X GET http://localhost:8000/api/announcements/ \
  -H "Authorization: Bearer access_token_here"
```

## Admin Panel Access

1. Navigate to `http://localhost:8000/admin/`
2. Login with your superuser credentials
3. Access the dashboard to:
   - Create/edit/delete content
   - Upload PDFs and images
   - Manage announcements
   - View activity logs
   - Monitor admin sessions

## Project Structure

```
backend/
├── spit_admin/              # Main project settings
│   ├── settings.py          # Django settings
│   ├── urls.py              # URL routing
│   └── wsgi.py              # WSGI configuration
├── content_manager/         # Content management app
│   ├── models.py            # Database models
│   ├── admin.py             # Admin interface
│   ├── views.py             # API views
│   ├── serializers.py       # DRF serializers
│   └── urls.py              # App URLs
├── activity_logger/         # Activity logging app
│   ├── models.py            # Log models
│   ├── admin.py             # Log admin interface
│   ├── middleware.py        # Logging middleware
│   ├── signals.py           # Django signals for auto-logging
│   └── views.py             # Log API views
├── manage.py                # Django management script
├── requirements.txt         # Python dependencies
└── README.md                # This file
```

## Models Overview

### Content Manager Models
1. **Announcement** - College announcements with PDFs
2. **Department** - Department information
3. **Event** - College events with media
4. **Gallery** - Image gallery
5. **NewsArticle** - News and updates
6. **Document** - File management (PDFs, docs)
7. **PageContent** - Dynamic page sections
8. **QuickLink** - Quick access links

### Activity Logger Models
1. **ActivityLog** - Tracks all admin activities
2. **AdminSession** - Tracks login sessions

## Security Features

- JWT token authentication
- CSRF protection
- Password hashing
- Session management
- IP address logging
- User agent tracking
- SSL/HTTPS ready (in production)
- Activity audit trail

## Frontend Integration

### Example: Fetch Announcements
```javascript
// Fetch announcements (public access)
fetch('http://localhost:8000/api/announcements/')
  .then(response => response.json())
  .then(data => console.log(data));

// Create announcement (requires authentication)
fetch('http://localhost:8000/api/announcements/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    title: 'New Announcement',
    content: 'Content here',
    priority: 'high',
    is_active: true
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Production Deployment

1. Update `.env` file:
   - Set `DEBUG=False`
   - Change `SECRET_KEY`
   - Update `ALLOWED_HOSTS`
   - Configure database (PostgreSQL recommended)

2. Use Gunicorn as WSGI server:
   ```bash
   gunicorn spit_admin.wsgi:application --bind 0.0.0.0:8000
   ```

3. Set up Nginx as reverse proxy
4. Configure SSL/HTTPS
5. Use PostgreSQL or MySQL for production database
6. Set up regular database backups

## Common Commands

```bash
# Run development server
python manage.py runserver

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Run tests
python manage.py test

# Shell access
python manage.py shell
```

## Troubleshooting

### Issue: Module not found
**Solution**: Make sure virtual environment is activated and dependencies are installed
```bash
pip install -r requirements.txt
```

### Issue: Database errors
**Solution**: Run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Issue: Static files not loading
**Solution**: Collect static files
```bash
python manage.py collectstatic --noinput
```

### Issue: CORS errors
**Solution**: Update `CORS_ALLOWED_ORIGINS` in `.env` file with your frontend URL

## Support

For issues and questions, please contact the development team or create an issue in the repository.

## License

This project is proprietary software for SPIT College.
