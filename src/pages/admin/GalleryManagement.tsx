import React from 'react';
import { Image } from 'lucide-react';

export const GalleryManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Gallery Management</h1>
        <p className="text-gray-400">Upload and manage gallery images</p>
      </div>

      <div className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-12 text-center">
        <Image className="w-16 h-16 mx-auto mb-4 text-[#00BFFF] opacity-50" />
        <h2 className="text-2xl font-bold text-white mb-2">Gallery Management</h2>
        <p className="text-gray-400 mb-4">
          This section will allow you to upload and organize gallery images.
        </p>
        <p className="text-sm text-gray-500">
          Image upload and categorization - coming soon!
        </p>
      </div>
    </div>
  );
};
