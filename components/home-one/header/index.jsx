"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import { getAllServices } from "@/lib/services";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import "../../../globals.css";

function Header() {
  // ✅ Always dark text (same as after scroll)
  const navLinkClass = "nav-link text-dark";

  return (
    <header
      className="site-header aximo-header-section aximo-header shadow-sm fixed-top bg-white"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          {/* <HeaderLogo/> */}
          <HeaderLogo />
          {/* Desktop nav: visible on large screens */}
          <div className="d-none d-lg-block me-auto">
            <DesktopNav>
              <NavItem url="/" exact="true" className={navLinkClass}>
                Home
              </NavItem>
              <NavItem url="/about-us" className={navLinkClass}>
                About Us
              </NavItem>
              {/* Products dropdown populated from services data */}
              <NavItem dropdown title="Products" className={navLinkClass}>
                <ul className="sub-menu">
                  {getAllServices().map((s) => (
                    <DropdownItem key={s.slug} url={`/services/${s.slug}`}>
                      {s.title}
                    </DropdownItem>
                  ))}
                </ul>
              </NavItem>
              <NavItem url="/our-projects" className={navLinkClass}>
                Projects
              </NavItem>
              <NavItem url="/contact-us" className={navLinkClass}>
                Contact Us
              </NavItem>
            </DesktopNav>
          </div>

          {/* Header action button (hide on small screens) */}
          <div className="d-none d-lg-block">
            <HeaderButton />
          </div>

          {/* Mobile nav: visible on small screens */}
          <div className="d-lg-none">
            <MobileNavbar menuItemsData={menuItemsData} title="LIWA" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
