import { NavLink } from "react-router-dom";

import { PiPersonArmsSpreadFill } from "react-icons/pi";

import { VscGitPullRequestCreate } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";

import { AiFillMessage } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import { BsPersonBadge } from "react-icons/bs";
import { BsPersonBadgeFill } from "react-icons/bs";

function Navigation() {
  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="thumb-nav-container">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              <PiPersonArmsSpreadFill />
              <br></br>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleNavLinkClick}>
              <FaCode />
              <br></br>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
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
