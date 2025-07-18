import React from 'react';
import { Download } from 'lucide-react';

const AnnualReport = () => {
  const reports = [
    { year: '2022-23', link: '/assets/2022-23_Anual-Report.pdf' },
    { year: '2021-22', link: '/assets/Annual_Report_2021_22.pdf' },
    { year: '2020-21', link: '/assets/5_Final_Layout_IQAC_AR_2021.pdf' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f]">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-800 dark:text-white mb-4">
            Annual Reports
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive yearly documentation of SPIT's academic achievements, research initiatives, 
            and institutional developments.
          </p>
        </div>

        {/* Latest Report Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Latest Annual Report (2023-24)
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Our latest annual report highlights key achievements, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Academic Excellence and Innovations</li>
              <li>Research Publications and Patents</li>
              <li>Student Achievements and Placements</li>
              <li>Infrastructure Development</li>
              <li>Faculty Accomplishments</li>
            </ul>
            <a href="/assets/Anual-Report-2023-24.pdf" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Latest Report
              </button>
            </a>
          </div>
        </div>

        {/* Archive Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Previous Reports
            </h2>
            <div className="grid gap-4">
              {reports.map((report) => (
                <a
                  key={report.year}
                  href={report.link}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="text-gray-700 dark:text-gray-200">
                    Academic Year {report.year}
                  </span>
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Key Statistics
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Research Papers</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.83%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Placement Rate</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Events Conducted</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">MoUs Signed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
