import Link from "next/link"
import { ArrowRight } from "lucide-react"

function ServiceCard({ service: { title, description, icon: Icon, slug } }) {
  return (
    <div className="aximo-iconbox-wrap flex flex-col h-full">
      <Link
        href={slug ? `/services/${slug}` : `/single-service`}
        className="aximo-icon inline-block d-flex flex-column h-100 p-3   "
      >
        {/* Top content */}
        <div>
          <div className="aximo-iconbox-icon">
            <Icon size={40} strokeWidth={1.5} />
          </div>
          <div className="aximo-iconbox-data">
            <h3>{title}</h3>
            <p className="text-black">{description}</p>
          </div>
        </div>

        {/* Arrow at the bottom right */}
        <div className="mt-auto d-flex justify-content-start">
        <ArrowRight size={24} strokeWidth={2} className="text-dark" />
      </div>
      </Link>
    </div>
  )
}

export default ServiceCard
