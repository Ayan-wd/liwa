"use client";

import CallToActionSection from "@/components/common/CTA";
import About from "@/components/home-one/about";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import { getAllServices } from "@/lib/services";

const services = getAllServices().map((s) => ({
  id: s.slug,
  title: s.title,
  description: s.excerpt,
  icon: s.icon || "icon-industry",
  slug: s.slug,
  heroImage: s.heroImage,
}));

export default function HomeOne() {
  return (
    <>
      <Hero />
      <Services services={services} />
      <About />
      <Projects />
      <WhyChooseUs />
      <CallToActionSection/>
    </>
  );
}
