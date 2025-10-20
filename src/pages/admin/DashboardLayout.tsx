import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Megaphone, 
  FileText, 
  Calendar, 
  Image, 
  Activity,
  LogOut,
  Menu,
  X,
  Settings,
  Bell,
  User as UserIcon,
  Shield,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Megaphone, label: 'Announcements', path: '/admin/announcements' },
    { icon: FileText, label: 'Update Panel', path: '/admin/update-panel' },
    { icon: Calendar, label: 'Events', path: '/admin/events' },
    { icon: Image, label: 'Gallery', path: '/admin/gallery' },
    { icon: Activity, label: 'Activity Logs', path: '/admin/logs' },
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-xl border-r border-[#00BFFF]/30 z-50"
          >
            {/* Logo */}
            <div className="p-6 border-b border-[#00BFFF]/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-lg shadow-lg">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#00BFFF] bg-clip-text text-transparent">
                    SPIT Admin
                  </h1>
                  <p className="text-xs text-gray-400">Management Portal</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all mb-4 border border-transparent hover:border-[#00BFFF]/30"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Back to Website</span>
              </Link>
              
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                Main Menu
              </div>
              
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FFD700]/20 to-[#00BFFF]/20 text-[#FFD700] border border-[#FFD700]/30 shadow-lg'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent hover:border-[#00BFFF]/30'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${
                      isActive ? 'bg-[#FFD700]/20' : 'bg-transparent group-hover:bg-white/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="ml-auto w-1.5 h-1.5 bg-[#FFD700] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* User Profile & Logout */}
            <div className="border-t border-[#00BFFF]/30">
              {/* User Info */}
              <div className="p-4 border-b border-[#00BFFF]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-full flex items-center justify-center shadow-lg">
                    <UserIcon className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">Administrator</p>
                    <p className="text-gray-400 text-xs truncate">admin@spit.ac.in</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-4 space-y-2">
                <button
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all border border-transparent hover:border-[#00BFFF]/30"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium text-sm">Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all border border-transparent hover:border-red-500/30"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium text-sm">Logout</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Bar */}
        <header className="bg-black/50 backdrop-blur-xl border-b border-[#00BFFF]/30 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-[#00BFFF]/30"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div>
                <p className="text-white font-semibold text-lg">SPIT Admin Dashboard</p>
                <p className="text-xs text-gray-400">Content Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-[#00BFFF]/30">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Profile */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-[#00BFFF]/30">
                <div className="text-right hidden md:block">
                  <p className="text-sm text-white font-medium">Administrator</p>
                  <p className="text-xs text-gray-400">Super Admin</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-full flex items-center justify-center shadow-lg">
                  <UserIcon className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
