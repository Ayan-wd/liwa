
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";

function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2 className="display-3 mb-4 mb-md-2 text-center text-black">
						<span className="aximo-title-animation">Our story</span> is built on reliability &amp; trust

					</h2>
					<p className="text-justify">
						Established to serve the oil &amp; gas industry, Liwa Industries has
						grown into a premier supplier of high-quality oilfield equipment.
						With industry-specific expertise and a commitment to excellence,
						we provide valves, flanges, fittings, pipes, and custom alloys to
						energy operations worldwide. Our focus on reliability and rapid
						delivery ensures long-term partnerships with clients across the
						globe.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
