import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { handleNavLinkClick } from "../utilities/toolbelt";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

import { VscGitPullRequestCreate } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

import { AiFillMessage } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import { BsPersonBadge } from "react-icons/bs";
import { BsPersonBadgeFill } from "react-icons/bs";

function Navigation() {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="thumb-nav-container">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li className={clicked ? "clicked" : ""}>
            <NavLink
              to="/about"
              onClick={handleNavLinkClick}
              isActive={() => location.pathname === "/about"}
            >
              <PiPersonArmsSpreadFill />
              <br></br>
              About
            </NavLink>
          </li>
          <li className={clicked ? "clicked" : ""}>
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
          <li className={clicked ? "clicked" : ""}>
            <NavLink
              to="/contact"
              onClick={handleNavLinkClick}
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
