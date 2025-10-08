import BreadCrumb from "@/components/common/Breadcrumb"
import TwoColumnFaq from "@/components/contact/TwoColumnFaq"
import Services from "@/components/home-one/services"
import WhyChooseUs from "@/components/home-one/why-choose-us"
import { getAllServices } from "@/lib/services"
import servicesbanner from "../../../public/images/service/servicesbanner.jpg"

const mkIconFromClass = (className) =>
  function Icon() {
    return <i className={className} aria-hidden="true" />
  }

const services = getAllServices().map((s) => ({
  id: s.slug, // stable key
  title: s.title,
  description: s.excerpt,
  icon: mkIconFromClass(s.icon || "icon-industry"),
  slug: s.slug,
}))

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Products" backgroundImage={servicesbanner.src} />
      <Services services={services} />
      <WhyChooseUs />
      <TwoColumnFaq />
    </>
  )
}

export default ServicePage
