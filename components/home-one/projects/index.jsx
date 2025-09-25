"use client";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../public/images/v1/project1.png";
import Project2Img from "../../../public/images/v1/project2.png";
import Project3Img from "../../../public/images/v1/project3.png";
import Project4Img from "../../../public/images/v1/project4.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Industrial Valves",
		description:
			"High-performance valves including Gate, Ball, Check, Butterfly, and Cryogenic valves for safe and efficient oil & gas operations.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Flanges & Spectacle Blinds",
		description:
			"A complete range of flanges such as Weld Neck, Slip-On, Blind, and Spectacle Blinds built for durability and reliability.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Pipes & Casing",
		description:
			"Seamless, ERW, EFW, SAW, and LSAW pipes & casings that deliver strength and performance in demanding environments.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Fittings & O’lets",
		description:
			"BW & Forged Fittings (Elbows, Tees, Reducers) and O’lets (Sock, Weld, Thread, Nipp, Braz) for precise industrial connections.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Compression Fittings",
		description:
			"Engineered compression fittings including elbows, unions, flare nuts, studs, and tees for secure installations.",
		img: Project1Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};

function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center dark">
					<h2>
						Delivering Excellence 
						<span className="aximo-title-animation">
							in Oilfield Equipment & Industrial Solutions
						</span>
					</h2>
				</div>
			</div>

			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
