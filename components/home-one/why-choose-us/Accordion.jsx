"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Accordion() {
	const [open, setOpen] = useState("collapseOne");

	const handleToggle = (id) => {
		setOpen(open === id ? "" : id);
	};

	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			{/* Item 1 */}
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header d-flex justify-content-between align-items-center">
					<button
						className="display-10 mb-4 mb-md-1 text-black d-flex align-items-center justify-content-between w-100"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						onClick={() => handleToggle("collapseOne")}
					>
						<span>01/ Requirement Analysis</span>
						<ChevronDown
							size={18}
							className={`ms-2 transition-transform ${open === "collapseOne" ? "rotate-180" : ""}`}
						/>
					</button>
				</h3>
				<div
					id="collapseOne"
					className={`accordion-collapse collapse ${open === "collapseOne" ? "show" : ""}`}
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body text-white text-justify">
						We work closely with clients to understand their specific project
						needs, technical specifications, and industry standards.
					</div>
				</div>
			</FadeInStaggerTwoChildren>

			{/* Item 2 */}
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header d-flex justify-content-between align-items-center">
					<button
						className="display-10 mb-4 mb-md-1 text-black d-flex align-items-center justify-content-between w-100"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						onClick={() => handleToggle("collapseTwo")}
					>
						<span>02/ Sourcing & Stocking</span>
						<ChevronDown
							size={18}
							className={`ms-2 transition-transform ${open === "collapseTwo" ? "rotate-180" : ""}`}
						/>
					</button>
				</h3>
				<div
					id="collapseTwo"
					className={`accordion-collapse collapse ${open === "collapseTwo" ? "show" : ""}`}
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body text-white text-justify">
						Our extensive inventory of valves, flanges, fittings, and pipes
						ensures rapid availability of high-quality products for urgent and
						planned requirements.
					</div>
				</div>
			</FadeInStaggerTwoChildren>

			{/* Item 3 */}
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header d-flex justify-content-between align-items-center">
					<button
						className="display-10 mb-4 mb-md-1 text-black d-flex align-items-center justify-content-between w-100"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						onClick={() => handleToggle("collapseThree")}
					>
						<span>03/ Delivery & Support</span>
						<ChevronDown
							size={18}
							className={`ms-2 transition-transform ${open === "collapseThree" ? "rotate-180" : ""}`}
						/>
					</button>
				</h3>
				<div
					id="collapseThree"
					className={`accordion-collapse collapse ${open === "collapseThree" ? "show" : ""}`}
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body text-white text-justify">
						We guarantee timely delivery and provide ongoing support to ensure
						safe, efficient, and reliable operations for our clients worldwide.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
