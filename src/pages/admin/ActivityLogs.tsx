import React, { useState, useEffect } from 'react';
import { logsAPI } from '../../services/api';
import { Activity, Calendar, User, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ActivityLogs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await logsAPI.getActivities({ ordering: '-timestamp' });
      setLogs(response.data.results);
    } catch (err) {
      console.error('Failed to fetch logs:', err);
    } finally {
      setLoading(false);
    }
  };

  const getActionColor = (action: string) => {
    const colors = {
      create: 'bg-green-500/20 text-green-400 border-green-500/50',
      update: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      delete: 'bg-red-500/20 text-red-400 border-red-500/50',
      login: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      logout: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
    };
    return colors[action as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-[#00BFFF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Activity Logs</h1>
        <p className="text-gray-400">Track all admin activities and changes</p>
      </div>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6 hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#00BFFF] rounded-full flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-white font-medium">{log.description}</p>
                  <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${getActionColor(log.action)}`}>
                    {log.action_display}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {log.username}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(log.timestamp).toLocaleString()}
                  </div>
                  {log.ip_address && (
                    <>
                      <span>•</span>
                      <span>IP: {log.ip_address}</span>
                    </>
                  )}
                </div>
                {log.changes && Object.keys(log.changes).length > 0 && (
                  <div className="mt-2 p-3 bg-white/5 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Changes:</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      {Object.entries(log.changes).map(([key, value]: [string, any]) => (
                        <div key={key}>
                          <span className="text-[#FFD700]">{key}:</span>{' '}
                          <span className="text-red-400">{value.old}</span> →{' '}
                          <span className="text-green-400">{value.new}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {logs.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No activity logs yet</p>
          </div>
        )}
      </div>
    </div>
  );
};
