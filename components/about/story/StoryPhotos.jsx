import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Story4Img from "../../../public/images/about/story4.png";

function StoryPhotos() {
	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-12">
				<div className="aximo-story-thumb">
					<Image
						src={Story4Img}
						alt="Story4Img"
						className="w-120 h-auto object-cover rounded-lg"
						sizes="50vw"
					/>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
