import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventsSection = () => {
  const events = [
    {
      title: "Annual Technical Symposium",
      date: "March 15-17, 2024",
      description: "Three days of technical competitions, workshops, and guest lectures."
    },
    {
      title: "Cultural Festival",
      date: "April 5-7, 2024",
      description: "Celebrate art, music, and dance with performances and competitions."
    },
    {
      title: "Industry Connect Week",
      date: "May 1-5, 2024",
      description: "Networking sessions with industry leaders and alumni."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      batch: "2018",
      role: "Senior Software Engineer at Google",
      content: "SPIT provided me with the perfect platform to grow both technically and personally."
    },
    {
      name: "Rahul Mehta",
      batch: "2019",
      role: "Product Manager at Meta",
      content: "The practical exposure and industry connections at SPIT were invaluable for my career."
    },
    {
      name: "Anita Desai",
      batch: "2020",
      role: "Tech Lead at Amazon",
      content: "The research opportunities and mentorship at SPIT shaped my professional journey."
    }
  ];

  const recruiters = [
    {
      company: "Google",
      quote: "SPIT consistently produces high-quality engineers with strong problem-solving skills."
    },
    {
      company: "Microsoft",
      quote: "The students from SPIT demonstrate excellent technical knowledge and adaptability."
    },
    {
      company: "Amazon",
      quote: "We're impressed by the innovative thinking and professional attitude of SPIT graduates."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#010e40] dark:to-[#130134]">
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
                className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-[#00BFFF] mb-3">{event.date}</p>
                <p className="text-white/70">{event.description}</p>
              </motion.div>
            ))}
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