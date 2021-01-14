/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/Navbar.css";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img className="logo" src={logo} alt="logo" /> */}
          <h2>AZ</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon  icon={faBars} style={{color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-70} className="nav-link" href="#">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-60} className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="timeline" offset={-50} className="nav-link" href="#">
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-40} className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" offset={-40} className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
