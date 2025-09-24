import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

function Accordion() {
	return (
		<FadeInStaggerTwo
			className="accordion aximo-accordion-wrap"
			id="aximo-accordion"
		>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Understanding Requirements
					</button>
				</h3>
				<div
					id="collapseOne"
					className="accordion-collapse collapse show"
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body">
						We work closely with clients to understand their specific project
						needs, technical specifications, and industry standards.
					</div>
				</div>
			</FadeInStaggerTwoChildren>

			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Sourcing & Stocking
					</button>
				</h3>
				<div
					id="collapseTwo"
					className="accordion-collapse collapse"
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body">
						Our extensive inventory of valves, flanges, fittings, and pipes
						ensures rapid availability of high-quality products for urgent and
						planned requirements.
					</div>
				</div>
			</FadeInStaggerTwoChildren>

			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Delivery & Support
					</button>
				</h3>
				<div
					id="collapseThree"
					className="accordion-collapse collapse"
					data-bs-parent="#aximo-accordion"
				>
					<div className="accordion-body">
						We guarantee timely delivery and provide ongoing support to ensure
						safe, efficient, and reliable operations for our clients worldwide.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
