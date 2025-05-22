import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const RecruitersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      company: "Google",
      logo: "/assets/google.jpg",
      quote: "SPIT graduates consistently demonstrate exceptional problem-solving skills and technical expertise.",
      author: "Sarah Johnson",
      role: "Technical Recruiting Manager"
    },
    {
      company: "Microsoft",
      logo: "/assets/Microsoft.jpg",
      quote: "The quality of talent from SPIT aligns perfectly with our innovation-driven culture.",
      author: "Michael Chen",
      role: "Senior HR Director"
    },
    {
      company: "Amazon",
      logo: "/assets/amazon.jpeg",
      quote: "SPIT's focus on practical learning produces industry-ready professionals.",
      author: "David Miller",
      role: "Campus Relations Lead"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FFD700] mb-12 text-center">
          What Recruiters Say
        </h2>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl border border-[#00BFFF]/20 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={testimonials[currentIndex].logo}
                    alt={testimonials[currentIndex].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      {testimonials[currentIndex].company}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <blockquote className="text-xl text-white/90 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="text-[#FFD700] font-bold">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#FFD700]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
