import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, GraduationCap, Calculator, CreditCard, Download } from 'lucide-react';
import { PaymentGateway } from '../components/PaymentGateway';
import { useHref } from 'react-router-dom';
import { Link } from 'react-router-dom';

// ...existing imports...

const CutoffSections = () => (
  <div className="space-y-8">
    <CutoffSection
      year="2024-25"
      pdf="/assets/Cutoff2425.pdf"
      description="Cutoff details for the academic year 2024-25."
    />
    <CutoffSection
      year="2023-24"
      pdf="/assets/Cutoff2324.pdf"
      description="Cutoff details for the academic year 2023-24."
    />
    <CutoffSection
      year="2022-23"
      pdf="/assets/Cutoff2223.pdf"
      description="Cutoff details for the academic year 2022-23."
    />
    <CutoffSection
      year="2021-22"
      pdf="/assets/Cutoff2122.pdf"
      description="Cutoff details for the academic year 2021-22."
    />
    <CutoffSection
      year="2020-21"
      pdf="/assets/Cutoff2021.pdf"
      description="Cutoff details for the academic year 2020-21."
    />
  </div>
);

const CutoffSection = ({ year, pdf, description }: { year: string; pdf: string; description: string }) => (
  <div className="bg-black/30 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
      <h2 className="text-2xl font-bold text-[#FFD700] mb-2">Cutoff {year}</h2>
      <p className="text-white/80 mb-4">{description}</p>
    </div>
    <a
      href={pdf}
      download
      className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded text-sm flex items-center gap-2 w-max"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </a>
  </div>
);

export const Admissions = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedFee, setSelectedFee] = useState<{amount: number; description: string} | null>(null);

  const handlePayment = (amount: number, description: string) => {
    setSelectedFee({ amount, description });
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b (from-[#02365E] to-[#30036B]) py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#4169E1] bg-clip-text text-transparent mb-8"
        >
          Admissions
        </motion.h1>

        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="mb-8"
>
  <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Cutoff of Last 5 Years</h2>
  <CutoffSections />
</motion.div>
        <br />
       
        {/* Important Dates */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Application Start",
              date: "March 1, 2024"
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Last Date",
              date: "April 30, 2024"
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Merit List",
              date: "May 15, 2024"
            },
            {
              icon: <Calculator className="w-8 h-8" />,
              title: "Fee Payment",
              date: "May 20-30, 2024"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
            >
              <div className="text-[#FFD700] mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#4169E1]">{item.date}</p>
            </div>
          ))}
        </motion.div>

        {/* Programs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Programs Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "B.Tech Computer Engineering",
                seats: 120,
                duration: "4 years"
              },
              {
                name: "B.Tech Information Technology",
                seats: 60,
                duration: "4 years"
              },
              {
                name: "B.Tech Electronics & Telecom",
                seats: 60,
                duration: "4 years"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{program.name}</h3>
                <div className="space-y-2 text-white/80">
                  <p>Seats: {program.seats}</p>
                  <p>Duration: {program.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Eligibility & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Eligibility Criteria</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Minimum 60% in PCM for 12th standard</li>
              <li>• Valid JEE Main score</li>
              <li>• Maharashtra State domicile (for state quota)</li>
              <li>• Passed HSC or equivalent examination</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Required Documents</h2>
            <ul className="space-y-3 text-white/80">
              <li>• JEE Main score card</li>
              <li>• 12th marksheet and passing certificate</li>
              <li>• Domicile certificate</li>
              <li>• Category certificate (if applicable)</li>
              <li>• Aadhar card</li>
            </ul>
          </motion.div>
        </div>

        {/* Fee Structure with Payment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Fee Structure & Payment</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-[#4169E1]/30">
                  <th className="py-4 px-6 text-left">Category</th>
                  <th className="py-4 px-6 text-right">First Year</th>
                  <th className="py-4 px-6 text-right">Second Year</th>
                  <th className="py-4 px-6 text-right">Third Year</th>
                  <th className="py-4 px-6 text-right">Fourth Year</th>
                  <th className="py-4 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#4169E1]/30">
                  <td className="py-4 px-6">B.Tech</td>
                  <td className="py-4 px-6 text-right">₹2,10,000</td>
                  <td className="py-4 px-6 text-right">₹2,10,000</td>
                  <td className="py-4 px-6 text-right">₹2,10,000</td>
                  <td className="py-4 px-6 text-right">₹2,10,000</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handlePayment(145000, "First Year Fee - Open Category")}
                      className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                    >
                      <CreditCard className="w-4 h-4" />
                      Pay Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">M.Tech</td>
                  <td className="py-4 px-6 text-right">₹1,00,000</td>
                  <td className="py-4 px-6 text-right">₹1,00,000</td>
                  <td className="py-4 px-6 text-right">₹1,00,000</td>
                  <td className="py-4 px-6 text-right">₹1,00,000</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handlePayment(15000, "First Year Fee - Reserved Category")}
                      className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                    >
                      <CreditCard className="w-4 h-4" />
                      Pay Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6">MCA</td>
                  <td className="py-4 px-6 text-right">₹1,31,000</td>
                  <td className="py-4 px-6 text-right">₹1,31,000</td>
                  <td className="py-4 px-6 text-right">₹1,31,000</td>
                  <td className="py-4 px-6 text-right">₹1,31,000</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => handlePayment(15000, "First Year Fee - Reserved Category")}
                      className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                    >
                      <CreditCard className="w-4 h-4" />
                      Pay Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-black/50 rounded-lg">
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Payment Information</h3>
            <ul className="text-white/80 space-y-1 text-sm">
              <li>• Secure payment gateway powered by Razorpay</li>
              <li>• Accept all major credit/debit cards, UPI, and net banking</li>
              <li>• Instant payment confirmation and receipt generation</li>
              <li>• 24/7 customer support for payment issues</li>
            </ul>
          </div>
        </motion.div>

        {/* Quick Payment Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Quick Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Application Fee", amount: 1000, description: "Non-refundable application processing fee" },
              { title: "Admission Fee", amount: 25000, description: "One-time admission confirmation fee" },
              { title: "Caution Deposit", amount: 10000, description: "Refundable security deposit" }
            ].map((fee, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{fee.title}</h3>
                <p className="text-white/70 text-sm mb-3">{fee.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#4169E1]">₹{fee.amount.toLocaleString()}</span>
                  <button
                    onClick={() => handlePayment(fee.amount, fee.title)}
                    className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <CreditCard className="w-3 h-3" />
                    Pay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment Gateway Modal */}
        {showPayment && selectedFee && (
          <PaymentGateway
            isOpen={showPayment}
            onClose={() => setShowPayment(false)}
            paymentDetails={{
              amount: selectedFee.amount,
              description: selectedFee.description,
              orderId: `ORD${Date.now()}`
            }}
          />
        )}
      </div>
    </div>
  );
};
