import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const RecruitersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      company: "Google",
      logo: "/assets/Google.jpg",
      quote: "SPIT graduates consistently demonstrate exceptional problem-solving skills and technical expertise.",
      author: "Sarah Johnson",
      role: "Technical Recruiting Manager"
    },
    {
      company: "Microsoft",
      logo: "/assets/Micro.jpg",
      quote: "The quality of talent from SPIT aligns perfectly with our innovation-driven culture.",
      author: "Bill Gates",
      role: "Founder and CEO of Microsoft"
    },
    {
      company: "Amazon",
      logo: "/assets/images.jpg",
      quote: "SPIT's focus on practical learning produces industry-ready professionals.",
      author: "David Miller",
      role: "Campus Relations Lead"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#FFD700] drop-shadow-lg">
          What Recruiters Say
        </h2>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={testimonials[currentIndex].logo}
                    alt={testimonials[currentIndex].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                      {testimonials[currentIndex].company}
                    </h3>
                  </div>
                </div>
                <div>
                  <blockquote className="text-2xl italic leading-relaxed text-white/90 mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="text-[#FFD700] font-semibold text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-white/70">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-xl"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-xl"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#FFD700]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
