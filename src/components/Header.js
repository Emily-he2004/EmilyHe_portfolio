import { NavLink } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "./RightNav";

function Header() {
  return (
    <div className="header-container">
      <LeftNav />

      <nav className="header-nav">
        <ul className="home-menu">
          <li>
            <NavLink to="/">
              <br></br>
              Emily.Dev
            </NavLink>
          </li>
        </ul>
        <ul className="nav-menu">
          <li>
            <NavLink to="/about">
              <br></br>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <br></br>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <br></br>
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
