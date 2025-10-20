import React, { useState, useEffect } from 'react';
import { documentsAPI } from '../../services/api';
import { Plus, Edit, Trash2, FileText, Calendar, AlertCircle, Save, X, Upload, Download, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Document {
  id?: number;
  title: string;
  description: string;
  document_type: 'notice' | 'circular' | 'syllabus' | 'timetable' | 'form' | 'other';
  file?: string;
  is_active: boolean;
}

export const UpdatePanelManagement = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Document>({
    title: '',
    description: '',
    document_type: 'notice',
    is_active: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await documentsAPI.getAll({ 
        ordering: '-uploaded_at',
        page_size: 100
      });
      
      // Handle both paginated and non-paginated responses
      const results = response.data.results || response.data || [];
      setDocuments(results);
      
      if (results.length === 0) {
        setError('No documents found. Upload your first document!');
      }
    } catch (err: any) {
      console.error('Failed to fetch documents:', err);
      const errorMessage = err.response?.status === 401 
        ? 'Authentication failed. Please login again.'
        : err.response?.status === 404
        ? 'Documents endpoint not found. Please check backend configuration.'
        : err.message?.includes('Network')
        ? 'Cannot connect to server. Please ensure backend is running.'
        : 'Failed to fetch documents. Please try again.';
      
      setError(errorMessage);
      setDocuments([]);
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
      data.append('description', formData.description);
      data.append('document_type', formData.document_type);
      data.append('is_active', String(formData.is_active));
      
      if (file) {
        data.append('file', file);
      } else if (!editingId) {
        setError('Please select a file to upload');
        return;
      }

      if (editingId) {
        await documentsAPI.update(editingId, data);
        setSuccessMessage('Document updated successfully!');
      } else {
        await documentsAPI.create(data);
        setSuccessMessage('Document created successfully!');
      }

      fetchDocuments();
      closeModal();
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to save document');
    }
  };

  const handleEdit = (document: any) => {
    setEditingId(document.id);
    setFormData({
      title: document.title,
      description: document.description,
      document_type: document.document_type,
      is_active: document.is_active,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      await documentsAPI.delete(id);
      setSuccessMessage('Document deleted successfully!');
      fetchDocuments();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError('Failed to delete document');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      document_type: 'notice',
      is_active: true,
    });
    setFile(null);
    setError('');
  };

  const getTypeColor = (type: string) => {
    const colors = {
      notice: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      circular: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      syllabus: 'bg-green-500/20 text-green-400 border-green-500/50',
      timetable: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      form: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
      other: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
    };
    return colors[type as keyof typeof colors] || colors.other;
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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#00BFFF] bg-clip-text text-transparent mb-2">Update Panel Management</h1>
          <p className="text-gray-400">Manage documents displayed in the update panel</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchDocuments}
            className="flex items-center gap-2 bg-white/5 border border-[#00BFFF]/30 text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all"
            title="Refresh documents"
          >
            <RotateCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] text-black font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            <Plus className="w-5 h-5" />
            New Document
          </motion.button>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400">{successMessage}</span>
        </motion.div>
      )}

      {/* Error Message */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-red-400 font-medium mb-2">{error}</p>
            {error.includes('backend') || error.includes('server') ? (
              <div className="text-sm text-red-300 space-y-1">
                <p>• Make sure your Django backend is running: <code className="bg-black/30 px-2 py-0.5 rounded">python manage.py runserver</code></p>
                <p>• Check that CORS is configured correctly</p>
                <p>• Verify API_URL in your .env file</p>
              </div>
            ) : null}
            <button
              onClick={fetchDocuments}
              className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              Retry
            </button>
          </div>
        </motion.div>
      )}

      {/* Documents List */}
      <div className="grid gap-4">
        {documents.map((document) => (
          <motion.div
            key={document.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-6 hover:border-[#00BFFF]/50 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{document.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full border ${getTypeColor(document.document_type)}`}>
                    {document.document_type.toUpperCase()}
                  </span>
                  {!document.is_active && (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/50">
                      INACTIVE
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-3">{document.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(document.uploaded_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {document.file_size_display}
                  </div>
                  {document.file && (
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#00BFFF] hover:text-[#FFD700] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(document)}
                  className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(document.id)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {documents.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No documents yet. Upload your first one!</p>
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
                  {editingId ? 'Edit Document' : 'New Document'}
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
                    placeholder="Enter document title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 min-h-[100px]"
                    placeholder="Enter description (optional)"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Document Type</label>
                    <select
                      value={formData.document_type}
                      onChange={(e) => setFormData({ ...formData, document_type: e.target.value as any })}
                      className="w-full px-4 py-3 bg-black/50 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                    >
                      <option value="notice">Notice</option>
                      <option value="circular">Circular</option>
                      <option value="syllabus">Syllabus</option>
                      <option value="timetable">Timetable</option>
                      <option value="form">Form</option>
                      <option value="other">Other</option>
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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    File * {editingId && '(Leave empty to keep existing file)'}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border-2 border-dashed border-[#00BFFF]/30 rounded-lg text-gray-400 hover:text-white hover:border-[#00BFFF] cursor-pointer transition-colors"
                    >
                      <Upload className="w-5 h-5" />
                      {file ? file.name : 'Click to upload file (PDF, DOC, DOCX)'}
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] text-black font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
                  >
                    <Save className="w-5 h-5" />
                    {editingId ? 'Update' : 'Upload'} Document
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
