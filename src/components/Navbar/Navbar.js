import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes , FaBars} from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar ">
        <div className="navbar__wrapper container">
          <div className="navbar__container ">
            <span>
              <NavLink 
                exact to="/home" 
                className="nav__logo"
              >Anthony Chablov
              </NavLink>
            </span>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  
                  exact
                  to="/projects"
                  
                  className="nav-links"
                  onClick={handleClick}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  
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
        </div>
      </nav>
    </>
  );
}

export default NavBar;