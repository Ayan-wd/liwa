import Image from "next/image";
import Link from "next/link";


function ProjectCard({ project: { title, description, img, slug } }) {
  const href = slug ? `/our-projects/${slug}` : `/our-projects`;
  return (
    <div className="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
      <div className="position-relative" style={{ aspectRatio: "16/10" }}>
        <Image
          src={img}
          alt={title}
          className="img-fluid w-100 h-100"
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <Link href={href} className="stretched-link">
          <span className="sr-only">View project {title}</span>
        </Link>
      </div>
      <div className="card-body p-3 d-flex flex-column justify-content-between">
        <div>
          <h5 className="fw-semibold text-dark mb-2">{title}</h5>
          <p className="text-muted small mb-0 text-justify text-truncate-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
