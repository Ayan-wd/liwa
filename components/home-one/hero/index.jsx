"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../../../public/images/v1/hero-thumb.jpg";
import hero1 from "../../../public/images/v1/banner2.jpg";
import hero2 from "../../../public/images/v1/banner3.jpg";


const slides = [
  {
    id: 1,
    image: hero.src,
    tagline: "Trusted Oil & Gas Solutions",
    title: "Powering Global Energy",
    desc: "Liwa Industrial Equipment FZ LLC delivers reliable oilfield equipment and solutions to power global energy operations.",
    cta: "Get Instant Quote",
  },
  {
    id: 2,
    image: hero1.src,
    tagline: "Global Reach, Local Support",
    title: "Supplying Excellence Worldwide",
    desc: "With a global footprint, we provide premium equipment and dedicated support to the oil & gas industry.",
    cta: "Explore Services",
  },
  {
    id: 3,
    image: hero2.src,
    tagline: "Innovation & Reliability",
    title: "Engineering the Future of Energy",
    desc: "Our innovative products and solutions ensure efficiency, safety, and sustainability in energy operations.",
    cta: "Learn More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative grid min-h-screen place-content-center overflow-hidden text-gray-200 mt-3">
      {/* Background image slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }} // 50% black
      ></div>

      {/* Stars overlay */}
      <div className="absolute inset-0 z-10 opacity-40">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.span
          key={slide.tagline}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-2 inline-block rounded-full bg-gray-700/50 px-4 py-1.5 text-sm tracking-wide"
        >
          {slide.tagline}
        </motion.span>

        <motion.h1
          key={slide.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={slide.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg"
        >
          {slide.desc}
        </motion.p>

        <motion.a
          key={slide.cta}
          href="/contact-us"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-lg transition-colors hover:bg-blue-700"
        >
          {slide.cta}
          <FiArrowRight className="transition-transform group-hover:-rotate-45" />
        </motion.a>

      </div>
    </section>
  );
}
