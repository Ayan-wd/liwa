import Link from "next/link";

function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <Link
        href="/contact-us"
        className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-lg "
      >
        Contact Us
      </Link>
    </div>
  );
}

export default HeaderButton;
