import { NavLink } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function Navigation() {
  return (
    <div className="thumb-nav-container">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li>
            <NavLink to="/about">
              {/* <FaMapPin className="map-icon" /> */}
              <br></br>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              {/* <MdOutlineHealthAndSafety className="safety-icon" /> */}
              <br></br>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {/* <RiFirstAidKitFill className="help-center-icon" /> */}
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
