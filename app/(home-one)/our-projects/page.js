"use client"

import BreadCrumb from "@/components/common/Breadcrumb"
import ProjectCard from "@/components/home-one/projects/ProjectCard"
import Link from "next/link"
import Project1Img from "../../../public/images/v1/project1.jpg"
import Project2Img from "../../../public/images/v1/project2.png"
import Project3Img from "../../../public/images/v1/project3.png"
import Project4Img from "../../../public/images/v1/project4.png"
import projectsbanner from "../../../public/images/v1/projectsbanner.jpg"

export default function Projects() {
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
      img: Project1Img,
    },

    // SABIC Projects
    {
      id: crypto.randomUUID(),
      title: "Petrokemya",
      description:
        "A SABIC affiliate producing a wide range of petrochemical products supporting global industries.",
      img: Project2Img,
    },
    {
      id: crypto.randomUUID(),
      title: "Kemya",
      description:
        "A joint venture between SABIC and ExxonMobil specializing in elastomers and petrochemical products.",
      img: Project3Img,
    },
    {
      id: crypto.randomUUID(),
      title: "Hadeed",
      description:
        "SABIC’s steel manufacturing affiliate producing long and flat steel products for infrastructure projects.",
      img: Project4Img,
    },
    {
      id: crypto.randomUUID(),
      title: "Sharq",
      description:
        "One of SABIC’s joint ventures producing ethylene, polyethylene, and ethylene glycol at a massive scale.",
      img: Project1Img,
    },
    {
      id: crypto.randomUUID(),
      title: "Sadaf",
      description:
        "A SABIC joint venture producing styrene and MTBE, strengthening petrochemical capabilities.",
      img: Project2Img,
    },
  ]

  return (
    <>
      <BreadCrumb
        title="Our Projects"
        backgroundImage={projectsbanner.src} // ✅ fixed `.src` typo
      />

      <section className="section bg-light py-5">
        <div className="container">
          <div className="text-center mb-10">
            <h3 className="text-sm uppercase text-blue-600 font-semibold">
              Projects
            </h3>
            <h2 className="display-4 text-dark">
              Delivering Excellence{" "}
              <span className="text-black">
                in Oilfield Equipment & Industrial Solutions
              </span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
