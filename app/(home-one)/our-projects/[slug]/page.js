import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import BreadCrumb from '@/components/common/Breadcrumb';
import projectsbanner from '../../../../public/images/v1/projectsbanner.jpg';
export async function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Our Projects`,
    description: project.description?.slice(0, 160) || undefined,
    openGraph: {
      title: `${project.title} | Our Projects`,
      description: project.description?.slice(0, 160) || undefined,
      images: [project.img?.src || projectsbanner.src],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Our Projects`,
      description: project.description?.slice(0, 160) || undefined,
    },
  };
}

export default async function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const related = getAllProjects().filter((p) => p.slug !== project.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.title,
    description: project.description,
    url: `/our-projects/${project.slug}`,
    mainEntity: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      image: project.img?.src || null,
    },
  };

  return (
    <main >
      <BreadCrumb title={project.title} backgroundImage={projectsbanner.src} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-14 mt-5">
        <h3 className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
          Projects
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Delivering Excellence{" "}
          <span className="text-blue-600">
            in Oilfield & Industrial Solutions
          </span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
          Our portfolio showcases world-class engineering and project execution across oil, gas, and petrochemical industries.
        </p>
      </div>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12">
            <div className="rounded overflow-hidden shadow-sm mb-4" style={{ height: 420, position: 'relative' }}>
              <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
              <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)' }}>
                <h1 className="h3 mb-1">{project.title}</h1>
                <p className="mb-0 small">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <article>
              {/* Optional meta row */}
              <div className="d-flex flex-wrap gap-3 mb-3">
                {project.client && <div className="small text-muted">Client: <strong className="text-dark">{project.client}</strong></div>}
                {project.location && <div className="small text-muted">Location: <strong className="text-dark">{project.location}</strong></div>}
                {project.duration && <div className="small text-muted">Duration: <strong className="text-dark">{project.duration}</strong></div>}
              </div>

              {/* Main content (description + optional sections) */}
              <section className="mb-4">
                <h2 className="h5 mb-2 text-black">Project Overview</h2>
                <p className="text-muted">{project.description}</p>
              </section>

              {project.sections?.map((sec, i) => (
                <section key={i} className="mb-4">
                  <h3 className="h6 mb-2">{sec.heading}</h3>
                  {sec.body && <p className="text-muted">{sec.body}</p>}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b, idx) => (
                        <li key={idx} className="text-muted">{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

           
            </article>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h4 className="h6 mb-3 text-black">Related Projects</h4>
                <ul className="list-unstyled mb-0">
                  {related.map((r) => (
                    <li key={r.slug} className="mb-2">
                      <a href={`/our-projects/${r.slug}`} className="text-decoration-none">{r.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
