import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { SiteModeProvider, ToggleSiteMode } from "../context/SiteMode";

import { MdDeveloperMode } from "react-icons/md";
import { TbCodeCircle2 } from "react-icons/tb";
import { TbCodeCircle } from "react-icons/tb";

function Header() {
 
  // siteMode, siteModeToggle, handleNavLinkClick
  const { siteMode, setSiteMode } = useContext(ToggleSiteMode);
  console.log('SET SITE MODE CONTEXT' ,siteMode)

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [clicked, setClicked] = useState(false);

  const siteModeToggle = () => {
    setSiteMode(siteMode === "pages" ? "scroll" : "pages");
  };

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
            <NavLink
              to={siteMode === "pages" ? "/" : "/#home-page"}
              onClick={(event) => {
                handleNavLinkClick(event);
                
              }}
            >
              <h3>
                {/* <MdDeveloperMode /> */}
                {/* <TbCodeCircle /> */}
                {/* <TbCodeCircle2 /> */}
                Emily.Dev
              </h3>
            </NavLink>
          </li>
        </ul>

        <div className="site-toggler-container">
          Change to...<br></br>
          <NavLink
            to={siteMode === "pages" ? "/" : "#home-page"}
            onClick={
              siteModeToggle
            }
          >
            {siteMode === "pages" ? "Scroll mode" : "Pages mode"}
          </NavLink>
        </div>

        <ul className="nav-menu">
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to={siteMode === "pages" ? "/about" : "/#about-section"}
              onClick={(event) => {
                handleNavLinkClick(event);
               
              }}
              isActive={() => location.pathname === "/about"}
            >
              <h3>About</h3>
            </NavLink>
          </li>
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to="/projects"
              onClick={(event) => {
                handleNavLinkClick(event);
               
              }}
              isActive={() => location.pathname === "/projects"}
            >
              <h3>Projects</h3>
            </NavLink>
          </li>
          <li
          // className={clicked ? "clicked" : ""}
          >
            <NavLink
              to={siteMode === "pages" ? "/contact" : "/#contact-section"}
              onClick={(event) => {
                handleNavLinkClick(event);
               
              }}
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
