'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1574213183659-c3b6df87d99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkdWJhaSUyMHBlbnRob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MDQyNjEyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Penthouses",
    subtitle: "Premium Downtown Living",
    description: "Experience unparalleled luxury in Dubai's most prestigious locations"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721170627991-78447ce43637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkdWJhaSUyMGFwYXJ0bWVudCUyMGJhbGNvbnklMjB2aWV3fGVufDF8fHx8MTc2MDQyNjEzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sky-High Views",
    subtitle: "Breathtaking Panoramas",
    description: "Wake up to stunning views of Dubai's iconic skyline every day"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1735320865438-2dda05da6d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBkdWJhaXxlbnwxfHx8fDE3NjA0MTkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Private Villas",
    subtitle: "Exclusive Waterfront Estates",
    description: "Indulge in privacy and sophistication with your own paradise"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1690623837469-611f752ca00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmluYSUyMGx1eHVyeSUyMHByb3BlcnR5fGVufDF8fHx8MTc2MDQyNjEzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Marina Living",
    subtitle: "Waterfront Elegance",
    description: "Live the yacht lifestyle with prestigious marina properties"
  }
];

export function PremiumSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            rotateY: { duration: 0.7 },
          }}
          className="absolute inset-0"
          style={{ perspective: "1000px" }}
        >
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content with 3D Animation */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
                >
                  <span className="text-accent">{slides[currentIndex].subtitle}</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                >
                  {slides[currentIndex].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-xl text-white/90 mb-8"
                >
                  {slides[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Link href="/properties">
                    <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 hover:scale-105 transition-all">
                      Explore Properties
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-accent w-12" 
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-white/40"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
