import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { MdDeveloperMode } from "react-icons/md";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.scrollY || window.pageYOffset
  );
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 5);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, headerVisible]);

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header-container">
      <LeftNav />

      <nav className={`header-nav ${headerVisible ? "visible" : "hidden"}`}>
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
              <strong>About</strong>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleNavLinkClick}>
              <br />
              <strong>Projects</strong>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
              <br />
              <strong>Contact</strong>
            </NavLink>
          </li>
        </ul>
      </nav>

      <RightNav />
    </div>
  );
}

export default Header;
