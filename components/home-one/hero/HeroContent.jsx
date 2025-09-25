import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Link from "next/link";

function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Powering
					</span>{" "}
					Global Energy
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{`Liwa Industrial Equipment FZ LLC is a premier supplier of high-quality oilfield equipment. With a deep understanding of the industry’s demands, we specialize in delivering reliable products and cutting-edge solutions to support efficient and safe oil & gas operations worldwide`}
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Get instant quote <i className="icon-call"></i>
				</Link>


			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
