"use client";

import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/lib/projects";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const projectsData = getAllProjects();

const swiperSettings = {
  spaceBetween: 24,
  direction: "horizontal",
  pagination: { clickable: true },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: { slidesPerView: 1 },
    900: { slidesPerView: 2 },
    1600: { slidesPerView: 3.5 },
  },
};

function Projects() {
  return (
    <section className="section bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-sm uppercase text-blue-600 font-semibold">
            Our Projects
          </h3>
          <h2 className="display-4 text-dark">
            Delivering Excellence{" "}
            <span className="text-black">in Oilfield Equipment & Industrial Solutions</span>
          </h2>
        </div>


        <Swiper {...swiperSettings} className="aximo-project-slider">
          {projectsData.map((project) => (
            <SwiperSlide key={project.slug || project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <div className="text-center mt-5 ">
            <Link
              href="/our-projects"
              className="btn btn-primary rounded-pill px-4 py-2 "
            >
              View All Projects
            </Link>
          </div>
        </Swiper>


      </div>
    </section>
  );
}

export default Projects;
