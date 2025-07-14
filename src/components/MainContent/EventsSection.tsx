import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventsSection = () => {
  const events = [
    {
      title: "Annual Technical Symposium",
      date: "March 15-17, 2024",
      description: "Three days of technical competitions, workshops, and guest lectures.",
      photo: "/assets/ConferenceRoom.png" // Add your image paths here
    },
    {
      title: "Cultural Festival",
      date: "April 5-7, 2024",
      description: "Celebrate art, music, and dance with performances and competitions.",
      photo: "/assets/Entrance1.png"
    },
    {
      title: "Industry Connect Week",
      date: "May 1-5, 2024",
      description: "Networking sessions with industry leaders and alumni.",
      photo: "/assets/Auditorium.png"
    }
  ];

  const testimonials = [
    {
      name: "Omkar Rao",
      batch: "2025",
      role: "Software Developer at Morgan Stanley",
      content: "SPIT provided me with the perfect platform to grow both technically and personally with a strong focus on practical learning, I was well-prepared for my career in tech."
    },
    {
      name: "Jash Jain",
      batch: "2022",
      role: "Software Engineer at Amazon(USA)",
      content: "The hands-on projects and collaborative environment at SPIT were instrumental in shaping my skills and confidence. The faculty's support and the vibrant student community made my time here unforgettable."
    },
    {
      name: "Abhishek Mane",
      batch: "2021",
      role: "Senior Software Engineer at Meta(UK)",
      content: "SPIT's emphasis on innovation and real-world applications helped me develop a strong foundation in software engineering. The diverse opportunities and challenges I faced here prepared me for the dynamic tech industry."
    }
  ];

  const recruiters = [
    {
      company: "Morgan Stanley",
      quote: "SPIT graduates consistently demonstrate strong problem-solving skills and a solid understanding of software development principles.",
      photo: "/assets/jpmcdark.png"
    },
    {
      company: "Barclays",
      quote: "Finance and technology converge at SPIT, producing graduates who excel in both domains. Their analytical skills and technical expertise are impressive.",
      photo: "/assets/Barclays-Logo.png"
    },
    {
      company: "PhonePe",
      quote: "The innovative mindset and technical proficiency of SPIT students make them valuable assets in the fintech industry. We look forward to collaborating with them in the future.",
      photo: "/assets/Phonepe1.png"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f]">
      <div className="container mx-auto px-4">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#570761] dark:text-[#FFD700] mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-0 overflow-hidden flex flex-col"
              >
                {/* Event Photo */}
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-[#00BFFF] mb-3">{event.date}</p>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* View All News & Events Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://news-and-events-spit.vercel.app/"
              className="px-6 py-3 bg-[#570761] text-white rounded-lg font-semibold shadow-lg hover:bg-[#FFD700] hover:text-[#570761] transition-colors"
            >
              View All News & Events
            </a>
          </div>
        </motion.div>

        {/* Alumni Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#570761] dark:text-[#FFD700] mb-8 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Alumni Speak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
              >
                
                <p className="text-white/70 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-[#00BFFF] text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-sm">Batch of {testimonial.batch}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recruiter Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-[#570761] dark:text-[#FFD700] mb-8 flex items-center gap-3">
            <Award className="w-8 h-8" />
            What Recruiters Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
              >
                <img
                  src={recruiter.photo}
                  alt={recruiter.company}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-bold text-white mb-4">{recruiter.company}</h3>
                <p className="text-white/70">"{recruiter.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};