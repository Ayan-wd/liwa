import CustomAlloys from "../public/images/service/servicesdetail/CUSTOM-GRADES -ALLOYS.jpg";
import FlangesFittings from "../public/images/service/servicesdetail/FLANGES-SPECTACLES.jpg";
import Procurement from "../public/images/service/servicesdetail/INDUSTRY-SPECIFICEXPERTISE.jpg";
import IndustrialValves from "../public/images/service/servicesdetail/industrialvalves.jpg";
import BwForged from "../public/images/service/servicesdetail/BW-FORGED-FITTINGS.jpg";
import Olets from "../public/images/service/servicesdetail/O’LETS.jpg";
import Compressionfitting from "../public/images/service/servicesdetail/COMPRESSION-FITTINGS.jpg";
import PipeCasing from "../public/images/service/servicesdetail/PIPES-CASING.jpg";
export const services = [
  {
    slug: "industrial-valves",
    title: "Industrial Valves",
    excerpt:
      "High-quality valves engineered for safe and reliable flow control in oil, gas, and industrial applications.",
    icon: "icon-valve",
    heroImage: IndustrialValves,
    sections: [
      {
        heading: "Overview",
        body: "Our range of industrial valves ensures efficiency and reliability under demanding operating conditions.",
      },
      {
        heading: "Products",
        bullets: [
          "Gate, Globe, Check, Ball",
          "Butterfly & Extended Body Valves",
          "Cryogenic Valves",
        ],
      },
      {
        heading: "Applications",
        bullets: ["Oil & Gas", "Petrochemical", "Industrial Utilities"],
      },
    ],
    specs: { leadTime: "Stock + scheduled", regions: ["Global"] },
  },
  {
    slug: "flanges-spectacles",
    title: "Flanges & Spectacles",
    excerpt:
      "Comprehensive flange solutions and spectacle blinds built to international standards for critical pipeline integrity.",
    icon: "icon-flange",
    heroImage: FlangesFittings,
    sections: [
      {
        heading: "Overview",
        body: "Precision-engineered flanges and spectacle blinds ensure leak-proof, durable connections across oilfield operations.",
      },
      {
        heading: "Products",
        bullets: [
          "Weld Neck & Long Weld Neck",
          "Slip-On, Blind, Threaded, Lap Joint",
          "Orifice Flanges & Spectacle Blinds",
        ],
      },
      {
        heading: "Standards",
        bullets: ["ASME", "API", "DIN/EN"],
      },
    ],
    specs: { leadTime: "Stock + custom", regions: ["Global"] },
  },
  {
    slug: "bw-forged-fittings",
    title: "BW & Forged Fittings",
    excerpt:
      "Durable butt-weld and forged fittings designed for secure and long-lasting pipeline connections.",
    icon: "icon-pipe-connection",
    heroImage: BwForged,
    sections: [
      {
        heading: "Overview",
        body: "Fittings manufactured to global standards, supporting high-pressure and high-temperature applications.",
      },
      {
        heading: "Products",
        bullets: [
          "Elbows (LR/SR), Tees, Reducers, Caps",
          "Pipe Nipples, Plugs",
        ],
      },
    ],
    specs: { leadTime: "2–4 weeks", regions: ["GCC", "MENA", "Global"] },
  },
  {
    slug: "olets",
    title: "O’lets",
    excerpt:
      "Versatile branch connection fittings ensuring strength, safety, and reliability in piping systems.",
    icon: "icon-branch",
    heroImage: Olets,
    sections: [
      {
        heading: "Overview",
        body: "We supply a wide range of O’lets engineered to support piping flexibility and safety.",
      },
      {
        heading: "Products",
        bullets: [
          "Weld O’let, Sock O’let, Thread O’let",
          "Nipp O’let, Elbow O’let, Latro O’let",
          "Braz O’let, Nipp O’Flange",
        ],
      },
    ],
    specs: { leadTime: "Stock + custom", regions: ["Global"] },
  },
  {
    slug: "pipes-casing",
    title: "Pipes & Casing",
    excerpt:
      "Seamless and welded pipes & casings manufactured to global standards for oilfield and industrial applications.",
    icon: "icon-pipe",
    heroImage: PipeCasing,
    sections: [
      {
        heading: "Overview",
        body: "Pipes and casing products built for durability and performance across energy and industrial projects.",
      },
      {
        heading: "Specifications",
        bullets: [
          "Seamless Pipes & Tubes",
          "ERW, EFW, SAW, LSAW",
        ],
      },
    ],
    specs: { leadTime: "Stock + scheduled", regions: ["Global"] },
  },
  {
    slug: "compression-fittings",
    title: "Compression Fittings",
    excerpt:
      "Reliable compression fittings delivering secure, leak-proof connections for piping and tubing systems.",
    icon: "icon-fitting",
    heroImage: Compressionfitting,
    sections: [
      {
        heading: "Overview",
        body: "High-performance compression fittings designed for ease of installation and leak-proof service.",
      },
      {
        heading: "Products",
        bullets: [
          "Male & Union Elbows",
          "Flare Unions & Nuts",
          "Studs, Union Tees & Plugs",
        ],
      },
    ],
    specs: { leadTime: "1–2 weeks", regions: ["GCC", "MENA"] },
  },
  {
    slug: "custom-alloys",
    title: "Custom Grades & Alloys",
    excerpt:
      "Specialized materials including stainless steel, duplex, super duplex, and nickel alloys tailored for harsh applications.",
    icon: "icon-alloy",
    heroImage: CustomAlloys,
    sections: [
      {
        heading: "Overview",
        body: "We provide custom alloy solutions compliant with ASTM and international standards.",
      },
      {
        heading: "Grades",
        bullets: [
          "Stainless Steel (316, 304, 310, 321, 347, 904L)",
          "Duplex & Super Duplex (F51, F55, S31803, S32760)",
          "Nickel Alloys (Monel, Inconel, Hastelloy, Alloy 20)",
          "Carbon & Low Alloy Steel",
        ],
      },
    ],
    specs: { leadTime: "Made-to-order", regions: ["Global"] },
  },
  {
    slug: "expertise",
    title: "Industry Expertise & Stocking",
    excerpt:
      "Rapid delivery, industry-specific expertise, and reliable stockholding to support global projects efficiently.",
    icon: "icon-globe",
    heroImage: Procurement,
    sections: [
      {
        heading: "Overview",
        body: "With extensive stock and industry know-how, we ensure timely supply and project support worldwide.",
      },
      {
        heading: "Benefits",
        bullets: [
          "Industry-specific expertise",
          "Stocking & rapid delivery",
          "Compliance with international standards",
        ],
      },
    ],
    specs: { leadTime: "Project-based & stocked", regions: ["Global"] },
  },
];


// Convenience helpers
export function getAllServices() {
  return services;
}

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
