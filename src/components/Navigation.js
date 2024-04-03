import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { BsPersonBadge } from "react-icons/bs";

function Navigation() {
  // siteMode, siteModeToggle, handleNavLinkClick

  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [siteMode, setSiteMode] = useState("pages");

  const siteModeToggle = () => {
    setSiteMode(siteMode === "pages" ? "scroll" : "pages");
  };

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
    <div className="thumb-nav-container">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to={siteMode === "pages" ? "/about" : "#about-section"}
              onClick={(event) => {
                handleNavLinkClick(event);
            
              }}
              isActive={() => location.pathname === "/about"}
            >
              <PiPersonArmsSpreadFill />
              <br></br>
              About
            </NavLink>
          </li>
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to="/projects"
              onClick={handleNavLinkClick}
              isActive={() => location.pathname === "/projects"}
            >
              <FaCode />
              <br></br>
              Projects
            </NavLink>
          </li>
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to={siteMode === "pages" ? "/contact" : "#contact-section"}
              onClick={(event) => {
                handleNavLinkClick(event);
               
              }}
              isActive={() => location.pathname === "/contact"}
            >
              <BsPersonBadge />
              <br></br>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
