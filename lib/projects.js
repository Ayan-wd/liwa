import Project1Img from "../public/images/v1/projects/wasit-gas-plant.jpg";
import Project2Img from "../public/images/v1/projects/fadihi-gas-plant.jpg";
import Project3Img from "../public/images/v1/projects/sadara.jpg";
import Project4Img from "../public/images/v1/projects/manifa.jpg";
import Project5Img from "../public/images/v1/projects/karan.jpg";
import Project6Img from "../public/images/v1/projects/petrokemya.jpg";
import Project7Img from "../public/images/v1/projects/sabic.jpg";
import Project8Img from "../public/images/v1/projects/hadeed.jpg";
import Project9Img from "../public/images/v1/projects/sharq.jpg";
import Project10Img from "../public/images/v1/projects/sadaf.jpg";

export const projects = [
  {
    slug: "wasit-gas-plant",
    title: "Wasit Gas Plant",
    description:
      "A mega gas processing facility by Saudi Aramco, providing clean natural gas for domestic and industrial use. The plant integrates advanced gas treatment technologies to process non-associated gas from offshore fields. It plays a key role in meeting the kingdom’s growing energy demands while reducing environmental emissions.",
    img: Project1Img,
  },
  {
    slug: "fadhili-gas-plant",
    title: "Fadhili Gas Plant",
    description:
      "A state-of-the-art gas plant enhancing Saudi Arabia’s energy sustainability and industrial development. Designed to process non-associated gas from the Hasbah and Khursaniyah fields, it supports power generation and desalination plants. Its cutting-edge systems ensure efficiency, safety, and reduced carbon footprint.",
    img: Project2Img,
  },
  {
    slug: "sadara-petrochemical-facility",
    title: "Sadara Petrochemical Facility",
    description:
      "One of the world’s largest integrated chemical complexes, a joint venture between Saudi Aramco and Dow. The facility produces over three million metric tons of diversified chemical products annually. It represents a cornerstone of Saudi Arabia’s downstream industrial expansion, fostering innovation and job creation.",
    img: Project3Img,
  },
  {
    slug: "manifa-project",
    title: "Manifa Project",
    description:
      "A pioneering offshore oilfield project built with innovative causeway and drilling technologies. The project includes 27 drilling islands connected by 41 kilometers of causeways, designed to preserve marine ecosystems. Manifa demonstrates Saudi Aramco’s engineering excellence and commitment to sustainable offshore development.",
    img: Project4Img,
  },
  {
    slug: "karan-gas-plant",
    title: "Karan Gas Plant",
    description:
      "The first non-associated gas field development project by Saudi Aramco, boosting domestic gas supply. It produces over 1.8 billion standard cubic feet of gas per day, supporting power generation and water desalination. The project emphasizes efficiency, innovation, and long-term energy security for Saudi Arabia.",
    img: Project5Img,
  },
  {
    slug: "petrokemya",
    title: "Petrokemya",
    description:
      "A SABIC affiliate producing a wide range of petrochemical products supporting global industries. Its operations include the production of ethylene, propylene, and polymers essential to everyday materials. With decades of expertise, Petrokemya continues to expand capacity while maintaining strong sustainability practices.",
    img: Project6Img,
  },
  {
    slug: "kemya",
    title: "Kemya",
    description:
      "A joint venture between SABIC and ExxonMobil specializing in elastomers and petrochemical products. The facility produces synthetic rubber, thermoplastic resins, and related materials for industrial applications. It supports the region’s growing manufacturing sector and enhances Saudi Arabia’s polymer innovation capabilities.",
    img: Project7Img,
  },
  {
    slug: "hadeed",
    title: "Hadeed",
    description:
      "SABIC’s steel manufacturing affiliate producing long and flat steel products for infrastructure projects. Its advanced production facilities serve the construction, energy, and transportation sectors. Hadeed continues to strengthen Saudi Arabia’s industrial backbone through innovation and sustainable steelmaking.",
    img: Project8Img,
  },
  {
    slug: "sharq",
    title: "Sharq",
    description:
      "One of SABIC’s joint ventures producing ethylene, polyethylene, and ethylene glycol at a massive scale. The complex is equipped with world-class technologies that ensure high production efficiency and product quality. Sharq contributes significantly to the global plastics and chemicals market while promoting sustainable manufacturing.",
    img: Project9Img,
  },
  {
    slug: "sadaf",
    title: "Sadaf",
    description:
      "A SABIC joint venture producing styrene and MTBE, strengthening petrochemical capabilities. The facility plays a vital role in producing key feedstocks for plastics, rubbers, and fuels. With its reliable operations and global exports, Sadaf reinforces Saudi Arabia’s reputation as a leader in the petrochemical sector.",
    img: Project10Img,
  },
];


export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
