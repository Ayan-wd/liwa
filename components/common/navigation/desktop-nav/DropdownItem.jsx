/* eslint-disable react/prop-types */

import Link from "next/link";
function DropdownItem({ dropdown, children, title, url }) {
	// Ensure single leading slash for urls and fallback to '/'
	const urlFormated = !url ? "/" : url.startsWith("/") ? url : `/${url}`;
	return dropdown ? (
		<li className="sub-menu--item nav-item-has-children">
			<a href="#" data-menu-get="h3" className="drop-trigger">
				{title} <i className="fas fa-angle-down"></i>
			</a>
			{children}
		</li>
	) : (
		<li className="sub-menu--item">
			<Link href={urlFormated}>
				<span className="menu-item-text">{children}</span>
			</Link>
		</li>
	);
}

export default DropdownItem;
