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
    openGraph: {
      title: `${service.title} | Liwa Industries`,
      description: service.excerpt,
      images: [service.heroImage?.src || "/placeholder.svg"],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Liwa Industries`,
      description: service.excerpt,
    },
  }
}

export default async function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return null
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    url: `/services/${service.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailClient service={service} />
    </>
  )
}
