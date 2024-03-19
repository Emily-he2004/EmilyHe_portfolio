import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY || window.pageYOffset);
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

  return (
    <div className="header-container">
      <LeftNav />

      <nav className={`header-nav ${visible ? "visible" : "hidden"}`}>
        <ul className="home-menu">
          <li>
            <NavLink to="/">
              <br />
              Emily.Dev
            </NavLink>
          </li>
        </ul>
        <ul className="nav-menu">
          <li>
            <NavLink to="/about">
              <br />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <br />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
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
