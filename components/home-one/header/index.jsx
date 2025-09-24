"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import "../../../globals.css";

function Header() {
  return (
    <header
      className="site-header aximo-header-section aximo-header1 dark-bg"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <HeaderLogo />

          <div className="menu-block-wrapper">
            <DesktopNav>
              <NavItem url="/" exact="true" className="nav-link custom-nav-link">
                Home
              </NavItem>
              <NavItem url="about-us" className="nav-link custom-nav-link">
                About Us
              </NavItem>
              <NavItem url="services" className="nav-link custom-nav-link">
                Services
              </NavItem>
              <NavItem url="contact-us" className="nav-link custom-nav-link">
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
