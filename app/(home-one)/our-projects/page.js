import BreadCrumb from "@/components/common/Breadcrumb";
import projectsbanner from "../../../public/images/v1/projectsbanner.jpg";

function AboutUs() {
    return (
        <>
            <BreadCrumb
                title="Our Projetcs"
                backgroundImage={projectsbanner.src}
            />
            
        </>
    );
}

export default AboutUs;
