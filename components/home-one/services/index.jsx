import FadeInStagger from "@/components/animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<section className="section aximo-section-padding4">
			<div className="container">
				{/* Section title */}
				<div className="display-5 mb-4 mb-md-5 text-center text-black">
					<h3 className="text-sm uppercase text-blue-600 font-semibold">
						Our Products
					</h3>
					<h2 className="display-3 mb-4 mb-md-2 text-center text-black">
						We deliver reliable{" "}
						<span className="aximo-title-animation">industrial solutions</span>
					</h2>
					<p className="mt-3 text-muted mx-auto col-lg-8">
						At Liwa Industries, we specialize in high-quality oilfield equipment and industrial products. From valves and flanges to pipes and fittings, we provide the tools that keep energy operations running safely and efficiently.
					</p>
				</div>

				{/* Service grid */}
				<div className="row g-4">
					{services.map((item, index) => (
						<FadeInStagger
							key={item.slug}
							index={index}
							className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex"
						>
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>

			</div>
		</section>
	);
}

export default Services;
