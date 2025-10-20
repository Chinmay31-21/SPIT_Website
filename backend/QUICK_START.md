# Quick Start Guide - SPIT Admin Backend

Get your admin backend up and running in 5 minutes!

## Prerequisites
- Python 3.8+ installed
- Git installed
- Text editor or IDE

## Step-by-Step Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Create Virtual Environment
```bash
python -m venv venv
```

### 3. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Run Setup Script (Automated)
```bash
python setup.py
```

This will:
- Create `.env` file with secure SECRET_KEY
- Create necessary directories
- Run database migrations
- Collect static files
- Prompt you to create superuser

**OR Manual Setup:**

```bash
# Copy environment file
copy .env.example .env

# Create directories
mkdir static media

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic --noinput
```

### 6. Start Development Server
```bash
python manage.py runserver
```

### 7. Access Admin Panel
Open your browser and go to:
```
http://localhost:8000/admin/
```

Login with the superuser credentials you created.

## Testing the API

### Get Announcements (Public)
```bash
curl http://localhost:8000/api/announcements/
```

### Login to Get Token
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"your_username\", \"password\": \"your_password\"}"
```

### Create Announcement (Requires Auth)
```bash
curl -X POST http://localhost:8000/api/announcements/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d "{\"title\": \"Test\", \"content\": \"Test content\", \"priority\": \"medium\", \"is_active\": true}"
```

## What You Get

✅ **Admin Dashboard** - Beautiful Django admin interface  
✅ **Authentication** - JWT-based secure login  
✅ **Content Management** - Manage announcements, events, documents, etc.  
✅ **File Uploads** - Upload PDFs and images  
✅ **Activity Logging** - Track all admin actions  
✅ **RESTful API** - Access all data via API  
✅ **CORS Enabled** - Ready for frontend integration  

## Next Steps

1. **Customize Settings**: Edit `spit_admin/settings.py`
2. **Add Content**: Use admin panel to add announcements, events, etc.
3. **Integrate Frontend**: See `FRONTEND_INTEGRATION.md`
4. **View API Docs**: See `API_DOCUMENTATION.md`
5. **Deploy**: See `README.md` for production deployment

## Common Issues

**Issue: ModuleNotFoundError**  
**Solution**: Make sure virtual environment is activated and dependencies are installed

**Issue: Port already in use**  
**Solution**: Use different port: `python manage.py runserver 8080`

**Issue: Database locked**  
**Solution**: Close any other processes accessing the database

## Support

For detailed documentation:
- `README.md` - Complete documentation
- `API_DOCUMENTATION.md` - API reference
- `FRONTEND_INTEGRATION.md` - Frontend integration guide

---

**That's it! You're ready to go! 🚀**
