import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";
import aboutusbanner from "../../../public/images/about/aboutusbanner.jpg";
import CallToActionSection from "@/components/common/CTA";

function AboutUs() {
	return (
		<>
			<BreadCrumb
				title="About Us"
				backgroundImage={aboutusbanner.src}
			/>
			<About />
			<Story />
			<CallToActionSection />


		</>
	);
}

export default AboutUs;
