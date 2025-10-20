import React, { useState, useEffect } from 'react';
import { announcementsAPI } from '../../services/api';
import { Plus, Edit, Trash2, FileText, Image as ImageIcon, Calendar, AlertCircle, Save, X, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Announcement {
  id?: number;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  is_active: boolean;
  pdf_file?: string;
  image?: string;
  publish_date?: string;
  expiry_date?: string;
}

export const AnnouncementsManagement = () => {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Announcement>({
    title: '',
    content: '',
    priority: 'medium',
    is_active: true,
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementsAPI.getAll({ ordering: '-publish_date' });
      setAnnouncements(response.data.results);
    } catch (err) {
      setError('Failed to fetch announcements');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('content', formData.content);
      data.append('priority', formData.priority);
      data.append('is_active', String(formData.is_active));
      
      if (formData.publish_date) data.append('publish_date', formData.publish_date);
      if (formData.expiry_date) data.append('expiry_date', formData.expiry_date);
      if (pdfFile) data.append('pdf_file', pdfFile);
      if (imageFile) data.append('image', imageFile);

      if (editingId) {
        await announcementsAPI.update(editingId, data);
        setSuccessMessage('Announcement updated successfully!');
      } else {
        await announcementsAPI.create(data);
        setSuccessMessage('Announcement created successfully!');
      }

      fetchAnnouncements();
      closeModal();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to save announcement');
    }
  };

  const handleEdit = (announcement: any) => {
    setEditingId(announcement.id);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      priority: announcement.priority,
      is_active: announcement.is_active,
      publish_date: announcement.publish_date,
      expiry_date: announcement.expiry_date,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      await announcementsAPI.delete(id);
      setSuccessMessage('Announcement deleted successfully!');
      fetchAnnouncements();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Failed to delete announcement');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      title: '',
      content: '',
      priority: 'medium',
      is_active: true,
    });
    setPdfFile(null);
    setImageFile(null);
    setError('');
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      high: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      urgent: 'bg-red-500/20 text-red-400 border-red-500/50',
    };
    return colors[priority as keyof typeof colors] || colors.medium;
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Announcements Management</h1>
          <p className="text-gray-400">Create, edit, and manage college announcements</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] text-black font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          New Announcement
        </motion.button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-green-400"
        >
          {successMessage}
        </motion.div>
      )}

      {/* Announcements List */}
      <div className="grid gap-4">
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6 hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{announcement.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full border ${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority.toUpperCase()}
                  </span>
                  {!announcement.is_active && (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/50">
                      INACTIVE
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-3">{announcement.content}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(announcement.publish_date).toLocaleDateString()}
                  </div>
                  {announcement.pdf_file && (
                    <a
                      href={announcement.pdf_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#00BFFF] hover:text-[#FFD700] transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      View PDF
                    </a>
                  )}
                  {announcement.image && (
                    <div className="flex items-center gap-1 text-[#00BFFF]">
                      <ImageIcon className="w-4 h-4" />
                      Has Image
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(announcement)}
                  className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(announcement.id)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {announcements.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No announcements yet. Create your first one!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black/90 border border-[#00BFFF]/30 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingId ? 'Edit Announcement' : 'New Announcement'}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-4 text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                    placeholder="Enter announcement title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Content *</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 min-h-[120px]"
                    placeholder="Enter announcement content"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                      className="w-full px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                    <label className="flex items-center gap-2 px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                        className="w-5 h-5 accent-[#00BFFF]"
                      />
                      <span className="text-white">Active</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">PDF File</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                        className="hidden"
                        id="pdf-upload"
                      />
                      <label
                        htmlFor="pdf-upload"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-gray-400 hover:text-white hover:border-[#00BFFF] cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        {pdfFile ? pdfFile.name : 'Upload PDF'}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Image</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-gray-400 hover:text-white hover:border-[#00BFFF] cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        {imageFile ? imageFile.name : 'Upload Image'}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] text-black font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
                  >
                    <Save className="w-5 h-5" />
                    {editingId ? 'Update' : 'Create'} Announcement
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
