import Link from "next/link";

function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <Link
        href="/contact-us"
        className="aximo-default-btn pill aximo-header-btn "
      >
        Contact Us
      </Link>
    </div>
  );
}

export default HeaderButton;
