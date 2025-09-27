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
          <Link href="/single-portfolio" className="text-decoration-none">
            <h5 className="fw-semibold text-dark">{title}</h5>
          </Link>
          <p className="text-muted small mb-0">{description}</p>
        </div>
        <div className="mt-3">
          <Link
            href="/single-portfolio"
            className="btn btn-outline-dark rounded-circle d-inline-flex align-items-center justify-content-center"
            style={{ width: "42px", height: "42px" }}
          >
            <svg
              width="28"
              height="20"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
