import BreadCrumb from "@/components/common/Breadcrumb"
import TwoColumnFaq from "@/components/contact/TwoColumnFaq"
import AutoSlider from "@/components/home-one/auto-slider"
import Services from "@/components/home-one/services"
import WhyChooseUs from "@/components/home-one/why-choose-us"
import { getAllServices } from "@/lib/services"

const mkIconFromClass = (className) =>
  function Icon() {
    return <i className={className} aria-hidden="true" />
  }

const services = getAllServices().map((s) => ({
  id: s.slug, // stable id for keys
  title: s.title,
  description: s.excerpt,
  icon: mkIconFromClass(s.icon || "icon-industry"),
  slug: s.slug,
}))

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services services={services} />
      <WhyChooseUs />
      <TwoColumnFaq />
    </>
  )
}

export default ServicePage
