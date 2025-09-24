import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/logo-white.png";

function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link href="/" className="d-inline-block">
        <Image
          src={Logo}
          alt="Logo"
          className="light-version-logo header-logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
