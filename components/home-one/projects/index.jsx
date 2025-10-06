"use client";

import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../public/images/v1/projects/wasit-gas-plant.jpg";
import Project2Img from "../../../public/images/v1/projects/fadihi-gas-plant.jpg";
import Project3Img from "../../../public/images/v1/projects/sadara.jpg";
import Project4Img from "../../../public/images/v1/projects/manifa.jpeg";
import Project5Img from "../../../public/images/v1/projects/karan.jpg";
import Project6Img from "../../../public/images/v1/projects/petrokemya.jpeg";
import Project7Img from "../../../public/images/v1/projects/sabic.jpg";
import Project8Img from "../../../public/images/v1/projects/hadeed.jpg";
import Project9Img from "../../../public/images/v1/projects/sharq.bmp";
import Project10Img from "../../../public/images/v1/projects/sadaf.bmp";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

// ✅ Updated Project Data
const projectsData = [
  // Saudi Aramco Projects
  {
    id: crypto.randomUUID(),
    title: "Wasit Gas Plant",
    description:
      "A mega gas processing facility by Saudi Aramco, providing clean natural gas for domestic and industrial use.",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Fadhili Gas Plant",
    description:
      "A state-of-the-art gas plant enhancing Saudi Arabia’s energy sustainability and industrial development.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Sadara Petrochemical Facility",
    description:
      "One of the world’s largest integrated chemical complexes, a joint venture between Saudi Aramco and Dow.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Manifa Project",
    description:
      "A pioneering offshore oilfield project built with innovative causeway and drilling technologies.",
    img: Project4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Karan Gas Plant",
    description:
      "The first non-associated gas field development project by Saudi Aramco, boosting domestic gas supply.",
    img: Project5Img,
  },

  // SABIC Projects
  {
    id: crypto.randomUUID(),
    title: "Petrokemya",
    description:
      "A SABIC affiliate producing a wide range of petrochemical products supporting global industries.",
    img: Project6Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Kemya",
    description:
      "A joint venture between SABIC and ExxonMobil specializing in elastomers and petrochemical products.",
    img: Project7Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Hadeed",
    description:
      "SABIC’s steel manufacturing affiliate producing long and flat steel products for infrastructure projects.",
    img: Project8Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Sharq",
    description:
      "One of SABIC’s joint ventures producing ethylene, polyethylene, and ethylene glycol at a massive scale.",
    img: Project9Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Sadaf",
    description:
      "A SABIC joint venture producing styrene and MTBE, strengthening petrochemical capabilities.",
    img: Project10Img,
  },
];

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
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <div className="text-center mt-5">
            <Link
              href="/our-projects"
              className="btn btn-primary rounded-pill px-4 py-2"
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
