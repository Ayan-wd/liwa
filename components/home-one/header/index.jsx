"use client";
import { useEffect, useState } from "react";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import "../../../globals.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Bootstrap text utilities
  const navLinkClass = `nav-link ${scrolled ? "text-dark" : "text-white"}`;

  return (
    <header
      className={`site-header aximo-header-section aximo-header ${
        scrolled ? "shadow-sm" : ""
      } fixed-top`}
      id="sticky-menu"
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        transition: "background-color 0.3s ease",
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
