# 🎯 SPIT College Admin Dashboard

A complete admin management system for the SPIT College website with authentication, content management, and activity logging.

## ✨ Features

### 🔐 Authentication System
- **Secure JWT-based login**
- Auto token refresh
- Session management
- Protected routes
- Logout functionality

### 📢 Announcements Management
- Create, edit, delete announcements
- Upload PDF files and images
- Set priority levels (Low, Medium, High, Urgent)
- Active/inactive toggle
- Expiry date setting
- Real-time updates on homepage

### 📄 Update Panel Management
- Upload documents (PDF, DOC, DOCX)
- Categorize by type (Notice, Circular, Form, etc.)
- Automatic file size tracking
- Documents appear in homepage update panel
- Download links automatically generated

### 📊 Dashboard Overview
- Statistics cards showing total counts
- Recent activity feed
- Quick action buttons
- System status display

### 📝 Activity Logging
- Track all admin actions (create, update, delete)
- Login/logout tracking
- IP address logging
- Before/after change tracking
- Timestamp for all actions
- User identification

### 🎨 Modern UI Design
- Dark theme with gradient accents
- Smooth animations with Framer Motion
- Responsive design for all devices
- Beautiful glassmorphism effects
- Intuitive navigation

## 📦 Project Structure

```
src/
├── components/
│   ├── AdminLoginButton.tsx      # Login button for navigation
│   └── ProtectedRoute.tsx         # Route protection component
├── contexts/
│   └── AuthContext.tsx            # Authentication state management
├── pages/
│   └── admin/
│       ├── LoginPage.tsx          # Admin login page
│       ├── DashboardLayout.tsx    # Main dashboard layout
│       ├── DashboardOverview.tsx  # Dashboard home
│       ├── AnnouncementsManagement.tsx  # Announcements CRUD
│       ├── UpdatePanelManagement.tsx    # Documents CRUD
│       ├── EventsManagement.tsx         # Events management
│       ├── GalleryManagement.tsx        # Gallery management
│       ├── ActivityLogs.tsx             # Activity logs viewer
│       └── index.ts                     # Exports all admin pages
└── services/
    └── api.ts                     # API integration with backend
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install axios
```

### 2. Configure Environment

Create `.env` file:

```env
VITE_API_URL=http://localhost:8000/api
VITE_AUTH_URL=http://localhost:8000/api/auth
```

### 3. Start Backend Server

```bash
cd backend
python manage.py runserver
```

### 4. Start Frontend

```bash
npm run dev
```

### 5. Access Admin Panel

- **Login URL**: `http://localhost:5173/admin/login`
- **Username**: `admin`
- **Password**: `admin123`
- **⚠️ Change password immediately after first login!**

## 📖 Usage Guide

### Adding an Announcement

1. Navigate to **Dashboard** → **Announcements**
2. Click **"New Announcement"** button
3. Fill in:
   - Title (required)
   - Content (required)
   - Priority (Low/Medium/High/Urgent)
   - Status (Active/Inactive)
   - Optional: Upload PDF file
   - Optional: Upload image
4. Click **"Create Announcement"**
5. Announcement appears immediately on homepage

### Uploading Documents (Update Panel)

1. Navigate to **Dashboard** → **Update Panel**
2. Click **"New Document"** button
3. Fill in:
   - Title (required)
   - Description (optional)
   - Document Type (Notice/Circular/Form/etc.)
   - Status (Active/Inactive)
   - Upload file (required)
4. Click **"Upload Document"**
5. Document appears in homepage update panel

### Viewing Activity Logs

1. Navigate to **Dashboard** → **Activity Logs**
2. View all admin activities:
   - Who performed action
   - What was changed
   - When it happened
   - IP address
   - Before/after values

### Managing Content

**Edit**: Click pencil icon on any item  
**Delete**: Click trash icon (confirmation required)  
**Toggle Active**: Use checkbox in edit form  
**Upload Files**: Drag & drop or click to upload  

## 🔑 Admin Credentials

**Default Login:**
```
Username: admin
Password: admin123
```

**⚠️ IMPORTANT**: Change this password immediately after first login!

To create additional admin users:
```bash
cd backend
python manage.py createsuperuser
```

## 🎨 Customization

### Change Colors

The admin dashboard uses these primary colors:
- **Gold**: `#FFD700`
- **Cyan**: `#00BFFF`
- **Background**: Black with gradients

