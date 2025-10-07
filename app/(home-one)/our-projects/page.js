"use client"

import BreadCrumb from "@/components/common/Breadcrumb"
import ProjectCard from "@/components/home-one/projects/ProjectCard"
import Image from "next/image"
import { motion } from "framer-motion"

import Project1Img from "../../../public/images/v1/projects/wasit-gas-plant.jpg"
import Project2Img from "../../../public/images/v1/projects/fadihi-gas-plant.jpg"
import Project3Img from "../../../public/images/v1/projects/sadara.jpg"
import Project4Img from "../../../public/images/v1/projects/manifa.jpeg"
import Project5Img from "../../../public/images/v1/projects/karan.jpg"
import Project6Img from "../../../public/images/v1/projects/petrokemya.jpeg"
import Project7Img from "../../../public/images/v1/projects/sabic.jpg"
import Project8Img from "../../../public/images/v1/projects/hadeed.jpg"
import Project9Img from "../../../public/images/v1/projects/sharq.bmp"
import Project10Img from "../../../public/images/v1/projects/sadaf.bmp"
import projectsbanner from "../../../public/images/v1/projectsbanner.jpg"

export default function ProjectsPage() {
  const projectsData = [
    {
      id: 1,
      title: "Wasit Gas Plant",
      description:
        "A mega gas processing facility by Saudi Aramco, providing clean natural gas for domestic and industrial use.",
      img: Project1Img,
    },
    {
      id: 2,
      title: "Fadhili Gas Plant",
      description:
        "A state-of-the-art gas plant enhancing Saudi Arabia’s energy sustainability and industrial development.",
      img: Project2Img,
    },
    {
      id: 3,
      title: "Sadara Petrochemical Facility",
      description:
        "One of the world’s largest integrated chemical complexes, a joint venture between Saudi Aramco and Dow.",
      img: Project3Img,
    },
    {
      id: 4,
      title: "Manifa Project",
      description:
        "A pioneering offshore oilfield project built with innovative causeway and drilling technologies.",
      img: Project4Img,
    },
    {
      id: 5,
      title: "Karan Gas Plant",
      description:
        "The first non-associated gas field development project by Saudi Aramco, boosting domestic gas supply.",
      img: Project5Img,
    },
    {
      id: 6,
      title: "Petrokemya",
      description:
        "A SABIC affiliate producing a wide range of petrochemical products supporting global industries.",
      img: Project6Img,
    },
    {
      id: 7,
      title: "Kemya",
      description:
        "A joint venture between SABIC and ExxonMobil specializing in elastomers and petrochemical products.",
      img: Project7Img,
    },
    {
      id: 8,
      title: "Hadeed",
      description:
        "SABIC’s steel manufacturing affiliate producing long and flat steel products for infrastructure projects.",
      img: Project8Img,
    },
    {
      id: 9,
      title: "Sharq",
      description:
        "One of SABIC’s joint ventures producing ethylene, polyethylene, and ethylene glycol at a massive scale.",
      img: Project9Img,
    },
    {
      id: 10,
      title: "Sadaf",
      description:
        "A SABIC joint venture producing styrene and MTBE, strengthening petrochemical capabilities.",
      img: Project10Img,
    },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb
        title="Our Projects"
        backgroundImage={projectsbanner.src}
      />

      {/* Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
              Projects
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Delivering Excellence{" "}
              <span className="text-blue-600">
                in Oilfield & Industrial Solutions
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
              Our portfolio showcases world-class engineering and project execution across oil, gas, and petrochemical industries.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
