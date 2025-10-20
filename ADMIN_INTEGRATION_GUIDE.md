# Admin Dashboard Integration Guide

This guide will help you integrate the admin dashboard into your existing SPIT website.

## 📋 Prerequisites

1. Backend server running on `http://localhost:8000`
2. React frontend running
3. All admin components created

## 🚀 Step-by-Step Integration

### Step 1: Install Required Dependencies

```bash
npm install axios
```

### Step 2: Create .env File

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
VITE_AUTH_URL=http://localhost:8000/api/auth
```

### Step 3: Update App.tsx

Add the admin routes to your `App.tsx`. Here's the complete code:

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Admin Pages
import {
  LoginPage,
  DashboardLayout,
  DashboardOverview,
  AnnouncementsManagement,
  UpdatePanelManagement,
  EventsManagement,
  GalleryManagement,
  ActivityLogs,
} from './pages/admin';

// Your existing imports...

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Your existing routes */}
          <Route path="/" element={<HomePage />} />
          {/* ... other routes ... */}

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="announcements" element={<AnnouncementsManagement />} />
            <Route path="update-panel" element={<UpdatePanelManagement />} />
            <Route path="events" element={<EventsManagement />} />
            <Route path="gallery" element={<GalleryManagement />} />
            <Route path="logs" element={<ActivityLogs />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
```

### Step 4: Add Admin Login Button to Navigation

Add the admin login button to your navigation bar. For example, in your `Header.tsx` or `Navbar.tsx`:

```tsx
import { AdminLoginButton } from './components/AdminLoginButton';

// In your navigation component
<nav>
  {/* Your existing nav items */}
  <AdminLoginButton />
</nav>
```

### Step 5: Update UpdatePanel.tsx to Use Backend Data

Update your existing `UpdatePanel.tsx` to fetch data from the backend:

```tsx
import { useState, useEffect } from 'react';
import { documentsAPI } from '../services/api';

export const UpdatePanel = () => {
  const [updates, setUpdates] = useState([]);
  
  useEffect(() => {
    fetchUpdates();
  }, []);
  
  const fetchUpdates = async () => {
    try {
      const response = await documentsAPI.getAll({ 
        is_active: true,
        ordering: '-uploaded_at',
        page_size: 8
      });
      
      const formatted = response.data.results.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        link: doc.file,
        isNew: true,
        isSeen: false,
        timestamp: new Date(doc.uploaded_at).toLocaleDateString()
      }));
      
      setUpdates(formatted);
    } catch (error) {
      console.error('Failed to fetch updates:', error);
    }
  };
  
  // Rest of your component...
};
```

### Step 6: Update AllAnnouncements.tsx to Use Backend Data

Update your announcements page to fetch from backend:

```tsx
import { useState, useEffect } from 'react';
import { announcementsAPI } from '../services/api';

const AllAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [section, setSection] = useState('all');
  
  useEffect(() => {
    fetchAnnouncements();
  }, [section]);
  
  const fetchAnnouncements = async () => {
    try {
      const response = await announcementsAPI.getAll({
        is_active: true,
        ordering: '-publish_date'
      });
      setAnnouncements(response.data.results);
    } catch (error) {
      console.error('Failed to fetch announcements:', error);
    }
  };
  
  return (
    <div>
      {announcements.map((announcement) => (
        <div key={announcement.id}>
          <h3>{announcement.title}</h3>
          <p>{announcement.content}</p>
          {announcement.pdf_file && (
            <a href={announcement.pdf_file} target="_blank">
              Download PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
```

## 🎯 Usage Instructions

### For Administrators

1. **Login**:
   - Navigate to `/admin/login`
   - Default credentials: `admin` / `admin123`
   - **Change password immediately after first login!**

2. **Dashboard**:
   - View statistics and recent activity
   - Quick access to all management sections

3. **Managing Announcements**:
   - Click "Announcements" in sidebar
   - Add new announcements with title, content, priority
   - Upload PDF files and images
   - Set active/inactive status
   - Set expiry dates

4. **Managing Update Panel**:
   - Click "Update Panel" in sidebar
   - Upload documents (PDFs, Word files)
   - Categorize by type (notice, circular, form, etc.)
   - Documents automatically appear in the homepage update panel

5. **Activity Logs**:
   - View all admin activities
   - See who made what changes
   - Track IP addresses and timestamps

## 🔒 Security Features

- JWT token authentication
- Protected routes
- Auto token refresh
- Session management
- Activity logging
- Secure file uploads

## 🐛 Troubleshooting

### Issue: "Network Error" when logging in

**Solution**: Make sure the backend server is running on `http://localhost:8000`

```bash
cd backend
python manage.py runserver
```

### Issue: "CORS Error"

**Solution**: Update backend CORS settings in `backend/spit_admin/settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',  # Your frontend URL
    'http://localhost:3000',
]
```

### Issue: Files not uploading

**Solution**: Check backend media directory permissions and `MEDIA_ROOT` settings.

### Issue: Not redirecting after login

**Solution**: Check that routes are properly configured in App.tsx with AuthProvider wrapping the Router.

## 📊 Features Summary

✅ **Secure Authentication** - JWT-based login system  
✅ **Announcements Management** - Create, edit, delete with PDF upload  
✅ **Update Panel Management** - Manage documents displayed on homepage  
✅ **Activity Logging** - Track all admin actions  
✅ **Real-time Updates** - Changes reflect immediately  
✅ **File Upload Support** - PDFs, images, documents  
✅ **Priority System** - Low, medium, high, urgent  
✅ **Active/Inactive Toggle** - Control visibility  
✅ **Responsive Design** - Works on all devices  
✅ **Beautiful UI** - Modern gradient design  

## 🔄 API Integration

The admin dashboard automatically integrates with your Django backend:

- **GET** `/api/announcements/` - Fetch all announcements
- **POST** `/api/announcements/` - Create announcement (with file upload)
- **PATCH** `/api/announcements/{id}/` - Update announcement
- **DELETE** `/api/announcements/{id}/` - Delete announcement
- **GET** `/api/documents/` - Fetch update panel documents
- **POST** `/api/documents/` - Upload document
- **GET** `/api/logs/activities/` - View activity logs

## 📝 Next Steps

1. **Change Admin Password**: Login and change the default password
2. **Add Content**: Create some test announcements and documents
3. **Customize**: Modify colors, branding as needed
4. **Deploy**: Follow deployment guide for production

## 🎨 Customization

### Change Colors

Edit the gradient colors in components:
- `from-[#FFD700] to-[#00BFFF]` for gold-to-blue
- `border-[#00BFFF]/30` for border colors

### Add More Features

Refer to `backend/API_DOCUMENTATION.md` for available endpoints and extend functionality as needed.

## 📞 Support

For issues or questions:
- Check backend logs: `backend/` directory
- Check browser console for frontend errors
- Review API_DOCUMENTATION.md for API details
- Check FRONTEND_INTEGRATION.md for integration examples

---

**You're all set!** 🎉 The admin dashboard is now integrated with your SPIT website.
