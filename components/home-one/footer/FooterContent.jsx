import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

function FooterContent() {
	return (
		<div className="row gy-4 pb-5 border-bottom border-secondary-subtle">
			{/* About */}
			<div className="col-12 col-md-6 col-lg-3">
				<h2 className="h5 text-light fw-semibold mb-3 text-balance">
					Let’s build success together
				</h2>
				<p className="text-white small mb-0">
					Liwa Industries is your trusted partner in global energy supplies.
					We deliver high-quality oilfield equipment, custom alloys, and
					industrial solutions with excellence and reliability.
				</p>
			</div>

			{/* Quick Links */}
			<div className="col-12 col-md-6 col-lg-3">
				<h6 className="text-uppercase small fw-semibold mb-3 text-white">
					Quick Links
				</h6>
				<ul className="list-unstyled mb-0 small">
					<li className="mb-2">
						<Link href="/" className="text-decoration-none text-white fw-medium">
							Home
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/about-us" className="text-decoration-none text-white fw-medium">
							About
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/services" className="text-decoration-none text-white fw-medium">
							Services
						</Link>
					</li>
					<li>
						<Link href="/contact-us" className="text-decoration-none text-white fw-medium">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>

			{/* Contact */}
			<div className="col-12 col-md-6 col-lg-3">
				<h6 className="text-white text-uppercase text-secondary small fw-semibold mb-3">
					Contact
				</h6>
				<ul className="list-unstyled mb-0 small">
					<li className="mb-2 d-flex align-items-center gap-2">
						<Phone size={16} className="text-secondary text-white" />
						<a href="tel:+971543931009" className="text-decoration-none text-white fw-medium">
							+971 54 393 1009
						</a>
					</li>
					<li className="mb-2 d-flex align-items-center gap-2">
						<Phone size={16} className="text-secondary text-white" />
						<a href="tel:+971501681993" className="text-decoration-none text-white fw-medium">
							+971 50 168 1993
						</a>
					</li>
					<li className="mb-2 d-flex align-items-center gap-2">
						<Mail size={16} className="text-secondary text-white" />
						<a href="mailto:sales@liwaindustries.com" className="text-decoration-none text-white fw-medium">
							sales@liwaindustries.com
						</a>
					</li>
					<li className="d-flex align-items-center gap-2">
						<Mail size={16} className="text-secondarytext-white" />
						<a href="mailto:admin@liwaindustries.com" className="text-decoration-none text-white fw-medium">
							admin@liwaindustries.com
						</a>
					</li>
				</ul>
			</div>

			{/* Visit Us + Socials */}
			<div className="col-12 col-md-6 col-lg-3">
				<h6 className="text-white text-uppercase text-secondary small fw-semibold mb-3">
					Visit Us
				</h6>
				<p className="text-white-50 small mb-3 d-flex gap-2">
					<MapPin size={16} className="text-secondary mt-1" />
					<span className="text-white">
						Office 510, Mai Tower, Al Nahda - Dubai, UAE <br />
						F0AM0781 Al Hamra Industrial Zone FZE - RAK - UAE
					</span>
				</p>
				<div className="d-flex gap-2">
					<a
						href="https://facebook.com/"
						target="_blank"
						rel="noreferrer"
						className="rounded-circle border border-light text-white d-flex align-items-center justify-content-center"
						style={{ width: "36px", height: "36px" }}
					>
						<Facebook size={18} />
						<span className="visually-hidden">Facebook</span>
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer"
						className="rounded-circle border border-light text-white d-flex align-items-center justify-content-center"
						style={{ width: "36px", height: "36px" }}
					>
						<Instagram size={18} />
						<span className="visually-hidden">Instagram</span>
					</a>
				</div>

			</div>
		</div>
	)
}

export default FooterContent
