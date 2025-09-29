"use client";
import About from "@/components/home-one/about";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import { getAllServices } from "@/lib/services";

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
  return (
    <>
      <Hero />
      <Services services={services} />
      <About />
      <Projects />
      <WhyChooseUs />
    </>
  );
}
