import { getAllServices, getServiceBySlug } from "@/lib/services"
import ServiceDetailClient from "./ServiceDetailClient"

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: `${service.title} | Liwa Industries`,
    description: service.excerpt,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return null
  return <ServiceDetailClient service={service} />
}
