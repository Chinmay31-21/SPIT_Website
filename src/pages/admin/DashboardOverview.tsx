import React, { useState, useEffect } from 'react';
import { announcementsAPI, documentsAPI, eventsAPI, logsAPI } from '../../services/api';
import { 
  Megaphone, 
  FileText, 
  Calendar, 
  Activity,
  TrendingUp,
  Users,
  AlertCircle,
  Clock,
  CheckCircle,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

export const DashboardOverview = () => {
  const [stats, setStats] = useState({
    announcements: 0,
    documents: 0,
    events: 0,
    recentActivities: 0,
  });
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [announcements, documents, events, logs] = await Promise.all([
        announcementsAPI.getAll(),
        documentsAPI.getAll(),
        eventsAPI.getAll(),
        logsAPI.getActivities({ page_size: 5 }),
      ]);

      setStats({
        announcements: announcements.data.count,
        documents: documents.data.count,
        events: events.data.count,
        recentActivities: logs.data.count,
      });

      setRecentLogs(logs.data.results);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Announcements',
      value: stats.announcements,
      icon: Megaphone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
    },
    {
      title: 'Documents in Panel',
      value: stats.documents,
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
    },
    {
      title: 'Upcoming Events',
      value: stats.events,
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400',
    },
    {
      title: 'Total Activities',
      value: stats.recentActivities,
      icon: Activity,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-[#00BFFF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-white to-[#00BFFF] bg-clip-text text-transparent mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            Welcome to the SPIT Admin Management System
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">System Online</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${stat.bgColor} backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6 hover:border-[#00BFFF]/50 transition-all cursor-pointer group relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">+12%</span>
                  </div>
                </div>
                <h3 className="text-gray-400 text-sm mb-2 font-medium">{stat.title}</h3>
                <p className={`text-4xl font-bold ${stat.textColor} mb-1`}>{stat.value}</p>
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className={`h-full bg-gradient-to-r ${stat.color}`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FFD700]/10 rounded-lg">
              <Activity className="w-6 h-6 text-[#FFD700]" />
            </div>
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          </div>
          <button className="text-sm text-[#00BFFF] hover:text-[#FFD700] transition-colors flex items-center gap-1">
            View All
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {recentLogs.map((log, idx) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-[#00BFFF]/30 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{log.description}</p>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {log.username}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full text-xs font-medium">
                    {log.action_display}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {recentLogs.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No recent activity</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-[#FFD700]/10 to-[#00BFFF]/10 rounded-lg">
            <BarChart3 className="w-6 h-6 text-[#FFD700]" />
          </div>
          <h2 className="text-xl font-bold text-white">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.a
            href="/admin/announcements"
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-3 p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/20 transition-all group cursor-pointer"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
              <Megaphone className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">New Announcement</h3>
              <p className="text-xs text-gray-400">Create and publish announcement</p>
            </div>
          </motion.a>

          <motion.a
            href="/admin/update-panel"
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-3 p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/20 transition-all group cursor-pointer"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
              <FileText className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">Upload Document</h3>
              <p className="text-xs text-gray-400">Add to update panel</p>
            </div>
          </motion.a>

          <motion.a
            href="/admin/events"
            whileHover={{ scale: 1.03, y: -2 }}
            className="flex items-center gap-3 p-5 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg hover:border-orange-500/50 hover:bg-orange-500/20 transition-all group cursor-pointer"
          >
            <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
              <Calendar className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-orange-300 transition-colors">Create Event</h3>
              <p className="text-xs text-gray-400">Schedule new event</p>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* System Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-[#FFD700]/10 to-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-full shadow-lg">
            <CheckCircle className="w-6 h-6 text-black" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold text-lg">System Status</h3>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Operational
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              All systems running smoothly. No issues detected.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-[#FFD700]" />
                <span>Last backup: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Activity className="w-4 h-4 text-[#00BFFF]" />
                <span>Server uptime: 99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
