import AboutCounter from "./AboutCounter";
import Video from "./Video";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2 className="display-3 mb-4 mb-md-5 text-left text-black">
								<span className="aximo-title-animation text-black">
									Your Partners in
								</span>{" "}
								Global Energy Supplies
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								Liwa Industrial Equipment FZ LLC is a premier supplier of
								high-quality oilfield equipment. With deep industry knowledge,
								we provide reliable products and cutting-edge solutions to
								ensure efficient and safe oil &amp; gas operations worldwide.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
