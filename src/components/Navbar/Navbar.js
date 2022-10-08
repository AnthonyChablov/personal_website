import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes , FaBars} from "react-icons/fa";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <NavLink exact to="/" className="nav__logo">
            Anthony Chablov
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          <div className="navbar__icon-wrapper" onClick={handleClick}>
            {click ? <FaTimes className="icon"/> : <FaBars className="icon"/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;