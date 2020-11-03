import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="/#" class="brand-logo">
          <img src="./logo.jpg" alt="logo" width="20" height="20"/>
        </a>
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
              About
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
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
