import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const AntiRaggingBanner = () => {
  return (
    <div className="bg-gradient-to-r from-black/100 to-black/90 border-t border-red-500/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-500 w-6 h-6 animate-pulse" />
            <span className="text-white font-semibold">Anti-Ragging Helpline</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="text-[#00BFFF] w-4 h-4" />
              <span className="text-white">1800-180-5522</span>
            </div>
            <button className="px-4 py-2 bg-red-500/60 hover:bg-red-500/90 shadow - 2px text-white rounded-lg transition-colors">
              Report Incident
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};