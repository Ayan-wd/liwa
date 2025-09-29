import Image from "next/image";
import Link from "next/link";


function ProjectCard({ project: { title, description, img } }) {
  return (
    <div className="card border-0 shadow-sm rounded-3 overflow-hidden h-100">
      <div className="position-relative">
        <Image
          src={img}
          alt={title}
          className="img-fluid w-100"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <Link href="/our-projects" className="text-decoration-none">
            <h5 className="fw-semibold text-dark">{title}</h5>
          </Link>
          <p className="text-muted small mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
