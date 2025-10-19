/* eslint-disable react/prop-types */
import Link from "next/link";

function NavItem({ dropdown, title, children, url = "", className = "" }) {
  // Ensure the url has a single leading slash and empty -> '/'
  const urlFormated = url === "" ? "/" : url.startsWith("/") ? url : `/${url}`;

  return dropdown ? (
    <li className="nav-item nav-item-has-children">
      <a href="#" className={`nav-link-item drop-trigger ${className}`}>
        {title} <i className="fas fa-angle-down"></i>
      </a>
      {children}
    </li>
  ) : (
    <li className="nav-item">
      <Link href={urlFormated} className={`nav-link-item ${className}`}>
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
