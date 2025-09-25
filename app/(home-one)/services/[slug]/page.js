import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllServices, getServiceBySlug } from "@/lib/services"

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: `${service.title} | Services`,
    description: service.excerpt,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return notFound()

  return (
    <main className="py-5" style={{ marginTop: "96px" }}>
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="accent-bg" href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="accent-bg" href="/services">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        <header className="mb-4">
          <h1 className="h2 mb-2">{service.title}</h1>
          <p className="text-muted m-0">{service.excerpt}</p>
        </header>

        <div className="mb-4 mx-auto" style={{ maxWidth: "960px" }}>
          <Image
            src={service.heroImage || "/placeholder.svg"}
            alt={`${service.title} banner`}
            width={960}
            height={360}
            className="img-fluid rounded"
            priority
            style={{ width: "100%", height: "auto", maxHeight: "360px", objectFit: "cover" }}
            sizes="(min-width: 992px) 960px, 100vw"
          />
        </div>

        <div className="row g-5">
          <div className="col-12 col-lg-8">
            {service.sections?.map((sec, i) => (
              <section className="mb-4" key={i}>
                <h2 className="h4 mb-2">{sec.heading}</h2>
                {sec.body ? <p className="text-body">{sec.body}</p> : null}
                {sec.bullets ? (
                  <ul className="list-unstyled ms-3">
                    {sec.bullets.map((b, idx) => (
                      <li key={idx} className="mb-1 d-flex">
                        <span className="me-2">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3">Quick Facts</h3>
                <dl className="row mb-0">
                  {service.specs?.leadTime ? (
                    <>
                      <dt className="col-5 text-muted">Lead Time</dt>
                      <dd className="col-7">{service.specs.leadTime}</dd>
                    </>
                  ) : null}
                  {service.specs?.regions ? (
                    <>
                      <dt className="col-5 text-muted">Regions</dt>
                      <dd className="col-7">{service.specs.regions.join(", ")}</dd>
                    </>
                  ) : null}
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
