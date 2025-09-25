import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb.jpg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Link from "next/link";

function Hero() {
	return (
		<section className="aximo-hero-section relative h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<Image
				src={HeroThumbImg}
				alt="Hero Background"
				fill
				priority
				className="object-cover object-center absolute inset-0 z-0"
			/>

			{/* Dark Overlay */}
			<div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

			{/* Content */}
			<div className="container relative z-20">
				<FadeInStaggerTwo className="aximo-hero-content text-left text-white max-w-3xl mx-auto">
					<FadeInStaggerTwoChildren>
						<h1 className="text-5xl font-bold leading-tight">
							<span className="aximo-title-animation text-accent ">
								Powering
							</span>{" "}
							Global Energy
						</h1>
					</FadeInStaggerTwoChildren>

					<FadeInStaggerTwoChildren>
						<p className="mt-6 text-lg">
							Liwa Industrial Equipment FZ LLC is a premier supplier of
							high-quality oilfield equipment. With a deep understanding of
							the industry’s demands, we specialize in delivering reliable
							products and cutting-edge solutions to support efficient and
							safe oil & gas operations worldwide.
						</p>
					</FadeInStaggerTwoChildren>

					<FadeInStaggerTwoChildren>
						<Link
							className="aximo-call-btn inline-block mt-8 px-6 py-3 rounded-2xl bg-accent text-black font-semibold shadow-lg hover:bg-accent/90 transition"
							href="/contact-us"
						>
							Get instant quote <i className="icon-call text-black"></i>
						</Link>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</section>
	);
}

export default Hero;
