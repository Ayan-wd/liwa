import BreadCrumb from "@/components/common/Breadcrumb";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";
import { getAllServices } from "@/lib/services";
import servicesbanner from "../../../public/images/service/servicesbanner.jpg";
import CallToActionSection from "@/components/common/CTA";

const services = getAllServices().map((s) => ({
  id: s.slug,
  title: s.title,
  description: s.excerpt,
  // pass a simple string (CSS class) instead of a function/component
  icon: s.icon || "icon-industry",
  slug: s.slug,
  heroImage: s.heroImage,
}));

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Products" backgroundImage={servicesbanner.src} />
      <Services services={services} />
      <WhyChooseUs />
      <TwoColumnFaq />
            <CallToActionSection/>
    </>
  );
}

export default ServicePage;