To customize, find and replace color codes in:
- `LoginPage.tsx`
- `DashboardLayout.tsx`
- All management pages

### Modify Sidebar Menu

Edit `DashboardLayout.tsx`:

```tsx
const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: Megaphone, label: 'Announcements', path: '/admin/announcements' },
  // Add your custom menu items here
];
```

## 📱 Responsive Design

The admin dashboard is fully responsive:
- **Desktop**: Full sidebar with expanded layout
- **Tablet**: Collapsible sidebar
- **Mobile**: Hamburger menu with overlay sidebar

## 🔒 Security Features

✅ JWT token authentication  
✅ Auto token refresh on expiry  
✅ Protected routes (requires login)  
✅ Session management  
✅ Activity logging with IP tracking  
✅ Secure file uploads  
✅ CSRF protection  
✅ Input validation  

## 🌐 API Endpoints Used

### Authentication
- `POST /api/auth/login/` - Login
- `POST /api/auth/refresh/` - Refresh token
- `POST /api/auth/verify/` - Verify token

### Announcements
- `GET /api/announcements/` - List all
- `POST /api/announcements/` - Create new
- `PATCH /api/announcements/{id}/` - Update
- `DELETE /api/announcements/{id}/` - Delete

### Documents (Update Panel)
- `GET /api/documents/` - List all
- `POST /api/documents/` - Upload new
- `PATCH /api/documents/{id}/` - Update
- `DELETE /api/documents/{id}/` - Delete

### Activity Logs
- `GET /api/logs/activities/` - View logs
- `GET /api/logs/sessions/` - View sessions

## 🐛 Troubleshooting

### Backend not responding
```bash
# Check if backend is running
cd backend
python manage.py runserver
```

### CORS errors
Update `backend/spit_admin/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',  # Add your frontend URL
]
```

### Files not uploading
Check backend media directory exists:
```bash
cd backend
mkdir media
mkdir media/announcements
mkdir media/documents
```

### Login not working
1. Verify backend is running on port 8000
2. Check `.env` file has correct API URLs
3. Clear browser cache and try again
4. Check browser console for errors

### Token expired errors
The system auto-refreshes tokens, but if issues persist:
1. Logout and login again
2. Clear local storage in browser dev tools
3. Check token expiry settings in backend

## 📊 Statistics & Monitoring

The dashboard tracks:
- Total announcements
- Total documents
- Total events
- Total activity logs
- Recent admin actions
- Login/logout history

## 🚀 Deployment

### Production Checklist

1. **Change default admin password**
2. **Update .env with production URLs**
3. **Enable HTTPS**
4. **Configure production database**
5. **Set DEBUG=False in backend**
6. **Configure proper CORS origins**
7. **Set up file storage (S3, etc.)**
8. **Enable rate limiting**
9. **Set up backup system**
10. **Configure logging**

### Build for Production

```bash
# Frontend
npm run build

# Backend
cd backend
python manage.py collectstatic
gunicorn spit_admin.wsgi:application
```

## 📚 Additional Resources

- **Backend API Docs**: `backend/API_DOCUMENTATION.md`
- **Integration Guide**: `ADMIN_INTEGRATION_GUIDE.md`
- **Frontend Integration**: `backend/FRONTEND_INTEGRATION.md`
- **Backend README**: `backend/README.md`

## 🤝 Support

For issues or questions:
1. Check this README
2. Review integration guide
3. Check API documentation
4. Review backend logs
5. Check browser console

## 📝 Changelog

### v1.0.0 (Current)
- ✅ Initial release
- ✅ Authentication system
- ✅ Announcements management
- ✅ Update panel management
- ✅ Activity logging
- ✅ Dashboard overview

### Upcoming Features
- 🔄 Events management (complete CRUD)
- 🔄 Gallery management
- 🔄 Bulk operations
- 🔄 Export functionality
- 🔄 Advanced filtering
- 🔄 Email notifications

## ⚡ Performance Tips

1. **Pagination**: Large lists are automatically paginated
2. **Lazy Loading**: Images load on demand
3. **Caching**: API responses cached when appropriate
4. **Optimistic Updates**: UI updates immediately
5. **Debounced Search**: Search requests debounced

## 🎉 You're All Set!

The admin dashboard is now ready to use. Login and start managing your college website content!

**Login at**: `http://localhost:5173/admin/login`

---

Built with ❤️ for SPIT College
