import Project1Img from "../public/images/v1/projects/wasit-gas-plant.jpg";
import Project2Img from "../public/images/v1/projects/fadihi-gas-plant.jpg";
import Project3Img from "../public/images/v1/projects/sadara.jpg";
import Project4Img from "../public/images/v1/projects/manifa.jpeg";
import Project5Img from "../public/images/v1/projects/karan.jpg";
import Project6Img from "../public/images/v1/projects/petrokemya.jpeg";
import Project7Img from "../public/images/v1/projects/sabic.jpg";
import Project8Img from "../public/images/v1/projects/hadeed.jpg";
import Project9Img from "../public/images/v1/projects/sharq.bmp";
import Project10Img from "../public/images/v1/projects/sadaf.bmp";

export const projects = [
  {
    slug: "wasit-gas-plant",
    title: "Wasit Gas Plant",
    description:
      "A mega gas processing facility by Saudi Aramco, providing clean natural gas for domestic and industrial use.",
    img: Project1Img,
  },
  {
    slug: "fadhili-gas-plant",
    title: "Fadhili Gas Plant",
    description:
      "A state-of-the-art gas plant enhancing Saudi Arabia’s energy sustainability and industrial development.",
    img: Project2Img,
  },
  {
    slug: "sadara-petrochemical-facility",
    title: "Sadara Petrochemical Facility",
    description:
      "One of the world’s largest integrated chemical complexes, a joint venture between Saudi Aramco and Dow.",
    img: Project3Img,
  },
  {
    slug: "manifa-project",
    title: "Manifa Project",
    description:
      "A pioneering offshore oilfield project built with innovative causeway and drilling technologies.",
    img: Project4Img,
  },
  {
    slug: "karan-gas-plant",
    title: "Karan Gas Plant",
    description:
      "The first non-associated gas field development project by Saudi Aramco, boosting domestic gas supply.",
    img: Project5Img,
  },
  {
    slug: "petrokemya",
    title: "Petrokemya",
    description:
      "A SABIC affiliate producing a wide range of petrochemical products supporting global industries.",
    img: Project6Img,
  },
  {
    slug: "kemya",
    title: "Kemya",
    description:
      "A joint venture between SABIC and ExxonMobil specializing in elastomers and petrochemical products.",
    img: Project7Img,
  },
  {
    slug: "hadeed",
    title: "Hadeed",
    description:
      "SABIC’s steel manufacturing affiliate producing long and flat steel products for infrastructure projects.",
    img: Project8Img,
  },
  {
    slug: "sharq",
    title: "Sharq",
    description:
      "One of SABIC’s joint ventures producing ethylene, polyethylene, and ethylene glycol at a massive scale.",
    img: Project9Img,
  },
  {
    slug: "sadaf",
    title: "Sadaf",
    description:
      "A SABIC joint venture producing styrene and MTBE, strengthening petrochemical capabilities.",
    img: Project10Img,
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
