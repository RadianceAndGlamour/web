// import React from "react";
import { propTypes } from "prop-types";

const Header = ({ setMenu, socialMedia }) => {
  return (
    <>
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="images/logo.png" alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav">
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenu("");
            }}
            className="header-nav__close"
            title="close"
            style={{ cursor: "pointer" }}
          >
            <span>Close</span>
          </p>
          {/* <a href="#0" className="header-nav__close" title="close">
            <span>Close</span>
          </a> */}
          <div className="header-nav__content">
            <h3>Navigation</h3>
            <ul className="header-nav__list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="services">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#works" title="works">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#clients" title="clients">
                  Clients
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="contact">
                  Contact
                </a>
              </li>
            </ul>
            <p>Radiance&Glamour</p>
            <ul className="header-nav__social">
              <li>
                <a href={socialMedia.fb}>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href={socialMedia.x}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href={socialMedia.insta}>
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href={socialMedia.wa}>
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href={"mailto:" + socialMedia.mail}>
                  <i className="fa fa-envelope-o" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* end header-nav__content */}
        </nav>{" "}
        {/* end header-nav */}
        <p
          onClick={(e) => {
            e.preventDefault();
            setMenu("menu-is-open");
          }}
          style={{ cursor: "pointer" }}
          className="header-menu-toggle"
        >
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon" />
        </p>
      </header>
      {/* end s-header */}
    </>
  );
};

export default Header;
