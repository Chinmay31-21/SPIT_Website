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
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96,
      position: 'absolute'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      position: 'relative',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.96,
      position: 'absolute'
    })
  };

  return (
    <section className="py-16 bg-gradient-to-bl from-[#C6B8FF] to-[#B8F3FF] dark:from-[#0E1428] dark:to-[#27193f] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#570761] dark:text-[#FFD700] mb-12 text-center">
          What Recruiters Say
        </h2>

        <div className="relative min-h-[300px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
              className="w-full"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="bg-black/30 backdrop-blur-lg rounded-xl border border-[#00BFFF]/20 p-8 shadow-2xl transition-shadow duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg transition-transform duration-500">
                    <img
                      src={testimonials[currentIndex].logo}
                      alt={testimonials[currentIndex].company}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                        {testimonials[currentIndex].company}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <blockquote className="text-xl text-white/90 italic mb-6 transition-colors duration-500">
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
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full shadow-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300 scale-100 hover:scale-110 focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full shadow-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300 scale-100 hover:scale-110 focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#FFD700] shadow-lg scale-125'
                  : 'bg-white/30 scale-100'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
