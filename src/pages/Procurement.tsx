import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, FileText, Download, Building, Phone, Mail, Clock, Calendar, Link2Icon } from 'lucide-react';

// --- Placeholder Data ---
// In a real application, this data would be fetched from an API.
const procurementNotices = [
  // Open Tenders
  {
    id: 'SPIT/T/2025/001',
    title: 'Notice Inviting Tender-1 _ Smart Classrooms-Labs-AY 2024-25',
    type: 'tender',
    status: 'Open',
    issueDate: '2024-06-13',
    closingDate: '2024-06-21',
    fileUrl: './resources/SmartClassroom2425',
  },
  {
    id: 'SPIT/T/2025/002',
    title: 'Notice Inviting Tender-2 _ OCTOBER_2023',
    type: 'tender',
    status: 'Open',
    issueDate: '2023-10-16',
    closingDate: '2023-10-28',
    fileUrl: './resources/NoticeTenderOctober2023',
  },
  // Quotations
  
  // Archived Tenders
  {
    id: 'SPIT/T/2025/002',
    title: 'Notice Inviting Tender1 August 2023',
    type: 'tender',
    status: 'Closed',
    issueDate: '2023-08-10',
    closingDate: '2023-08-14',
    fileUrl: './resources/NoticeTenderAugust2023',
  },
  {
    id: 'SPIT/T/2024/016',
    title: 'Tender Notice for Computational itineraries for the FY 2022-2023',
    type: 'tender',
    status: 'Closed',
    issueDate: '2024-10-25',
    closingDate: '2024-11-20',
    fileUrl: './resources/ComputationalItinaries2223',
  },
  {
    id: 'SPIT/T/2024/017',
    title: 'Tender Notice for Electrical, Electronic itineraries (Hardware & Software) for the FY 2022-2023.',
    type: 'tender',
    status: 'Closed',
    issueDate: '2024-10-25',
    closingDate: '2024-11-20',
    fileUrl: './resources/ElectronicsItinaries2223',
  },
];

// --- Helper Component for Status Badge ---
const StatusBadge = ({ status }) => {
  const statusClasses = {
    Open: 'bg-green-500/20 text-green-300 border-green-500/30',
    Closed: 'bg-red-500/20 text-red-300 border-red-500/30',
  };
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusClasses[status] || 'bg-gray-500/20 text-gray-300'}`}>
      {status}
    </span>
  );
};

// --- Main Procurement Component ---
export const Procurement = () => {
  const [activeTab, setActiveTab] = useState('openTenders');

  const getFilteredNotices = () => {
    switch (activeTab) {
      case 'openTenders':
        return procurementNotices.filter(n => n.type === 'tender' && n.status === 'Open');
      case 'archivedTenders':
        return procurementNotices.filter(n => n.type === 'tender' && n.status === 'Closed');
      case 'quotations':
        return procurementNotices.filter(n => n.type === 'quotation');
      default:
        return [];
    }
  };

  const notices = getFilteredNotices();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-inter min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Gavel className="mx-auto text-[#FFD700] h-16 w-16 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Procurement & Tenders
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Sardar Patel Institute of Technology is committed to a transparent, fair, and competitive procurement process.
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Tenders & Quotations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/60 p-6 md:p-8"
          >
            {/* Tabs */}
            <div className="flex border-b text-white border-gray-700 mb-6">
            
<button
  onClick={() => setActiveTab('openTenders')}
  className={`px-4 py-3 font-semibold transition-colors duration-300 ${
    activeTab === 'openTenders'
      ? 'text-[#FFD700] border-b-2 border-[#FFD700]'
      : 'text-white hover:text-white'
  }`}
>
  Open Tenders
</button>
<button
  onClick={() => setActiveTab('quotations')}
  className={`px-4 py-3 font-semibold transition-colors duration-300 ${
    activeTab === 'quotations'
      ? 'text-[#FFD700] border-b-2 border-[#FFD700]'
      : 'text-white hover:text-white'
  }`}
>
  Quotations
</button>
<button
  onClick={() => setActiveTab('archivedTenders')}
  className={`px-4 py-3 font-semibold transition-colors duration-300 ${
    activeTab === 'archivedTenders'
      ? 'text-[#FFD700] border-b-2 border-[#FFD700]'
      : 'text-white hover:text-white'
  }`}
>
  Archived Tenders
</button>

            </div>

            {/* Notices List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {notices.length > 0 ? (
                notices.map((notice) => (
                  <motion.div
                    key={notice.id}
                    variants={itemVariants}
                    className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div className="flex-1 mb-4 md:mb-0">
                        <p className="text-sm text-blue-400 font-mono mb-1">{notice.id}</p>
                        <h3 className="text-lg font-bold text-white">{notice.title}</h3>
                      </div>
                      <div className="flex items-center space-x-4">
                        <StatusBadge status={notice.status} />
                        <a href={notice.fileUrl}  rel="opener referrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors text-sm">
                          <Link2Icon size={16} />
                          <span>Link</span>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 mt-4 pt-3 flex flex-col md:flex-row md:items-center text-sm text-gray-400 space-y-2 md:space-y-0 md:space-x-6">
                       <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>Issued: {new Date(notice.issueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>Closing: {new Date(notice.closingDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                       </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div variants={itemVariants} className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-500" />
                  <p className="mt-4 text-gray-400">No notices found in this category at the moment.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700/60 p-6 md:p-8 h-fit"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-5 border-b-2 border-[#FFD700]/60 pb-3 flex items-center gap-3">
              <Building/> Contact Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>For any queries related to procurement, tenders, or quotations, please contact the administrative office.</p>
              <div>
                <h4 className="font-bold text-white">Dr B.N.Chaudhari</h4>
                <p className="text-sm">Principal</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20}/>
                <a href="mailto:procurement@spit.ac.in" className="hover:text-blue-300 transition-colors">procurement@spit.ac.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20}/>
                <a href="phone:+91-9820436099" className="hover:text-blue-300 transition-colors">+91-9820436099</a>
              </div>
               <div className="border-t border-gray-700 mt-4 pt-4 text-sm">
                <p className="font-semibold text-white">Working Hours:</p>
                <p>Monday - Friday: 10:00 AM to 5:00 PM</p>
                <p>(Closed on weekends and public holidays)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Procurement;