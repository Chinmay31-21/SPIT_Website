import React from 'react';
import { Trophy, TrendingUp, Users, BookOpen, Building } from 'lucide-react';

export const NIRF = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8">
          NIRF Ranking
        </h1>

        {/* Ranking Card */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <Trophy className="text-[#FFD700] w-12 h-12" />
            <div>
              <h2 className="text-2xl font-bold text-white">Rank 201-300</h2>
              <p className="text-[#00BFFF]">Engineering Category 2025</p>
            </div>
          </div>
        </div>

        {/* Parameters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Teaching, Learning & Resources",
              score: "74.20",
              metrics: [
                "Student Strength",
                "Faculty-Student Ratio",
                "Financial Resources",
                "Combined Metric"
              ]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Research and Professional Practice",
              score: "68.45",
              metrics: [
                "Publications",
                "Quality of Publications",
                "IPR and Patents",
                "Footprint of Projects"
              ]
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Graduation Outcomes",
              score: "86.30",
              metrics: [
                "Metric for University Examinations",
                "Metric for Number of Ph.D Students Graduated"
              ]
            }
          ].map((param, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-[#FFD700]">{param.icon}</div>
                <h2 className="text-xl font-bold text-white">{param.title}</h2>
              </div>
              <div className="text-[#00BFFF] text-2xl font-bold mb-4">{param.score}</div>
              <ul className="space-y-2">
                {param.metrics.map((metric, i) => (
                  <li key={i} className="text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Yearly Progress */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Ranking Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { year: "2024", rank: "201-300" },
              { year: "2023", rank: "201-300" },
              { year: "2022", rank: "167" },
              { year: "2021", rank: "143" },
              { year: "2020", rank: "125" },
              { year: "2019", rank: "114" },
              { year: "2018", rank: "101-150" },
              { year: "2017", rank: "101-150" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-black/50 rounded-lg">
                <div className="text-white/80">{item.year}</div>
                <div className="text-2xl font-bold text-[#00BFFF]">#{item.rank}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
            <Building className="w-6 h-6" />
            For NIRF Reports and Submitted Data Follow this Link : <button ><a href="https://nbawebpage.vercel.app/" className='bg-gradient-to-r from-[#5E035E] to-[#30036B] hover:bg-gradient-to-l hover:from-[#FED99B] hover:to-[#FED18C] rounded-lg backdrop-blur-md text-[#D6EFFF] hover:text-[#022F40] px-4 py-0 transition-colors duration-300'>
              NIRF
             </a> </button>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-white mb-4">Important Documents</h3>
              <ul className="space-y-3">
                {[
                  'NIRF Report 2023',
                  'Data Submission Details',
                  'Parameter-wise Scores',
                  'Improvement Initiatives'
                ].map((doc) => (
                  <li key={doc} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full"></span>
                    <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">
                      {doc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">What is NIRF Ranking?</h3>
              <div className="space-y-2 text-white/80">
                <p>The National Institutional Ranking Framework (NIRF) is a methodology adopted by the Ministry of Education, Government of India, to rank higher education institutions in the country.</p>
                <p>NIRF Ranking is based on various parameters such as Teaching, Learning & Resources, Research and Professional Practices, Graduation Outcomes, Outreach and Inclusivity, and Perception.</p>
                <p>The rankings aim to provide a comprehensive assessment of the quality of education and research in Indian universities and colleges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
