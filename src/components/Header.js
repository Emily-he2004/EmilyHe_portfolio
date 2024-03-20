import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { MdDeveloperMode } from "react-icons/md";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.scrollY || window.pageYOffset
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header-container">
      <LeftNav />

      <nav className={`header-nav ${visible ? "visible" : "hidden"}`}>
        <ul className="home-menu">
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              <h4>
                {/* <MdDeveloperMode /> */}
                Emily.Dev
              </h4>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-menu">
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              <br />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleNavLinkClick}>
              <br />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
              <br />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <RightNav />
    </div>
  );
}

export default Header;
