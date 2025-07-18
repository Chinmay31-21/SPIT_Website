import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, GraduationCap, Calculator, CreditCard, Download, Bold, Users, BookOpen, FlaskConical, Mail, ArrowRight } from 'lucide-react';
import { PaymentGateway } from '../components/PaymentGateway';
import { useHref } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Font } from 'three/examples/jsm/Addons.js';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

// Accordion component
const AccordionSection = ({
  title,
  icon,
  children,
  isOpen,
  onClick,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="mb-3 bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg">
    <button
      className="w-full flex justify-between items-center  bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="flex items-center gap-3 text-[#FFD700]">
        {icon}
        {title}
      </span>
      <span className="text-2xl text-white">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="bg-black/30 px-6 py-5 rounded-b">
        {children}
      </div>
    )}
  </div>
);

const placementImages = [
  {
    year: "2024-25",
    src: "/assets/Placement25.jpg",
    srci: "/assets/Internship25.jpg",
    alt: "Placement Report 2024-25"
  },
  {
    year: "2023-24",
    src: "/assets/Placement24.jpg",
    alt: "Placement Report 2023-24"
  },
  {
    year: "2022-23",
    src: "/assets/Placement23.jpg",
    alt: "Placement Report 2022-23"
  },
  {
    year: "2021-22",
    src: "/assets/Placement22.jpg",
    alt: "Placement Report 2021-22"
  },
  {
    year: "2020-21",
    src: "/assets/Placement21.jpg",
    alt: "Placement Report 2020-21"
  }
];

const PlacementAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {placementImages.map((img, idx) => (
        <div key={img.year} className="mb-3 bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg">
          <button
            className="w-full flex justify-between items-center bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="flex items-center gap-3 text-[#FFD700]">
              <GraduationCap className="w-5 h-5" />
              Placement Report {img.year}
            </span>
            <span className="text-2xl text-white">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="bg-black/30 px-6 py-5 rounded-b flex flex-col items-center">
              <br />
              <p className="text-white font-bold">Placement Report 2024-25</p>
              <br />
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
              />
              <br />
              <p className="text-white font-bold">Internship Report 2024-25</p>
              <br />
              <img
                src={img.srci}
                alt={img.alt}
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
              />
              <br />
              <br />
              <p className="text-white font-bold"> PhonePe Placed 2023-25</p>
              <br />
              <img
                src="/assets/phonepe.jpg"
                alt="Internship Report 2024-25"
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
                />
                <br />
              <p className="text-white font-bold"> JP Morgan Chase & Co. Placed 2023-25</p>
              <br />
              <img
                src="/assets/jpmc.jpg"
                alt="Internship Report 2024-25"
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
                />
              <br />
               <br />
              <p className="text-white font-bold"> Barclays Placed 2023-25</p>
              <br />
              <img
                src="/assets/Barc.jpg"
                alt="Internship Report 2024-25"
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
                />
              <br />
               <br />
              <p className="text-white font-bold"> WorkIndia & MSCI 2024-25</p>
              <br />
              <img
                src="/assets/WM.jpg"
                alt="Internship Report 2024-25"
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
                />
              <br />
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const higherstudiesImages = [
  {
    year: "2024-25",
    src: "/assets/Higher25.jpg",
    alt: "Placement Report 2024-25"
  },
  {
    year: "2023-24",
    src: "/assets/Placement24.jpg",
    alt: "Placement Report 2023-24"
  },
  {
    year: "2022-23",
    src: "/assets/Placement23.jpg",
    alt: "Placement Report 2022-23"
  },
  {
    year: "2021-22",
    src: "/assets/Placement22.jpg",
    alt: "Placement Report 2021-22"
  },
  {
    year: "2020-21",
    src: "/assets/Placement21.jpg",
    alt: "Placement Report 2020-21"
  }
];

const HigherStudiesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {higherstudiesImages.map((img, idx) => (
        <div key={img.year} className="mb-3 bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg">
          <button
            className="w-full flex justify-between items-center bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="flex items-center gap-3 text-[#FFD700]">
              <GraduationCap className="w-5 h-5" />
              Higher Studies Report {img.year}
            </span>
            <span className="text-2xl text-white">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="bg-black/30 px-6 py-5 rounded-b flex flex-col items-center">
              <br />
              <p className="text-white font-bold">Higher Studies Report 2024-25</p>
              <br />
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
              />
              <br />
              
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const DaeImages = [
  {
    year: "Distinguished Alumni Entrepreneur",
    src: "/assets/DistinguishedAlumni.jpg",
    srci: "/assets/alumni.jpg",
    alt: "Placement Report 2024-25"
  },

 
];

const DaeAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {DaeImages.map((img, idx) => (
        <div key={img.year} className="mb-3 bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg">
          <button
            className="w-full flex justify-between items-center bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="flex items-center gap-3 text-[#FFD700]">
              <GraduationCap className="w-5 h-5" />
              S.P.I.T Alumni / Alumni Speaks
            </span>
            <span className="text-2xl text-white">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="bg-black/30 px-6 py-5 rounded-b flex flex-col items-center">
              <br />
              <p className="w-full bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none text-center">Distinguished Alumni Entrepreneur</p>
              <br />
              <img
                src={img.src}
                alt={img.alt}
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
              />
              <br />
              <p className="w-full bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none text-center">Star Alumni 2020-25</p>
              <br />
              <img
                src={img.srci}
                alt={img.alt}
                className="max-w-full max-h-[500px] rounded shadow-lg border border-[#4169E1]/30 bg-white"
                style={{ objectFit: "contain" }}
              />
              <br />
              {/* Alumni Photo Grid */}
              <div className="w-full mt-8">
                <h3 className="w-full bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none text-center">Notable Alumni</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                  {/* Example: Replace src with your uploaded alumni images */}
                  <div className="flex flex-col items-center">
                    <img src="/assets/RahulChari.jpg" alt="Rahul Chari" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Rahul Chari, Co-Founder Phone Pe</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/MohitLad.jpeg" alt="Mohit Lad" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Mohit Lad, CEO ThousandEyes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/NutanLimaye.jpg" alt="Nutan Limaye" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Nutan Limaye, Prof. IIT Bombay</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/Mayank_Agarwal.jpg" alt="Mayank Agarwal" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Mayank Agarwal, Prof. IIT Patna</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/NileshDungarwal.jpg" alt="Nilesh Dungarwal" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Nilesh Dungarwal, Co-Founder WorkIndia</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/RaviMTodi.jpg" alt="Ravi Todi" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Ravi Todi, Qualcomm</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/akshay.jpg" alt="Akshay Bhagwatwar" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Akshay Bhagwatwar, Program Manager, Amazon</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/PrashantNair.jpg" alt="Prashant Nair" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Prashant Nair, Prof. University of British Columbia</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/assets/AbhishekSharma.jpg" alt="Abhishek Sharma" className="w-40 h-40 object-cover rounded mb-2" />
                    <span className="text-center text-white/90 text-sm">Dr. Abhishek Sharma, Component Research Intel</span>
                  </div>
                </div>
                {/* Alumni YouTube Videos Grid */}
                <div className="w-full mt-12">
                  <h3 className="w-full bg-gradient-to-t from-[#240046] to-[#10002B] text-white font-semibold text-lg px-6 py-5 rounded transition-all focus:outline-none text-center mb-6">Alumni Speaks</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {[
                      {
                        name: "Vikrant Potnis",
                        title: "Director, Fortemagna Advisors Pvt. Ltd.",
                        videoId: "TPDjb0nZHVs"
                      },
                      {
                        name: "Darshan Savalia",
                        title: "Co-Founder, Sknzy Software Solutions Pvt.",
                        videoId: "NMxiTmk2iIs"
                      },
                      {
                        name: "Karan Shah",
                        title: "Physical Design Engineer, Nvidia",
                        videoId: "fKpHg7UoD5Q"
                      },
                      {
                        name: "Aunansha Sengupta",
                        title: "Research Scholar, University of Michigan",
                        videoId: "zVjRZnfgWVw"
                      },
                      {
                        name: "Nandish Avlani",
                        title: "Senior Design Engineer, AMD",
                        videoId: "9EykVIfPL6E"
                      },
                      {
                        name: "Jugal Gala",
                        title: "",
                        videoId: "j43-UdypPZo"
                      }
                    ].map((alumni, idx) => (
                      <div key={idx} className="flex flex-col items-center w-full">
                        <div className="w-full aspect-video mb-2 rounded overflow-hidden shadow-lg border border-[#4169E1]/30 bg-black">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${alumni.videoId}`}
                            title={alumni.name}
                            
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <span className="text-center text-white/90 text-sm font-semibold">{alumni.name}</span>
                        <span className="text-center text-white/70 text-xs">{alumni.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End Alumni YouTube Videos Grid */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


const accordionSections = [
  {  
    
    title: "Principal's Letter",
    icon: <FileText className="w-5 h-5" />,
    content: (
      <div>
        {/* Add your Principal's Letter content here */}
        <p className="text-white/80 font-bold">Dear Student,</p>
        <br />
        <p className="text-white/80">I have great pleasure in expressing my thoughts as the Principal of Sardar Patel Institute of Technology (S.P.I.T.), the numero uno, self-financed, autonomous institution of Maharashtra. We are a constituent of the Bharatiya Vidya Bhavan, not just a conglomeration of more than 300 institutions, but a culture, a saga, a holy journey, started by Dr. K.M. Munshiji with the support of Mahatma Gandhi in 1938. Imparting value-based education with indian cultural ethos has always been the prime objective of the Bhavan.</p>
        <br />
        <p className="text-white/80">Engineers and technologists form the backbone of any nation's economic development. The world has recently undergone a very unprecedented, extraordinary, challenging time. We are witnessing an explosion of disruptive technologies. Artificial Intelligence, Machine Learning, Blockchain and Cloud Computing are rapidly growing and penetrating almost every field of engineering. Education, in particular, professional technical education, has landed at a new normal and is rapidly changing its practices.</p>
        <br />
        <p className="text-white/80">S.P.I.T. is constantly adapting itself to these changes. It has observed an extraordinary growth in placements during this challenging time, while the majority of other technical institutions were struggling.</p>
        <br />
        <p className="text-white/80">Disruptions like covid will come again and again, and humanity will have to face it bravely again and again. Future engineers will work for 50-55 years of their life, they will have 3 to 4 diversified careers in technologies we cannot think of today. To make aspiring minds confident, and courageous to face future challenges, education must prepare them for the "why" and the "how". At S.P.I.T. our teaching-learning and evaluation processes focus on these aspects.</p>
        <br />
        <p className="text-white/80">We believe in multi-disciplinary exposure to the learners, yet ensuring growth in one vertical, cherishing human sensitivity and empathy. Our thoughtfully articulated, unique academic model aims towards developing a holistic, all-rounded technocrat. It simultaneously develops knowledge, attitude and skills. We also give importance to physical, philosophical and spiritual growth.</p>
        <br />
        <p className="text-white/80">Pursuing a research internship during 6th semester; an industry internship during 8th semester; a provision of simultaneously acquiring a minor in management from SP Jain Institute of Management Research; liberal learning courses spanning from performing arts to trekking, photography, working with NGOs etc, are some of the salient features of academics at S.P.I.T.</p>
        <br />
        <p className="text-white/80">Our splendid academic performance, sparkling placements (quantitative and qualitative), enrollment for higher studies at the best places of the world, prizes won by our students in national/international level technical competitions, consistently over many years are the true testimonials of life at S.P.I.T.. With the support of a dedicated and hardworking faculty and staff, the institute has achieved enviable visibility and ranking in a short span of time. On behalf of all stakeholders of S.P.I.T., I welcome you to this family and look forward to your valuable association with us for a better tomorrow. Four years of education at Sardar Patel Institute of Technology will undoubtedly empower you to lead a successful life.</p>
        <br />
        <p className="text-white/80">Let's learn together. Let's grow together.</p>
        <br />
        <p className="text-white/80 font-bold">Dr. Bhalchandra N. Chaudhari,</p>
        <p className="text-white/80 font-bold">Principal</p>

      </div>
    ),
  },
  {
    title: "Admission Programmes",
    icon: <FileText className="w-5 h-5" />,
    content: (
      // ...Programs Offered section...
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Programs Offered</h2>
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
    ),
  },
  {
    title: "Fee Structure",
    icon: <span className="font-bold text-xl">₹</span>,
    content: (
      // ...Fee Structure & Payment section...
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-[#4169E1]/30">
                <th className="py-4 px-6 text-left">Category</th>
                <th className="py-4 px-6 text-right">First Year</th>
                <th className="py-4 px-6 text-right">Second Year</th>
                <th className="py-4 px-6 text-right">Third Year</th>
                <th className="py-4 px-6 text-right">Fourth Year</th>
                <a href="#" className="py-4 px-6 text-center"><th className="py-4 px-6 text-center" >Action</th></a>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#4169E1]/30">
                <td className="py-4 px-6">B.Tech</td>
                <td className="py-4 px-6 text-right">₹2,10,000</td>
                <td className="py-4 px-6 text-right">₹2,10,000</td>
                <td className="py-4 px-6 text-right">₹2,10,000</td>
                <td className="py-4 px-6 text-right">₹2,10,000</td>
                <a href="https://spit-payment.vercel.app/" className="py-4 px-6 text-center"><td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handlePayment(145000, "First Year Fee - Open Category")}
                    className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay Now
                  </button>
                </td>
                </a>
              </tr>
              <tr>
                <td className="py-4 px-6">M.Tech</td>
                <td className="py-4 px-6 text-right">₹1,00,000</td>
                <td className="py-4 px-6 text-right">₹1,00,000</td>
                <td className="py-4 px-6 text-right">₹1,00,000</td>
                <td className="py-4 px-6 text-right">₹1,00,000</td>
                <a href="https://spit-payment.vercel.app/" className="py-4 px-6 text-center"><td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handlePayment(15000, "First Year Fee - Reserved Category")}
                    className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay Now
                  </button>
                </td>
                </a>
              </tr>
              <tr>
                <td className="py-4 px-6">MCA</td>
                <td className="py-4 px-6 text-right">₹1,31,000</td>
                <td className="py-4 px-6 text-right">₹1,31,000</td>
                <td className="py-4 px-6 text-right">₹1,31,000</td>
                <td className="py-4 px-6 text-right">₹1,31,000</td>
               <a href="https://spit-payment.vercel.app/" className="py-4 px-6 text-center"> <td className="py-4 px-6 text-center">
                  
                  <button
                    onClick={() => handlePayment(15000, "First Year Fee - Reserved Category")}
                    className="bg-[#4169E1] hover:bg-[#2c5aa0] text-white px-4 py-2 rounded-md flex items-center gap-2 mx-auto"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay Now
                  </button>
                </td>
                </a>
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
    ),
  },
  {
    title: "Placements & Internships",
    icon: <GraduationCap className="w-5 h-5" />,
    content: (
      <PlacementAccordion />
    ),
  },
  {
    title: "Higher Studies",
    icon: <span className="text-2xl">🏛️</span>,
    content: (
      <HigherStudiesAccordion />
    ),
  },
  {
    title: "SP - Technology Business Incubator",
    icon: <span className="text-2xl">🏢</span>,
    content: (
      <div>
        {/* Add your TBI content here */}
        <p className="text-white/80">Incubator details go here.</p>
      </div>
    ),
  },
  {
    title: "Life @ SPIT",
    icon: <span className="text-2xl">👥</span>,
    content: (
      <div>
        {/* Add your Life @ SPIT content here */}
        <p className="text-white/80">Campus life, clubs, and activities info goes here.</p>
      </div>
    ),
  },
  {
    title: "Our Alumni",
    icon: <GraduationCap className="w-5 h-5" />,
    content: (
      <DaeAccordion />
    ),
  },
  {
    title: "Academics",
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div>
        {/* Curriculum Structure Section */}
        <div className="flex flex-col items-center mb-8">
          <a
            href="/assets/UG_Academics_Salient_Features.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-6"
          >
            <div className="flex items-center bg-[#f2f2f2] rounded px-4 py-3 text-[#2B107E] font-semibold shadow hover:bg-[#e9e9e9] transition">
              <span className="mr-2 bg-[#2B107E]">📄</span>
              <a href="/assets/UGCurriculumStructureSPIT.pdf">Read about our Salient features of UG Academics [Document]</a>
            </div>
          </a>
          <div className="w-full flex justify-center">
            <img
              src="/assets/CurriculumStructure.jpeg"
              alt="Curriculum Structure @ S.P.I.T"
              className="max-w-full md:max-w-2xl border border-[#4169E1]/30 rounded shadow"
            />
          </div>
          <div className="w-full md:w-2/3 mt-6">
            <h3 className="text-lg font-bold text-[#BBD0FF] mb-2">Detailed Curriculum:</h3>
            <ol className="list-decimal list-inside text-[#49B6FF] font-semibold space-y-1">
              <li>
                <a href="/assets/B.-Tech.-CSE-DS_2021-2025_Scheme.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0077B6]">
                  B.Tech. Computer Science & Engineering (Data Science)
                </a>
              </li>
              <li>
                <a href="/assets/B.-Tech.-CE_2021-2025_Scheme.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0077B6]">
                  B.Tech. Computer Engineering
                </a>
              </li>
              <li>
                <a href="/assets/B.-Tech.-CSE-AIML_2021-2025_Scheme.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0077B6]">
                  B.Tech. Computer Science & Engineering (Artificial Intelligence And Machine Learning)
                </a>
              </li>
              <li>
                <a href="/assets/B.-Tech.-EXTC_2021-2025_Scheme.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0077B6]">
                  B.Tech. Electronics & Telecommunication Engineering
                </a>
              </li>
            </ol>
            <div className="mt-4">
              <a
                href="/assets/salient_features_curriculum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49B6FF] underline hover:text-[#0077B6] text-sm"
              >
                <span className="mr-2 bg-[#2B107E]">📄</span>
                Salient features of curriculum
              </a>
            </div>
          </div>
        </div>
        {/* End Curriculum Structure Section */}
        {/* ...existing Academics content if any... */}
      </div>
    ),
  },
  {
    title: "Research",
    icon: <FlaskConical className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-center px-2 md:px-8 py-6">
        {/* Top Images Row */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 mb-8">
          <img
            src="/assets/Key-attributes-of-SP-IT-RD-Cell.png"
            alt="Key attributes of R&D Cell, S.P.I.T"
            className="max-w-xs md:max-w-sm w-full border border-[#4169E1]/30 rounded shadow bg-white p-2"
          />
          <img
            src="/assets/Initatives.png"
            alt="R&D Initiatives"
            className="max-w-xs md:max-w-sm w-full border border-[#4169E1]/30 rounded shadow bg-white p-2"
          />
        </div>
        {/* Publications, Consultancy, Patents, Competitions */}
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
          {/* Left Column */}
          <div className="flex-1 min-w-[250px]">
            <div className="mb-6">
              <h3 className="font-bold text-[#C9EDDC] text-lg mb-2 flex justify-between">PUBLICATIONS  <span className="text-[#F6C900]">836</span></h3>
              <hr />
              <br />
              <div className="text-sm text-[#C9EDDC] space-y-1">
                <div className="flex justify-between"><span>Conference</span><span>562</span></div>
                <div className="flex justify-between"><span>Journal</span><span>72</span></div>
                <div className="flex justify-between"><span>International</span><span>602</span></div>
                <div className="flex justify-between"><span>National</span><span>32</span></div>
                <div className="flex justify-between"><span>(by students)</span><span>546</span></div>
                <div className="flex justify-between"><span>Faculty</span><span>88</span></div>
              </div>
              <div className="mt-2 text-s text-[#C9EDDC]">
                <span className="font-semibold">Publication in 2020-21</span>
                <div className="flex justify-between"><span>Conference</span><span>171</span></div>
                <div className="flex justify-between"><span>Journal</span><span>31</span></div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-[#C9EDDC] text-lg mb-2 flex justify-between">PATENTS <span className="text-[#F6C900]">88</span></h3>
              <div className="text-sm text-[#C9EDDC] space-y-1">
                <div className="flex justify-between"><span>2015</span><span>12</span></div>
                <div className="flex justify-between"><span>2016</span><span>8</span></div>
                <div className="flex justify-between"><span>2017</span><span>10</span></div>
                <div className="flex justify-between"><span>2018</span><span>9</span></div>
                <div className="flex justify-between"><span>2019</span><span>50</span></div>
                <div className="flex justify-between"><span>2020</span><span>6</span></div>
              </div>
            </div>
          </div>
          {/* Center Column */}
          <div className="flex-1 min-w-[250px]">
            <div className="mb-6">
              <h3 className="font-bold text-[#C9EDDC] text-lg mb-2 flex justify-between">CONSULTANCY</h3>
              <div className="text-sm text-[#C9EDDC] space-y-1">
                <span className="font-semibold">FUNDED PROJECTS • 2017-21</span>
                <ul className="list-disc list-inside pl-2">
                  <li>BioMS, Starlyte, Industrial Signal Simulator, Aquacare, High power battery charger, Universal solar pump controller, power controller for induction casting machine, Development of Software applications to maintain service calls, Riddhi Heatron, Suyog, Zava Automotive Private Limited, General Auto Electronic Corporation, Digital Dojo, India Times Daily (MCA)</li>
                  <br />
                  <br />
                  <li>SGGS Institute of Engineering and Technology (SGGS), Nanded</li>
                  <br />
                  <br />
                  <li>India Times Daily, Smartly built</li>
                  <br />
                  <br />
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1 min-w-[250px]">
            <div className="mb-6">
              <h3 className="font-bold text-[#C9EDDC] text-lg mb-2 flex justify-between">COMPETITIONS <span className="text-black">136</span></h3>
              <div className="text-sm text-[#C9EDDC] space-y-1">
                <div className="flex justify-between"><span>ELECTRONICS & TELECOMMUNICATIONS</span><span>71</span></div>
                <div className="flex justify-between"><span>ELECTRONICS</span><span>37</span></div>
                <div className="flex justify-between"><span>INFORMATION TECHNOLOGY</span><span>5</span></div>
                <div className="flex justify-between"><span>COMPUTER SCIENCE</span><span>18</span></div>
                <div className="flex justify-between"><span>MASTER OF COMPUTER APPLICATIONS</span><span>5</span></div>
                <br />
              </div>
              <div className="text-sm text-[#C9EDDC] space-y-1">
                <span className="font-semibold">• TEXAS INSTRUMENTS <br /><br />• HACKTHON <br /><br />• MITSHUBSHI <br /><br /> • E-YANTRA ACCS <br /><br /> • IEEE <br /><br /> • XTREME <br /><br /> </span>
              </div>
            </div>
          </div>
        </div>
        {/* Know more link */}
        <div className="w-full flex justify-start mt-4">
          <a
            href="/assets/All-R-D-Data-brouchure-2.pdf"
            className="text-[#49B6FF] text-xs font-bold underline hover:text-[#0077B6]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to know more...
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Electronics & Telecommunication Engineering",
    icon: <ArrowRight className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-start mt-8">
        <h2 className="text-3xl font-bold text-[#E5C3D1] mb-2 bg-[#613F75] text-center w-full rounded-lg ">At a glance</h2>
        <br />
        <a
          href="/assets/EXTC_Flyer.pdf"
          className="text-[#92D5E6] text-xs font-bold underline hover:text-[#0077B6] mb-2 style-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to know more...
        </a>
        <br />
        <br />
        <div className="w-full max-w-xl border-2 border-black rounded shadow bg-white p-2">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gAGGQyKsb0g"
              title="Electronics and TeleCommunication Department 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Computer Engineering",
    icon: <ArrowRight className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-start mt-8">
        <h2 className="text-3xl font-bold text-[#E5C3D1] mb-2 bg-[#613F75] text-center w-full rounded-lg ">At a glance</h2>
        <br />
        <a
          href="/assets/Computer_Flyer.pdf"
          className="text-[#92D5E6] text-xs font-bold underline hover:text-[#0077B6] mb-2 style-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to know more...
        </a>
        <br />
        <br />
        <div className="w-full max-w-xl border-2 border-black rounded shadow bg-white p-2">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vNmwIC-pacQ?si=uH3MwTeddLqo0NJI" 
              title="Computer Engineering 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Computer Science & Engineering",
    icon: <ArrowRight className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-start mt-8">
        <h2 className="text-3xl font-bold text-[#E5C3D1] mb-2 bg-[#613F75] text-center w-full rounded-lg ">At a glance</h2>
        <br />
        <a
          href="/assets/Data-Science.pdf"
          className="text-[#92D5E6] text-xs font-bold underline hover:text-[#0077B6] mb-2 style-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to know more...
        </a>
        <br />
        <br />
        <div className="w-full max-w-xl border-2 border-black rounded shadow bg-white p-2">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/z5dSzReM9eU?si=NSW_BCIkfA_OEuzs"  
              title="Computer Science and Engineering 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Master of Computer Application",
    icon: <ArrowRight className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-start mt-8">
        <h2 className="text-3xl font-bold text-[#E5C3D1] mb-2 bg-[#613F75] text-center w-full rounded-lg ">At a glance</h2>
        <br />
        <a
          href="/assets/MCA_flyer-2021.pdf"
          className="text-[#92D5E6] text-xs font-bold underline hover:text-[#0077B6] mb-2 style-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to know more...
        </a>
        <br />
        <br />
        
      </div>
    ),
  },
  {
    title: "Admissions Core Committee",
    icon: <Users className="w-5 h-5" />,
    content: (
      <div className="w-full flex flex-col items-start mt-8">
        <h2 className="text-3xl font-bold text-[#E5C3D1] mb-2 bg-[#613F75] text-center w-full rounded-lg ">Admission Core Committees</h2>
        <br />
        <ul className='text-[#92D5E6] text-xs font-bold list-disc pl-4'>
          <li>1. Dr. Y.S. Rao - Chairman</li>
          <li>2. Prof. Jignesh Sisodia - Vice Chairman</li>
          <li>3. Dr. Kailas Devadkar - Member</li>
          <li>4. Prof. Kaisar Katchi - Member</li>
          <li>5. Smt. Pallavi More - Member</li>
        </ul>
        <br />
        <br />
        
      </div>
    ),
  },
  {
    title: "Admission Enquiry",
    icon: <Mail className="w-5 h-5" />,
    content: (
      <div>
        <br />
              <button  className=" bg-gradient-to-b from-[#DDBEA9] to-[#FFE8D6] hover:bg-gradient-to-t text-black px-4 py-2 rounded text-sm flex items-center gap-2 w-max">
              <li><a href="https://www.spit.ac.in/admissions-enquiry-2025-26/" >Admissions Enquiry 2025-26</a></li>
              </button>
              <br />
              <br />
              <button  className=" bg-gradient-to-b from-[#DDBEA9] to-[#FFE8D6] hover:bg-gradient-to-t text-black px-4 py-2 rounded text-sm flex items-center gap-2 w-max">
              <li><a href="/assets/AdmissionContactDetails.pdf" >Contact Details</a></li>
              </button>
              <br />
      </div>
    ),
  },
];

const CutoffSections = () => (
  <div className="space-y-8">
    <CutoffSection
      year="2024-25"
      pdf="/assets/Cutoff2425.pdf"
      description="Check the Cutoff details of MHT-CET for the academic year 2024-25."
    />
    <CutoffSection
      year="2023-24"
      pdf="/assets/Cutoff2324.pdf"
      description="Check the Cutoff details of MHT-CET for the academic year 2023-24."
    />
    <CutoffSection
      year="2022-23"
      pdf="/assets/Cutoff2223.pdf"
      description="Check the Cutoff details of MHT-CET for the academic year 2022-23."
    />
    <CutoffSection
      year="2021-22"
      pdf="/assets/Cutoff2122.pdf"
      description="Check the Cutoff details of MHT-CET for the academic year 2021-22."
    />
    <CutoffSection
      year="2020-21"
      pdf="/assets/Cutoff2021.pdf"
      description="Check the Cutoff details of MHT-CET for the academic year 2020-21."
    />
  </div>
);

const CutoffSection = ({ year, pdf, description }: { year: string; pdf: string; description: string }) => (
  <div className="bg-black/30 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
      <h2 className="text-2xl font-bold text-[#FFD700] mb-2">MHT-CET Cutoff {year}</h2>
      <p className="text-white/80 mb-4">{description}</p>
    </div>
    <a
      href={pdf}
      download
      className="bg-gradient-to-b from-[#240046] to-[#10002B] text-white hover:bg-gradient-to-t px-4 py-2 rounded text-sm flex items-center gap-2 w-max"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </a>
  </div>
);

export const Admissions = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedFee, setSelectedFee] = useState<{amount: number; description: string} | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handlePayment = (amount: number, description: string) => {
    setSelectedFee({ amount, description });
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] mx-auto px-4 py-8 py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-8"
        >
          Admissions
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">SPIT Highlights</h2>
            <ul className="space-y-3 text-white/80">
              <li>• Numero Uno, Self-Financed, Empowered Autonomous Institution of Maharashtra.</li>
              <li>• 100 % Placement with Average Salary at par with IITs</li>
              <li>• Consistently ranked in the bracket of 100 to 150 by NIRF in the country.</li>
              <li>• Unique, flexible, globally competent curriculum.</li>
              <li>• Strong culture of innovation, research and entrepreneurship.</li>
              <li>• Consistent winners of Industry organized technical competitions like Texas Instruments, ARM, KPMG & many more.</li>
              <li>• Fruitful industry association, Semester long industry internship.</li>
              <li>• 100% Digital Campus with state-of-the-art infrastructure.</li>
              <li>• 24x7 Wi-Fi enabled campus.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 backdrop-blur-md border border-[#4169E1]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4 w-full text-center">Important Information to Know</h2>
            <ul className="space-y-3 text-white/80">
            <br />
              <button  className=" bg-gradient-to-b from-[#240046] to-[#10002B] text-white hover:bg-gradient-to-t px-4 py-2 rounded  items-center gap-2 w-full text-center">
              <li className="text-white"><a href="https://www.spit.ac.in/admissions-enquiry-2025-26/" >Admissions Enquiry 2025-26</a></li>
              </button>
              <br />
              <br />
              <button  className=" bg-gradient-to-t from-[#240046] to-[#10002B] text-white hover:bg-gradient-to-t px-4 py-2 rounded  items-center gap-2 w-full text-center">
              <li className="text-white"><a href="/assets/FAQAdmissions.pdf" >Frequently Asked Questions</a></li>
              </button>
              <br />
              <br />
              <button  className=" bg-gradient-to-t from-[#240046] to-[#10002B] text-white hover:bg-gradient-to-t px-4 py-2 rounded  items-center gap-2 w-full text-center">
              <li className="text-white"><a href="/assets/SPITBrochure.pdf" >SPIT Brochure</a></li>
              </button>
              <br />
              <br />
              <button  className=" bg-gradient-to-t from-[#240046] to-[#10002B] text-white hover:bg-gradient-to-t px-4 py-2 rounded  items-center gap-2 w-full text-center">
              <li className="text-white"><a href="/assets/AdmissionContactDetails.pdf" >Contact Details</a></li>
              </button>
              <br />
              <br />
            </ul>
          </motion.div>
        </div>
        {/* Cutoff for Last 5 Years */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#0077B6] mb-6">Cutoff for Last 5 Years</h2>
          <CutoffSections />
        </motion.div>
        <br />

       {/* Accordion Section */}
        <div className="mb-8">
          {accordionSections.map((section, idx) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              icon={section.icon}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {section.content}
            </AccordionSection>
          ))}
        </div>
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

