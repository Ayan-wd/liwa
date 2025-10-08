"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import BreadCrumb from "@/components/common/Breadcrumb"
import servicesbanner from "../../../../public/images/service/servicesbanner.jpg"
import { getAllServices } from "@/lib/services"

export default function ServiceDetailClient({ service }) {
  const excerpt = service.excerpt || "Learn more about this service."
  const heroSrc = service.heroImage || "/placeholder.svg"

  return (
    <>
      <BreadCrumb title="Products" backgroundImage={servicesbanner.src} />

      <main className="py-5" style={{ marginTop: "96px" }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb bg-transparent p-0 mb-0 small text-uppercase">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none text-secondary">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/services" className="text-decoration-none text-secondary">
                  Products
                </Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* Hero Section (Image Left + Content Right) */}
          <section className="row align-items-center g-4 mb-5">
            {/* Left Image */}
            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-4 overflow-hidden shadow-sm"
              >
                <Image
                  src={heroSrc}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="img-fluid object-cover w-100 h-100"
                />
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="col-12 col-lg-6">
              <motion.h1
                className="display-5  mb-3 text-black"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {service.title}
              </motion.h1>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {excerpt}
              </motion.p>

              {/* Quick Facts */}
              {service.specs && (
                <motion.div
                  className="p-4 rounded-4 bg-light shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h5 className="text-uppercase text-black mb-3">
                    Quick Facts
                  </h5>
                  <dl className="row mb-0 small">
                    {service.specs.leadTime && (
                      <>
                        <dt className="col-6 text-muted">Lead Time</dt>
                        <dd className="col-6 fw-semibold">{service.specs.leadTime}</dd>
                      </>
                    )}
                    {service.specs.regions && (
                      <>
                        <dt className="col-6 text-muted">Regions</dt>
                        <dd className="col-6 fw-semibold">{service.specs.regions.join(", ")}</dd>
                      </>
                    )}
                    {service.specs.priceFrom && (
                      <>
                        <dt className="col-6 text-muted">Starting</dt>
                        <dd className="col-6 fw-semibold">{service.specs.priceFrom}</dd>
                      </>
                    )}
                  </dl>
                </motion.div>
              )}
            </div>
          </section>

          {/* Service Details (Plain Points, No Accordion) */}
          <section className="mb-5">
            {service.sections?.length ? (
              service.sections.map((sec, i) => (
                <motion.div
                  key={i}
                  className="mb-4 p-4 rounded-4 border bg-light shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3 className="h5  text-black mb-3">{sec.heading}</h3>
                  {sec.body && <p className="text-muted mb-3">{sec.body}</p>}
                  {sec.bullets && (
                    <ul className="text-muted ms-3">
                      {sec.bullets.map((b, idx) => (
                        <li key={idx} className="mb-2">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-muted text-center">
                No detailed content available for this service yet.
              </p>
            )}
          </section>

          {/* Related Services */}
          <div className="mt-5">
            <h3 className=" mb-4 text-black text-center">
              Related Products
            </h3>
            <div className="row  text-justify ">
              {getAllServices()
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s) => (
                  <div key={s.slug} className="col-12 col-md-4 mb-4">
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-decoration-none"
                    >
                      <div className="card border-0 shadow-sm h-100 rounded-4 text-center p-4 hover-shadow">
                        <div className="mb-3">
                          <i className={`${s.icon || "icon-industry"} fs-1 text-primary`} />
                        </div>
                        <h5 className="fw-bold text-dark">{s.title}</h5>
                        <p className="text-muted small">{s.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
