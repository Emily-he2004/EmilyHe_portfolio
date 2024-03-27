import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { MdDeveloperMode } from "react-icons/md";

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [clicked, setClicked] = useState(false);

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

  const handleNavLinkClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const lis = document.querySelectorAll(".nav-menu li");
    lis.forEach((li) => {
      li.classList.remove("clicked");
    });

    setClicked(true);
    event.target.closest("li").classList.add("clicked");
  };

  return (
    <div className="header-container">
      {!isContactPage && <LeftNav />}

      <nav
        className={`header-nav ${headerVisible ? "visible" : "hidden"} 
        
        `}
      >
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
          <li className={clicked ? "clicked" : ""}>
            <NavLink
              to="/about"
              onClick={handleNavLinkClick}
              isActive={() => location.pathname === "/about"}
            >
              <h3>About</h3>
            </NavLink>
          </li>
          <li className={clicked ? "clicked" : ""}>
            <NavLink
              to="/projects"
              onClick={handleNavLinkClick}
              isActive={() => location.pathname === "/projects"}
            >
              <h3>Projects</h3>
            </NavLink>
          </li>
          <li className={clicked ? "clicked" : ""}>
            <NavLink
              to="/contact"
              onClick={handleNavLinkClick}
              isActive={() => location.pathname === "/contact"}
            >
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
