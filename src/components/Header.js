import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
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
    </div>
  );
}
export default Header;
