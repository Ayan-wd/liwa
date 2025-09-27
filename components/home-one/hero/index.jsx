import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb.jpg";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "@/components/animation/FadeInStaggerTwo";
import Link from "next/link";

function Hero() {
  return (
    <section className="aximo-hero-section position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroThumbImg}
        alt="Hero Background"
        fill
        priority
        className="object-fit-cover position-absolute top-0 start-0 w-100 h-100 z-0"
      />

      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      {/* Content */}
      <div className="container position-relative z-2">
        <FadeInStaggerTwo>
          <div className="display-5 mb-4 mb-md-5 text-left text-white">
            <div className="col-12 col-md-10 col-lg-8">
              {/* Heading */}
              <FadeInStaggerTwoChildren>
                <h1 className="display-5 mb-4 mb-md-4 text-left text-white fw-bold ">
                  <span className="aximo-title-animation text-accent">Powering</span>{" "}
                  Global Energy
                </h1>
              </FadeInStaggerTwoChildren>

              {/* Paragraph */}
              <FadeInStaggerTwoChildren>
                <p className="display-5 mb-4 mb-md-2 text-left text-white fs-4">
                  Liwa Industrial Equipment FZ LLC is a premier supplier of
                  high-quality oilfield equipment. With a deep understanding of
                  the industry’s demands, we specialize in delivering reliable
                  products and cutting-edge solutions to support efficient and
                  safe oil & gas operations worldwide.
                </p>
              </FadeInStaggerTwoChildren>

              {/* CTA Button */}
              <FadeInStaggerTwoChildren>
                <Link
                  className="aximo-call-btn d-inline-block mt-4 mt-md-5 px-6 py-3 rounded-2xl bg-accent text-black fw-semibold shadow-lg hover:bg-accent/90 transition"
                  href="/contact-us"
                >
                  Get instant quote <i className="icon-call text-black ms-2"></i>
                </Link>
              </FadeInStaggerTwoChildren>
            </div>
          </div>
        </FadeInStaggerTwo>
      </div>
    </section>
  );
}

export default Hero;
