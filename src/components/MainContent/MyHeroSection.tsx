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

/*import React, { useEffect, useRef, useState } from "react";
// GSAP, Observer, and SplitType are loaded via CDN, so no direct imports are needed here.

// Data for each section
const sectionsData = [
  {
    heading: "Welcome to SPIT",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Campus Tour",
    image: "https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Serene Spaces",
    image: "https://images.pexels.com/photos/10368140/pexels-photo-10368140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Lush Greenery",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Student Life",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Extend the Window interface to include GSAP and SplitType for TypeScript type safety.
// This tells TypeScript that these global variables will exist after the CDN scripts load.
declare global {
  interface Window {
    gsap: any;
    Observer: any;
    SplitType: any;
  }
}

export const HeroSection = () => {
  // Refs to hold direct DOM element references for GSAP animations
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const headingRefs = useRef<Array<HTMLElement | null>>([]);
  const outerRefs = useRef<Array<HTMLElement | null>>([]);
  const innerRefs = useRef<Array<HTMLElement | null>>([]);
  const bgRefs = useRef<Array<HTMLElement | null>>([]);

  // State to track the current active section for navigation dots
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  // State to track if GSAP and related scripts have finished loading from CDN
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Effect to dynamically load GSAP and SplitType from CDNs
  useEffect(() => {
    const loadScripts = () => {
      // Create and append GSAP script
      const gsapScript = document.createElement('script');
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      gsapScript.onload = () => {
        // Create and append GSAP Observer script after GSAP is loaded
        const observerScript = document.createElement('script');
        observerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js";
        observerScript.onload = () => {
          // Create and append SplitType script after Observer is loaded
          const splitTypeScript = document.createElement('script');
          splitTypeScript.src = "https://unpkg.com/split-type"; // A reliable CDN for SplitType
          splitTypeScript.onload = () => {
            // Check if global GSAP and Observer objects are available before registering plugins
            if (window.gsap && window.Observer) {
              window.gsap.registerPlugin(window.Observer);
              setScriptsLoaded(true); // Set state to true, indicating scripts are ready
            } else {
              console.error("GSAP or Observer not found after loading scripts. Animations may not work.");
            }
          };
          document.body.appendChild(splitTypeScript);
        };
        document.body.appendChild(observerScript);
      };
      document.body.appendChild(gsapScript);
    };

    loadScripts(); // Initiate script loading on component mount

    // Cleanup function: remove dynamically added scripts when the component unmounts
    return () => {
      const scriptsToRemove = [
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js",
        "https://unpkg.com/split-type"
      ];
      scriptsToRemove.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Effect for GSAP animation logic, dependent on scriptsLoaded state
  useEffect(() => {
    // Exit if scripts are not yet loaded
    if (!scriptsLoaded) return;

    let currentIndex = -1; // Tracks the currently visible section
    let animating: boolean = false; // Flag to prevent multiple animations from triggering simultaneously
    const wrap = window.gsap.utils.wrap(0, sectionsData.length); // GSAP utility to loop index (e.g., 0, 1, 2, 3, 4, 0, 1...)

    // Initialize SplitType for each heading to break text into individual characters for animation
    headingRefs.current.forEach((el) => {
      if (el && window.SplitType) new window.SplitType(el, { types: "chars,words,lines", lineClass: "clip-text" });
    });

    // Set initial positions for outer and inner elements for the slide-in effect
    window.gsap.set(outerRefs.current, { yPercent: 100 }); // Outer div starts 100% down
    window.gsap.set(innerRefs.current, { yPercent: -100 }); // Inner div starts 100% up (relative to outer)

    // Apply an initial blur to all background images to start with the effect
    window.gsap.set(bgRefs.current, { filter: 'blur(5px)' });

    // Core function to animate to a specific section
    function gotoSection(index: number, direction: number) {
      index = wrap(index); // Ensure the index is within the valid range (0 to sectionsData.length - 1)
      if (index === currentIndex) return; // If already on the target section, do nothing
      animating = true; // Set animation flag to true to prevent new animations

      let fromTop = direction === -1; // Determine if scrolling direction is "up" (-1) or "down" (1)
      let dFactor = fromTop ? -1 : 1; // Direction factor for yPercent animations

      // Create a GSAP timeline for the transition
      let tl = window.gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" }, // Default animation duration and easing
        onComplete: () => {
          animating = false; // Reset animation flag when complete
          setCurrentActiveIndex(index); // Update the active index for dot navigation
        },
      });

      // Animate out the current section if one is active
      if (currentIndex >= 0) {
        window.gsap.set(sectionRefs.current[currentIndex], { zIndex: 0 }); // Lower z-index of the outgoing section
        tl.to(bgRefs.current[currentIndex], { yPercent: -15 * dFactor, filter: 'blur(5px)' }, 0) // Move background out and re-apply blur
          .set(sectionRefs.current[currentIndex], { autoAlpha: 0 }); // Hide the outgoing section
      }

      // Prepare the new section for animation and bring it to the front
      window.gsap.set(sectionRefs.current[index], { autoAlpha: 1, zIndex: 1 });

      // Animate outer and inner elements to slide in from the determined direction
      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        {
          yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor), // Initial Y position based on direction
        },
        {
          yPercent: 0, // Animate to Y=0 (centered)
        },
        0 // Start this animation at the beginning of the timeline
      )
        // Animate the background image of the new section to slide in and unblur
        .fromTo(
            bgRefs.current[index],
            { yPercent: 15 * dFactor, filter: 'blur(5px)' }, // Start blurred and offset
            { yPercent: 0, filter: 'blur(0px)' }, // End sharp and centered
            0 // Start at the beginning of the timeline
        )
        // Animate individual characters of the heading in a staggered, random fashion
        .fromTo(
          headingRefs.current[index]?.querySelectorAll(".char"),
          {
            autoAlpha: 0, // Start invisible
            yPercent: 150 * dFactor, // Start offset vertically
          },
          {
            autoAlpha: 1, // End visible
            yPercent: 0, // End at Y=0
            duration: 1,
            ease: "power2",
            stagger: {
              each: 0.02, // Stagger each character by 0.02 seconds
              from: "random", // Start stagger from a random character
            },
          },
          0.2 // Start this animation slightly after the main section animation begins
        );
      currentIndex = index; // Update the current section index
    }

    // Create a GSAP Observer to detect wheel, touch, and pointer events for navigation
    if (window.Observer) {
      const observer = window.Observer.create({
        type: "wheel,touch,pointer", // Event types to observe
        wheelSpeed: -1, // Adjust wheel sensitivity (negative for natural scroll direction)
        onDown: () => !animating && gotoSection(currentIndex - 1, -1), // Scroll/swipe down goes to previous section
        onUp: () => !animating && gotoSection(currentIndex + 1, 1), // Scroll/swipe up goes to next section
        tolerance: 10, // Minimum scroll/drag distance to trigger a transition
        preventDefault: true, // Prevent default browser scrolling behavior
      });

      // Initial call to display the first section when the component mounts
      gotoSection(0, 1);

      // Cleanup function: disable and kill the observer when the component unmounts
      return () => {
        observer.disable(); // Stop observing events
        observer.kill(); // Clean up the observer instance
      };
    } else {
      console.error("GSAP Observer not available. Full-page scroll animation will not function.");
    }
  }, [scriptsLoaded]); // This effect re-runs only when 'scriptsLoaded' changes from false to true

  return (
    <div className="hero-bg-root font-inter" aria-hidden="true">
      {/* Map through sectionsData to render each full-screen section */}
      {sectionsData.map((section, i) => (
        <section
          key={i}
          className={`hero-section ${["first", "second", "third", "fourth", "fifth"][i]}`}
          ref={(el) => (sectionRefs.current[i] = el)} // Assign ref to the section element
        >
          <div className="outer" ref={(el) => (outerRefs.current[i] = el)}> {/* Outer container for animation */}
            <div className="inner" ref={(el) => (innerRefs.current[i] = el)}> {/* Inner container for animation */}
              <div
                className={`bg ${i === 0 ? " one" : ""}`} // Background div, 'one' class for specific styling if needed
                ref={(el) => (bgRefs.current[i] = el)} // Assign ref to the background div
                style={{
                  // Inline style for background image and gradient overlay
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%), url(${section.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: i === 4 ? "50% 45%" : "center", // Adjust background position for the last image
                }}
              >
                {/* Content wrapper for the heading */}
                <div className="content-wrapper">
                  <h2 className="section-heading" ref={(el) => (headingRefs.current[i] = el)}>
                    {section.heading}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Dot Navigation: Allows direct jumping between sections */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 pointer-events-auto">
        {sectionsData.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentActiveIndex === i ? 'bg-[#FFD700] scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => {
              // Only allow navigation if GSAP libraries are loaded
              if (window.gsap && window.Observer && window.SplitType) {
                let direction = i > currentActiveIndex ? 1 : -1; // Determine scroll direction for animation
                if (i === currentActiveIndex) {
                    return; // Do nothing if clicking the current active dot
                }
                gotoSection(i, direction); // Navigate to the clicked section
              } else {
                console.warn("GSAP libraries not yet loaded. Cannot navigate via dots.");
              }
            }}
            aria-label={`Go to section ${i + 1}`} // Accessibility label
          />
        ))}
      </div>

      {/* Inline styles for core animation functionality and responsiveness */}
      <style>{`
        /* Root container for the hero section, fixed to viewport */
        .hero-bg-root {
          position: fixed;
          inset: 0; /* Top, right, bottom, left all 0 */
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden; /* Prevents scrollbars on the main page */
        }

        /* Individual full-screen sections */
        .hero-section {
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          position: fixed;
          visibility: hidden; /* Hidden by default; GSAP controls visibility during transitions */
          z-index: 0; /* Z-index is dynamically managed by GSAP */
          pointer-events: none; /* Prevents clicks on the section itself, allowing GSAP Observer to work */
        }

        /* Outer and inner divs for the sliding animation effect */
        .outer,
        .inner {
          width: 100vw;
          height: 100vh;
          overflow: hidden; /* Essential for clipping the sliding content */
        }

        /* Background image container */
        .bg {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          /* Background image properties and initial blur are set inline in JSX and by GSAP */
        }
       
        /* Wrapper for the heading, centered on the screen */
        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center; /* Horizontally center content */
            justify-content: center; /* Vertically center content */
            width: 90vw; /* Take 90% of viewport width */
            max-width: 800px; /* Max width for readability */
            padding: 20px; /* Padding around the heading */
            pointer-events: none; /* Ensure clicks pass through to the Observer */
            opacity: 0; /* Initial state for GSAP animation */
            transform: translateY(20px); /* Initial state for GSAP animation */
            box-sizing: border-box; /* Include padding in width/height */
        }

        /* Styles for the section heading */
        .section-heading {
          font-size: clamp(1rem, 5vw, 5rem); /* Responsive font size */
          font-weight: 700; /* Bold font weight */
          text-align: center;
          letter-spacing: 0.2em; /* Spacing between letters */
          margin-right: -0.2em; /* Compensate for letter-spacing */
          color: hsl(0, 0%, 95%); /* Light white color */
          width: 100%; /* Take full width of content-wrapper */
          max-width: 1200px; /* Max width for consistency */
          font-family: "Cormorant Garamond", serif; /* Specific font */
          text-transform: uppercase; /* Uppercase text */
          z-index: 2; /* Ensure it's above the background */
          opacity: 0.9; /* Slightly transparent */
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5); /* Subtle text shadow for readability */
          margin-bottom: 0; /* No content below, so no bottom margin needed */
        }

        /* Styles for SplitType's character overflow */
        .clip-text {
          overflow: hidden;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .section-heading {
            font-size: 2.5rem; /* Adjusted font size for mobile */
            letter-spacing: 0.15em;
            margin-right: -0.15em;
          }
          .content-wrapper {
            padding: 15px;
            max-width: 95vw;
          }
        }

        /* Global font application (assuming Inter is available via Tailwind or other means) */
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;*/