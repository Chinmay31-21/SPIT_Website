import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "/assets/Welcome.jpg",
    mobileUrl: "/assets/WelcomeMobile.jpg", // Add a mobile-optimized image for small screens
    title: "SPIT Welcomes You"
  },
  {
    url: "/assets/Entrance2.png",
    title: "SPIT Campus"
  },
  {
    url: "/assets/Lake.jpg",
    title: "Campus Lake"
  },
  {
    url: "/assets/AppleLab.png",
    title: "Apple Lab"
  },
  {
    url: "/assets/Lab1.png",
    title: "Computing Lab"
  },
  {
    url: "/assets/Auditorium.png",
    title: "Auditorium"
  },
  {
    url: "/assets/ConferenceRoom.png",
    title: "Conference Room"
  },
  {
    url: "/assets/Nature.png",
    title: "Nursery"
  },
  {
    url: "/assets/Library.png",
    title: "Library"
  },
  
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] w-full overflow-hidden bg-black">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02365E] to-[#30036B] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02365E] to-[#30036B] pointer-events-none" />
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          {/* For the first image, show a different image on small screens */}
          {currentIndex === 0 ? (
            <>
              {/* Mobile image */}
              <img
                src={images[0].mobileUrl}
                alt={images[0].title}
                className="block sm:hidden w-full h-full min-h-0 min-w-0 object-cover object-center"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
              {/* Desktop image */}
              <img
                src={images[0].url}
                alt={images[0].title}
                className="hidden sm:block w-full h-full min-h-0 min-w-0 object-cover object-center"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </>
          ) : (
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full min-h-0 min-w-0 object-cover object-center"
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black to-transparent h-24 sm:h-32" />

      {/* Navigation buttons */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={20} className="sm:hidden" />
        <ChevronLeft size={24} className="hidden sm:inline" />
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-1 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={20} className="sm:hidden" />
        <ChevronRight size={24} className="hidden sm:inline" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};