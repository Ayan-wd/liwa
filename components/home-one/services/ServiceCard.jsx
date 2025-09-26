import Link from "next/link";
import { ArrowRight } from "lucide-react";
import"../../../globals.css";

function ServiceCard({ service: { title, description, icon: Icon, slug } }) {
  return (
    <div className="card service-card border border-2 border-dark rounded-4 h-100 bg-transparent">
      <Link
        href={slug ? `/services/${slug}` : `/single-service`}
        className="d-flex flex-column h-100 text-decoration-none p-4"
      >

        {/* Title & Description */}
        <div className="flex-grow-1">
          <h5 className="fw-bold text-dark position-relative service-title">
            {title}
          </h5>
          <p className="text-muted small mt-3 mb-0 text-truncate-3">
            {description}
          </p>
        </div>

        {/* Arrow CTA */}
        <div className="mt-4 d-flex justify-content-end align-items-center">
          <ArrowRight size={26} strokeWidth={2} className="text-dark arrow-icon" />
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
