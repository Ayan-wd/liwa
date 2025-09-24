import FadeInStagger from "@/components/animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						We deliver reliable{" "}
						<span className="aximo-title-animation">
							industrial solutions
						</span>
					</h2>
					<p>
						At Liwa Industries, we specialize in high-quality oilfield
						equipment and industrial products. From valves and flanges to
						pipes and fittings, we provide the tools that keep energy
						operations running safely and efficiently.
					</p>
				</div>

				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger
								key={item.slug}
								index={index}
								className="col-lg-3 col-md-6 d-flex"
							>
								<div className="w-100 d-flex">
									<ServiceCard
										service={item}
										className="d-flex flex-column justify-between h-100 w-100"
									/>
								</div>
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
