import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { MdDeveloperMode } from "react-icons/md";

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [prevScrollPos, setPrevScrollPos] = useState(
    window.scrollY || window.pageYOffset
  );
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 5
      );
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
      {!isContactPage && <LeftNav />}

      <nav className={`header-nav ${headerVisible ? "visible" : "hidden"}`}>
        <ul className="home-menu">
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              <h3>
                {/* <MdDeveloperMode /> */}
                Emily.Dev
              </h3>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-menu">
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              <h3>About</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleNavLinkClick}>
              <h3>Projects</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
              <h3>Contact</h3>
            </NavLink>
          </li>
        </ul>
      </nav>

      {!isContactPage && <RightNav />}
    </div>
  );
}

export default Header;
