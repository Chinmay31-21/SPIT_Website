import React from 'react';
import { Building2, Users, Trophy, TrendingUp } from 'lucide-react';

export const Placements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b (from-[#02365E] to-[#30036B]) py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center"
>  Main Website - <a href="https://placements.spit.ac.in/" className="hover:text-[#023E7D]">'Training & Placement Cell'</a>
          
        </h1>

        {/* About Us - Training and Placement Cell */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center">About Training & Placement Cell</h2>
          <div className="max-w-4xl mx-auto text-center text-lg text-gray-100 bg-[#2B107E]/90 rounded-xl px-8 py-8 shadow mb-8">
            Aligned with the institute’s vision and mission, the Training and Placement Cell works with the academic curriculum to enhance students’ employability. The T&P Officer actively motivates and prepares students for interviews and career opportunities through systematic coaching and guidance. The cell offers services including career counseling, employment opportunities, and interview preparation, ensuring comprehensive readiness for the professional world. Located on the first floor of the Institute Building, the cell is a dynamic hub frequently visited by students, faculty, industry leaders, and entrepreneurs. It functions as a fully equipped department dedicated to facilitating successful placements.
          </div>
        </div>

        {/* Message from the Principal and TPO */}
        <div className="w-full mb-16">
          {/* Principal Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center bg-[#3B2175] py-12 px-4 md:px-0">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
              <img
                src="/assets/Principalbg.png"
                alt="Principal"
                className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-white max-w-3xl">
              <h3 className="text-2xl font-bold mb-2">Message from the Principal</h3>
              <p className="mb-4 text-lg font-medium">
                "As the Principal of Sardar Patel Institute of Technology (S.P.I.T.), I take pride in our institute's educational and placement achievements. Since 1938, as part of Bharatiya Vidya Bhavan, S.P.I.T. has delivered value-based education rooted in Indian culture. Our students' success in securing placements at top companies like Apple, Nvidia, Google, and Tesla reflects our commitment to excellence. With over 200 students employed in the Bay Area, our global impact is clear. We foster an inclusive environment that ensures our students are well-prepared to contribute to society. Welcome to the S.P.I.T. family as we continue our journey toward a brighter future."
              </p>
              <div className="font-bold">
                Dr. Bhalachandra Chaudhari<br />
                Principal, Sardar Patel Institute of Technology
              </div>
            </div>
          </div>
          {/* TPO Section */}
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-white py-12 px-4 md:px-0">
            <div className="text-[#2B107E] max-w-3xl md:mr-10">
              <h3 className="text-2xl font-bold mb-2">Message from TPO</h3>
              <p className="mb-4 text-lg font-medium text-black">
                "The Training and Placement Office at Sardar Patel Institute of Technology (S.P.I.T.) is committed to fostering student excellence and growth. Through expert-led workshops, structured curriculum, comprehensive labs, and innovative projects, students are equipped to excel in their fields. Participation in competitions and regular seminars further enhance their practical skills. The Sardar Patel Technology Business Incubator (SPTBI) encourages entrepreneurship, offering industry exposure through internships in student startups. With a dynamic culture and commitment to excellence, S.P.I.T. prepares students for a successful and fulfilling future."
              </p>
              <div className="font-bold">
                Shri. Vinod Sikka<br />
                Head of Training & Placement Office, S.P.I.T.
              </div>
            </div>
            <div className="flex-shrink-0 mb-6 md:mb-0 md:ml-10">
              <img
                src="/assets/VinodSikka1.png"
                alt="TPO"
                className="rounded-full w-40 h-40 object-cover border-4 border-[#2B107E] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Building2 className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-white/60">Companies Visited</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Users className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">99.53%</div>
            <div className="text-white/60">Placement Rate</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <Trophy className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">205 LPA</div>
            <div className="text-white/60">Highest Package Acquired (2020-25)</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6 text-center">
            <TrendingUp className="mx-auto h-8 w-8 text-[#FFD700] mb-4" />
            <div className="text-3xl font-bold text-white mb-2">14.51 LPA </div>
            <div className="text-white/60">Average Package (2024-25)</div>
          </div>
        </div>

        

        {/* Top Recruiters */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center">Top Recruiters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { src: "/assets/PP.jpg", alt: "PhonePe" },
              { src: "/assets/Google.webp", alt: "Google" },
              { src: "/assets/Microsoft.png", alt: "Microsoft" },
              { src: "/assets/amazon.jpg", alt: "Amazon" },
              { src: "/assets/jpmclogo.png", alt: "JP Morgan Chase" },
              { src: "/assets/Barclays.jpg", alt: "Barclays" },
              { src: "/assets/WorkIndia.jpeg", alt: "WorkIndia" },
              { src: "/assets/Zomato.png", alt: "Zomato" },
              { src: "/assets/Oracle.png", alt: "Oracle" },
              { src: "/assets/MorganStanley.png", alt: "Morgan Stanley" },
              { src: "/assets/DeutscheBank.png", alt: "Deutsche Bank" },
              { src: "/assets/MSCI.png", alt: "MSCI" }
            ].map((company, i) => (
              <div key={i} className="bg-white backdrop-blur-md border border-[#001845]/30 rounded-lg p-4  flex items-center justify-center">
                <img src={company.src} alt={company.alt} className="max-h-12 object-contain" />
                
              </div>
            ))}
          </div>
        </div>
        {/* Placement Process */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center">Placement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Placement Talk",
                description: "Companies present their organization structure, work culture, and job profiles."
              },
              {
                title: "Online Assessment",
                description: "Technical and aptitude tests to evaluate candidates' skills."
              },
              {
                title: "Technical Interviews",
                description: "In-depth evaluation of technical knowledge and problem-solving abilities."
              },
              {
                title: "HR Interview",
                description: "Discussion about candidate's background, goals, and cultural fit."
              },
              {
                title: "Offer Roll-out",
                description: "Selected candidates receive job offers with detailed terms."
              },
              {
                title: "Post-Placement Support",
                description: "Guidance for documentation and joining formalities."
              }
            ].map((step, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
                <div className="text-[#FFD700] font-bold text-xl mb-3">{step.title}</div>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Preparation Roadmap - Vertical Timeline with Smooth Transition */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center">
            Placement Preparation Journey
          </h2>
          <div className="relative flex flex-col items-center w-full">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#2B107E]/30 z-0" style={{ minHeight: 900, transform: "translateX(-50%)" }} />
            <div className="w-full flex flex-col gap-24 z-10">
              {[
                {
                  img: "/assets/industry-session.jpg",
                  title: "Industry Sessions",
                  desc: "Sessions by experts from top companies like PhonePe and Deutsche Bank bridge the gap between students and industry.",
                  icon: "Q",
                  align: "left"
                },
                {
                  img: "/assets/dsa-hackathon.jpg",
                  title: "DSA Preparation & Hackathon",
                  desc: "Regular programming tests prepare students for placements and identify technical gaps. Participation in top hackathons offers students a chance to showcase skills and earn early placements.",
                  icon: "Q",
                  align: "right"
                },
                {
                  img: "/assets/mock-interview.jpg",
                  title: "Mock Interview",
                  desc: "Placed final-year students conduct mock interviews and provide feedback on technical and non-technical aspects to prepare students for placements.",
                  icon: "A",
                  align: "left"
                },
                {
                  img: "/assets/workshop-session.jpg",
                  title: "Workshop & Sessions",
                  desc: "Placed students and interns offer guidance to clear doubts and aid preparation.",
                  icon: "A",
                  align: "right"
                },
                {
                  img: "/assets/group-session.jpg",
                  title: "Group Session",
                  desc: "Group sessions and peer learning help students to share experiences and strategies for placement success.",
                  icon: "S",
                  align: "left"
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center justify-center gap-8 w-full transition-all duration-700 ease-in-out`}
                >
                  {/* Left Side */}
                  {step.align === "left" && (
                    <>
                      <div className="md:w-1/2 flex justify-end md:pr-12">
                        <div className="bg-[#2B107E] rounded-xl shadow-lg p-4 w-full max-w-md transition-transform duration-700 hover:scale-105">
                          <img src={step.img} alt={step.title} className="rounded mb-4 w-full object-cover max-h-56 transition-all duration-700" />
                          <div className="text-white font-bold text-lg mb-1">{step.title}</div>
                          <div className="text-white/80 text-sm">{step.desc}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-4 border-[#2B107E] flex items-center justify-center font-bold text-[#2B107E] text-lg shadow mb-2 transition-all duration-700">{step.icon}</div>
                        {idx < 4 && <div className="h-24 w-1 bg-[#2B107E]/30 hidden md:block"></div>}
                      </div>
                      <div className="md:w-1/2"></div>
                    </>
                  )}
                  {/* Right Side */}
                  {step.align === "right" && (
                    <>
                      <div className="md:w-1/2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-4 border-[#2B107E] flex items-center justify-center font-bold text-[#2B107E] text-lg shadow mb-2 transition-all duration-700">{step.icon}</div>
                        {idx < 4 && <div className="h-24 w-1 bg-[#2B107E]/30 hidden md:block"></div>}
                      </div>
                      <div className="md:w-1/2 flex justify-start md:pl-12">
                        <div className="bg-[#2B107E] rounded-xl shadow-lg p-4 w-full max-w-md transition-transform duration-700 hover:scale-105">
                          <img src={step.img} alt={step.title} className="rounded mb-4 w-full object-cover max-h-56 transition-all duration-700" />
                          <div className="text-white font-bold text-lg mb-1">{step.title}</div>
                          <div className="text-white/80 text-sm">{step.desc}</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

{/* Testimonials from Top Recruiters - Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] text-center mb-12">What Recruiters Say</h2>
          <RecruiterTestimonialsCarousel />
        </div>

        {/* Placement Reports & Star Alumni Photo Card Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-12 text-center">Placement Reports & Star Alumni</h2>
          <PhotoCardCarousel />
        </div>

        {/* Contact Section */}
        <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact TPO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white mb-2 font-bold">Training & Placement Officer</p>
              <p className="text-white/70 ">Email: tpo@spit.ac.in</p>
              <p className="text-white/70">Phone: +91 9987001445</p>
            </div>
            <div>
              <p className="text-white mb-2 font-bold">Placement Coordinators</p>
              <p className="text-white/70">Student Coordinator: tpc@spit.ac.in</p>
              <p className="text-white/70">Faculty Coordinator: faculty.tpo@spit.ac.in</p>
            </div>
            <div>
              <p className="text-white mb-2 font-bold">Find Us</p>
              <p className="text-white/70">Room No. 104,
              <p className="text-white/70"> Bharatiya Vidya Bhavans Sardar Patel Institute of Technology Munshi Nagar,</p>
              <p className="text-white/70"> Andheri (West), Mumbai 400 058</p>
</p>
            </div>
          </div>
        </div>
<br />
        

       
        
      </div>
    </div>
  );
};

const recruiterTestimonials = [
  {
    logo: "/assets/jpmclogo.png",
    company: "JP Morgan Chase & Co.",
    text: "Our longstanding partnership with SPIT has been exceptionally gratifying. The students demonstrate impressive logical and analytical abilities, leaving us deeply impressed with their caliber. We value this mutually beneficial relationship and look forward to continuing our association.",
  },
  {
    logo: "/assets/MorganStanley.png",
    company: "Morgan Stanley",
    text: "SPIT is an esteemed partner whose students display exceptional eagerness to learn and maintain a consistently positive outlook and attitude toward the industry. They possess robust technical abilities and collaborate effectively with their manager and peers. Additionally, they provide valuable feedback to improve their colleagues' work and readily accept suggestions from others, taking appropriate measures where required.",
  },
  {
    logo: "/assets/Google.webp",
    company: "Google",
    text: "SPIT graduates consistently demonstrate exceptional problem-solving skills and technical expertise.",
    name: "Sarah Johnson",
    designation: "Technical Recruiting Manager"
  },
  {
    logo: "/assets/Microsoft.png",
    company: "Microsoft",
    text: "The quality of talent from SPIT aligns perfectly with our innovation-driven culture.",
    name: "Bill Gates",
    designation: "Founder and CEO of Microsoft"
  },
  {
    logo: "/assets/DeutscheBank.png",
    company: "Deutsche Bank",
    text: "It is our utmost pleasure to be associated with SPIT. Their students are adeptly trained and approach assignments, tasks, group work in a systematic manner. The students exhibit strong self-motivation and are well-prepared for their daily work, resulting in their significant contributions to our organization.",
  },
  {
    logo: "/assets/amazon.jpg",
    company: "Amazon",
    text: "Amazon has had a long-standing relationship with SPIT, and we are consistently impressed by the quality of students they produce. Their technical skills and problem-solving abilities are top-notch, making them a great fit for our teams.",
  }
];

function RecruiterTestimonialsCarousel() {
  const [idx, setIdx] = React.useState(0);
  const total = recruiterTestimonials.length;
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 6 seconds
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const testimonial = recruiterTestimonials[idx];

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
      {/* Carousel Content */}
      <div className="flex flex-col items-center w-full transition-all duration-500">
        <div className="w-full rounded-xl bg-[#f8fafc] shadow-lg px-8 py-10 flex flex-col items-center" style={{ minHeight: 320 }}>
          <img src={testimonial.logo} alt={testimonial.company} className="h-16 mx-auto mb-4" />
          <div className="text-2xl font-semibold text-[#2B107E] text-center mb-2">{testimonial.company}</div>
          <div className="max-w-3xl text-center text-gray-700 text-lg mb-6 mx-auto">{testimonial.text}</div>
          {testimonial.name && (
            <div className="text-[#FFD700] font-bold">{testimonial.name}</div>
          )}
          {testimonial.designation && (
            <div className="text-gray-500 text-sm mb-2">{testimonial.designation}</div>
          )}
          <div className="text-4xl text-[#2B107E] font-bold text-center">”</div>
        </div>
      </div>
      {/* Carousel Controls */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-500"
        aria-label="Previous"
        style={{ zIndex: 2 }}
      >
        &#8249;
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-500"
        aria-label="Next"
        style={{ zIndex: 2 }}
      >
        &#8250;
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {recruiterTestimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === idx ? 'bg-[#FFD700]' : 'bg-gray-300'}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const photoCards = [
  {
    img: "/assets/Placement25.jpg",
    title: "Placement Report 2024-25",
    desc: "Our latest placement report with record-breaking offers and top recruiters."
  },
  {
    img: "/assets/Internship25.jpg",
    title: "Internship Report 2024-25",
    desc: "Highlights of our students' internships with leading companies and organizations."
  },
  {
    img: "/assets/alumni.jpg",
    title: "Star Alumni 2020-25",
    desc: "Celebrating our outstanding alumni and their achievements."
  },
  {
    img: "/assets/DistinguishedAlumni.jpg",
    title: "Distinguished Alumni",
    desc: "Honoring alumni who have made a mark in their fields."
  },
  {
    img: "/assets/phonepe.jpg",
    title: "PhonePe Placed 2023-25",
    desc: "Our students at PhonePe and other top tech companies."
  },
  {
    img: "/assets/jpmc.jpg",
    title: "JP Morgan Chase & Co. Placed 2023-25",
    desc: "Our students excelling at JP Morgan Chase & Co. and other financial giants."
  },
  {
    img: "/assets/Barc.jpg",
    title: "Barclays Placed 2023-25",
    desc: "Our students making waves at Barclays and other leading financial institutions."
  },
  {
    img: "/assets/WM.jpg",
    title: "WorkIndia & MSCI Placed 2024-25",
    desc: "Our students thriving at WorkIndia and MSCI, showcasing their skills in diverse industries."
  },
];

function PhotoCardCarousel() {
  const [idx, setIdx] = React.useState(0);
  const total = photoCards.length;
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 5 seconds
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % total);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const card = photoCards[idx];

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <div className="w-full flex flex-col items-center bg-white/95 rounded-xl shadow-lg px-10 py-12 transition-all duration-500">
        <img
          src={card.img}
          alt={card.title}
          className="rounded-lg shadow mb-8 w-full max-h-[32rem] object-contain bg-white"
          style={{ minHeight: '18rem' }}
        />
        <div className="text-2xl font-bold text-[#2B107E] mb-3 text-center">{card.title}</div>
        <div className="text-lg text-gray-700 text-center mb-2">{card.desc}</div>
      </div>
      {/* Carousel Controls */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-500"
        aria-label="Previous"
        style={{ zIndex: 2 }}
      >
        &#8249;
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-500"
        aria-label="Next"
        style={{ zIndex: 2 }}
      >
        &#8250;
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {photoCards.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === idx ? 'bg-[#2B107E]' : 'bg-gray-300'}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}