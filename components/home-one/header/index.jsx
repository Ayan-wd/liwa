"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
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
      className="site-header aximo-header-section aximo-header shadow-sm fixed-top"
      id="sticky-menu"
      style={{
        backgroundColor: "#EDE8D0", // same as after scroll
      }}
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <HeaderLogo />
          <div className="menu-block-wrapper">
            <DesktopNav>
              <NavItem url="/" exact="true" className={navLinkClass}>
                Home
              </NavItem>
              <NavItem url="about-us" className={navLinkClass}>
                About Us
              </NavItem>
              <NavItem url="services" className={navLinkClass}>
                Services
              </NavItem>
              <NavItem url="our-projects" className={navLinkClass}>
                Projects
              </NavItem>
              <NavItem url="contact-us" className={navLinkClass}>
                Contact Us
              </NavItem>
            </DesktopNav>
          </div>

          <HeaderButton />
          <MobileNavbar menuItemsData={menuItemsData} title="LIWA" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
