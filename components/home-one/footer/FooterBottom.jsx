import Image from "next/image"
import Link from "next/link"
import LogoWhiteImg from "../../../public/images/logo/logo-dark.png"

function FooterBottom() {
  const year = new Date().getFullYear()

  return (
    <div className="row align-items-center py-4 border-top border-secondary">
      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
        <Link href="/" className="d-inline-flex align-items-center text-black">
          {/* <Image
            src={LogoWhiteImg || "/placeholder.svg"}
            alt="Liwa Industries logo"
            width={180}
            height={60}
            className="img-fluid"
            priority
          /> */}
          LIWA INDUSTRIES.
        </Link>
      </div>
      <div className="col-md-6 text-center text-md-end">
        <p className="mb-0 small text-dark">
          &copy; {year} Liwa Industries. All rights reserved.
        </p>
      </div>
    </div>

  )
}

export default FooterBottom
