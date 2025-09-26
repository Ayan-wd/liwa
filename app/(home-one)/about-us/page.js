import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";
import aboutusbanner from "../../../public/images/about/aboutusbanner.jpg";

function AboutUs() {
	return (
		<>
			<BreadCrumb
				title="About Us"
				backgroundImage={aboutusbanner.src}
			/>
			<About />
			<Story />

		</>
	);
}

export default AboutUs;
