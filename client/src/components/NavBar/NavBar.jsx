import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';



const NavBar = () => {
  return (
    
    <nav>
      <div class="nav-wrapper">
        <a href="/#" class="brand-logo">
          <img src={logo} alt="logo" width="60" height="60"/>
        </a>
        <a href="/#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects" || window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  

  );
};

export default NavBar;
