"use client";
import Link from "next/link";

export default function BreadCrumb({ title, backgroundImage }) {
	return (
		<section
			className="relative flex items-center text-white overflow-hidden min-h-[550px] sm:min-h-[650px]"
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "550px",
			}}
		>
			<div
				className="position-absolute top-0 start-0 w-100 h-100"
				style={{ backgroundColor: "rgba(0,0,0,0.6)" }} // 50% black
			></div>


			{/* 🔹 Content */}
			<div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
				<div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 w-full animate-fadeIn">
					{/* Left Side - Title */}
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-left drop-shadow-lg">
						{title}
					</h1>

					{/* Right Side - Breadcrumb Navigation */}
					<nav aria-label="breadcrumb">
						<ul className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-sm sm:text-base font-medium">
							<li>
								<Link
									href="/"
									className="text-gray-200 hover:text-white transition-colors duration-300"
								>
									Home
								</Link>
							</li>
							<li className="text-gray-400">/</li>
							<li className="text-gray-300" aria-current="page">
								{title}
							</li>
						</ul>
					</nav>
				</div>
			</div>

			{/* 🔹 Bottom Fade Effect */}
			<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
		</section>
	);
}
