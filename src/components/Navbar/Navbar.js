import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes , FaBars} from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [show,setShow] = useState(true);
 /*  const controlNavbar = ()=>{
    window.scrollY > 100 ? setShow(false): setShow(true);
  }
  useEffect(()=>{
    window.addEventListener("scroll", controlNavbar)
    return ()=>{
      window.removeEventListener('scroll', controlNavbar)
    }
  },[]) */
  return (
    <>
      <nav className={` ${show && 'navbar'}`}>
        <div className="navbar__wrapper container">
          <div className="navbar__content ">
            <span>
              <NavLink 
                exact to="/home" 
                className="nav__logo"
              >Anthony Chablov
              </NavLink>
            </span>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item ">
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
                  to="/resume"
                  
                  className="nav-links"
                  onClick={handleClick}
                >
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact
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