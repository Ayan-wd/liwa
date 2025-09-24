import Image from "next/image"
import Link from "next/link"
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg"

function ServiceCard({ service: { title, description, icon: Icon, slug } }) {
  return (
	  <div className="aximo-iconbox-wrap flex flex-col h-full">
		<Link
		  href={slug ? `/services/${slug}` : `/single-service`}
		  className="aximo-icon inline-block"
		>
      {/* Top content */}
          <Image
            src={ArrowRightImg || "/placeholder.svg"}
            alt="arrow right"
            className="w-6 h-6"
          />
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
      <div className="mt-auto flex justify-end pt-4">
      </div>
        </Link>
    </div>
  )
}

export default ServiceCard
