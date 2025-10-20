# Frontend Integration Guide

This guide shows how to integrate the SPIT Admin Backend with your React/Vue/Angular frontend.

## Table of Contents
1. [Setup](#setup)
2. [Authentication](#authentication)
3. [Fetching Data](#fetching-data)
4. [Creating/Updating Content](#creating-updating-content)
5. [File Uploads](#file-uploads)
6. [Error Handling](#error-handling)

---

## Setup

### Install Axios (Recommended)
```bash
npm install axios
```

### Create API Service

**`src/services/api.js`**
```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${API_BASE_URL}/auth/refresh/`, {
          refresh: refreshToken,
        });

        const { access } = response.data;
        localStorage.setItem('access_token', access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // Refresh token failed, redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

---

## Authentication

### Login Component

**`src/components/Login.jsx`**
```javascript
import { useState } from 'react';
import api from '../services/api';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login/', credentials);
      const { access, refresh } = response.data;

      // Store tokens
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
```

### Logout Function
```javascript
export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
};
```

---

## Fetching Data

### Announcements List Component

**`src/components/AnnouncementsList.jsx`**
```javascript
import { useState, useEffect } from 'react';
import api from '../services/api';

function AnnouncementsList() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await api.get('/announcements/', {
        params: {
          is_active: true,
          ordering: '-publish_date'
        }
      });
      setAnnouncements(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="announcements-list">
      <h2>Announcements</h2>
      {announcements.map((announcement) => (
        <div key={announcement.id} className="announcement-card">
          <h3>{announcement.title}</h3>
          <p>{announcement.content}</p>
          <span className={`priority ${announcement.priority}`}>
            {announcement.priority}
          </span>
          {announcement.pdf_file && (
            <a href={announcement.pdf_file} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          )}
          {announcement.image && (
            <img src={announcement.image} alt={announcement.title} />
          )}
        </div>
      ))}
    </div>
  );
}

export default AnnouncementsList;
```

### Events Component with Filtering

**`src/components/Events.jsx`**
```javascript
import { useState, useEffect } from 'react';
import api from '../services/api';

function Events() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    event_type: '',
    department: ''
  });

  useEffect(() => {
    fetchEvents();
  }, [filters]);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events/', { params: filters });
      setEvents(response.data.results);
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };

  return (
    <div>
      <h2>Events</h2>
      
      {/* Filters */}
      <div className="filters">
        <select
          value={filters.event_type}
          onChange={(e) => setFilters({ ...filters, event_type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
          <option value="conference">Conference</option>
        </select>
      </div>

      {/* Events List */}
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {event.poster && (
              <img src={event.poster} alt={event.title} />
            )}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Venue:</strong> {event.venue}
            </p>
            <p>
              <strong>Date:</strong> {new Date(event.start_date).toLocaleDateString()}
            </p>
            {event.registration_link && (
              <a href={event.registration_link} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
```

---

## Creating/Updating Content

### Create Announcement Form (Admin)

**`src/components/CreateAnnouncement.jsx`**
```javascript
import { useState } from 'react';
import api from '../services/api';

function CreateAnnouncement() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'medium',
    is_active: true
  });
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const data = new FormData();
      
      // Append text fields
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      // Append files
      if (pdfFile) data.append('pdf_file', pdfFile);
      if (imageFile) data.append('image', imageFile);

      const response = await api.post('/announcements/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Announcement created successfully!');
      
      // Reset form
      setFormData({
        title: '',
        content: '',
        priority: 'medium',
        is_active: true
      });
      setPdfFile(null);
      setImageFile(null);
      
    } catch (err) {
      setMessage('Error creating announcement: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-announcement">
      <h2>Create New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
        />

        <select
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={formData.is_active}
            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
          />
          Active
        </label>

        <div>
          <label>PDF File:</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
          />
        </div>

        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Announcement'}
        </button>

        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default CreateAnnouncement;
```

### Update Content Example
```javascript
const updateAnnouncement = async (id, updates) => {
  try {
    const response = await api.patch(`/announcements/${id}/`, updates);
    console.log('Updated:', response.data);
  } catch (error) {
    console.error('Update failed:', error);
  }
};

// Usage
updateAnnouncement(1, { title: 'Updated Title', priority: 'high' });
```

### Delete Content Example
```javascript
const deleteAnnouncement = async (id) => {
  if (confirm('Are you sure you want to delete this announcement?')) {
    try {
      await api.delete(`/announcements/${id}/`);
      console.log('Deleted successfully');
      // Refresh the list
      fetchAnnouncements();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  }
};
```

---

## File Uploads

### Upload Document Component

**`src/components/UploadDocument.jsx`**
```javascript
import { useState } from 'react';
import api from '../services/api';

function UploadDocument() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    document_type: 'notice'
  });
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('document_type', formData.document_type);
    data.append('file', file);

    try {
      const response = await api.post('/documents/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        }
      });

      alert('Document uploaded successfully!');
      setProgress(0);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="text"
        placeholder="Document Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />

      <select
        value={formData.document_type}
        onChange={(e) => setFormData({ ...formData, document_type: e.target.value })}
      >
        <option value="syllabus">Syllabus</option>
        <option value="timetable">Timetable</option>
        <option value="notice">Notice</option>
        <option value="circular">Circular</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />

      <button type="submit">Upload</button>

      {progress > 0 && (
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
      )}
    </form>
  );
}

export default UploadDocument;
```

---

## Error Handling

### Global Error Handler

**`src/utils/errorHandler.js`**
```javascript
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    const status = error.response.status;
    const data = error.response.data;

    switch (status) {
      case 400:
        return {
          message: 'Invalid data provided',
          details: data
        };
      case 401:
        return {
          message: 'Unauthorized. Please login again.',
          redirect: '/login'
        };
      case 403:
        return {
          message: 'You do not have permission to perform this action.'
        };
      case 404:
        return {
          message: 'Resource not found.'
        };
      case 500:
        return {
          message: 'Server error. Please try again later.'
        };
      default:
        return {
          message: 'An error occurred.',
          details: data
        };
    }
  } else if (error.request) {
    // Request made but no response
    return {
      message: 'Network error. Please check your connection.'
    };
  } else {
    // Other errors
    return {
      message: error.message
    };
  }
};
```

### Usage
```javascript
import { handleApiError } from '../utils/errorHandler';

try {
  const response = await api.get('/announcements/');
  setData(response.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  setError(errorInfo.message);
  
  if (errorInfo.redirect) {
    window.location.href = errorInfo.redirect;
  }
}
```

---

## Protected Routes

**`src/components/ProtectedRoute.jsx`**
```javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('access_token');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
```

### Usage in Router
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Complete Dashboard Example

**`src/pages/Dashboard.jsx`**
```javascript
import { useState, useEffect } from 'react';
import api from '../services/api';
import { logout } from '../utils/auth';

function Dashboard() {
  const [stats, setStats] = useState({
    announcements: 0,
    events: 0,
    documents: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [announcements, events, documents] = await Promise.all([
        api.get('/announcements/'),
        api.get('/events/'),
        api.get('/documents/')
      ]);

      setStats({
        announcements: announcements.data.count,
        events: events.data.count,
        documents: documents.data.count
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Admin Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Announcements</h3>
          <p>{stats.announcements}</p>
        </div>
        <div className="stat-card">
          <h3>Events</h3>
          <p>{stats.events}</p>
        </div>
        <div className="stat-card">
          <h3>Documents</h3>
          <p>{stats.documents}</p>
        </div>
      </div>

      {/* Add more dashboard components */}
    </div>
  );
}

export default Dashboard;
```

---

## Best Practices

1. **Store tokens securely**: Consider using httpOnly cookies for production
2. **Handle token refresh**: Implement automatic token refresh
3. **Error handling**: Always handle API errors gracefully
4. **Loading states**: Show loading indicators during API calls
5. **Validation**: Validate form data before sending to API
6. **Debouncing**: Debounce search inputs to reduce API calls
7. **Caching**: Cache frequently accessed data
8. **Pagination**: Implement pagination for large datasets

---

## TypeScript Types (Optional)

**`src/types/api.ts`**
```typescript
export interface Announcement {
  id: number;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  pdf_file?: string;
  image?: string;
  is_active: boolean;
  publish_date: string;
  expiry_date?: string;
  created_by: number;
  created_by_name: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  event_type: string;
  department: number;
  department_name: string;
  venue: string;
  start_date: string;
  end_date: string;
  registration_link?: string;
  poster?: string;
  brochure?: string;
  is_active: boolean;
}

// Add more types as needed
```

This completes the frontend integration guide! You now have everything needed to integrate the backend with your frontend application.
