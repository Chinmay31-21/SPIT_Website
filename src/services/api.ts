import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const AUTH_URL = import.meta.env.VITE_AUTH_URL || 'http://localhost:8000/api/auth';

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
        const response = await axios.post(`${AUTH_URL}/refresh/`, {
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
        window.location.href = '/admin/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: async (username: string, password: string) => {
    const response = await axios.post(`${AUTH_URL}/login/`, { username, password });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/admin/login';
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },
};

// Announcements API
export const announcementsAPI = {
  getAll: (params?: any) => api.get('/announcements/', { params }),
  getOne: (id: number) => api.get(`/announcements/${id}/`),
  create: (data: FormData) => api.post('/announcements/', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  update: (id: number, data: FormData) => api.patch(`/announcements/${id}/`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id: number) => api.delete(`/announcements/${id}/`),
};

// Documents API (for UpdatePanel)
export const documentsAPI = {
  getAll: (params?: any) => api.get('/documents/', { params }),
  getOne: (id: number) => api.get(`/documents/${id}/`),
  create: (data: FormData) => api.post('/documents/', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  update: (id: number, data: FormData) => api.patch(`/documents/${id}/`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id: number) => api.delete(`/documents/${id}/`),
};

// Events API
export const eventsAPI = {
  getAll: (params?: any) => api.get('/events/', { params }),
  create: (data: FormData) => api.post('/events/', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  update: (id: number, data: FormData) => api.patch(`/events/${id}/`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id: number) => api.delete(`/events/${id}/`),
};

// Gallery API
export const galleryAPI = {
  getAll: (params?: any) => api.get('/gallery/', { params }),
  create: (data: FormData) => api.post('/gallery/', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  delete: (id: number) => api.delete(`/gallery/${id}/`),
};

// Activity Logs API
export const logsAPI = {
  getActivities: (params?: any) => api.get('/logs/activities/', { params }),
  getSessions: (params?: any) => api.get('/logs/sessions/', { params }),
};

export default api;
