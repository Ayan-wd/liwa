"use client";
import { use, useEffect, useState } from "react";
import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import { getAllServices } from "@/lib/services";
import Preloader from "@/components/common/Preloader"; // 👈 import preloader

const mkIconFromClass = (className) =>
  function Icon() {
    return <i className={className} aria-hidden="true" />;
  };

const services = getAllServices().map((s) => ({
  id: s.slug, // stable id for keys
  title: s.title,
  description: s.excerpt,
  icon: mkIconFromClass(s.icon || "icon-industry"),
  slug: s.slug,
}));

export default function HomeOne() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page load delay (can also rely on Preloader internal timer)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 1s delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // 👈 show preloader first
  }

  return (
    <>
      <Hero />
      <Services services={services} />
      <About />
      <Projects />
      <WhyChooseUs />
      <AutoSlider />
    </>
  );
}
