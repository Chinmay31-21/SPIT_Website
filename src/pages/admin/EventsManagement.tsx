import React from 'react';
import { Calendar } from 'lucide-react';

export const EventsManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Events Management</h1>
        <p className="text-gray-400">Manage college events and activities</p>
      </div>

      <div className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-12 text-center">
        <Calendar className="w-16 h-16 mx-auto mb-4 text-[#00BFFF] opacity-50" />
        <h2 className="text-2xl font-bold text-white mb-2">Events Management</h2>
        <p className="text-gray-400 mb-4">
          This section will allow you to create and manage college events with posters and brochures.
        </p>
        <p className="text-sm text-gray-500">
          Similar functionality to Announcements - coming soon!
        </p>
      </div>
    </div>
  );
};
