import { propTypes } from "prop-types";
import React from "react";

const Footer = ({ setMenu }) => {
  return (
    <>
      {" "}
      <footer
        style={{ color: "black" }}
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div className="row footer-main">
          <div className="col-six tab-full left footer-desc">
            <div className="footer-logo" />
            Unlock your true beauty at Radiance&Glamour. Discover personalized
            perfection in makeup, henna, and hairstyling. Your journey to
            radiant confidence begins here. Book your appointment today
          </div>
          <div className="col-six tab-full right footer-subscribe">
            <h2>Working Hour</h2>
            <ul>
              <li>Monday: 9Am To 8Pm</li>
              <li>Tuesday: 9Am To 8Pm</li>
              <li>Wednesday: 9Am To 8Pm</li>
              <li>Thursday: 9Am To 8Pm</li>
              <li>Friday: 9Am To 8Pm</li>
              <li>Saturday: 9Am To 8Pm</li>
              <li>Sunday: Off</li>
            </ul>
          </div>
        </div>{" "}
        {/* end footer-main */}
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright R&G {new Date().getFullYear()}</span>
              <span>
                Site Created by{" "}
                <a
                  href="https://github.com/Samad-11"
                  style={{ color: "Green" }}
                >
                  Abdus Samad
                </a>
              </span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="icon-arrow-up" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>{" "}
        {/* end footer-bottom */}
      </footer>
    </>
  );
};

export default Footer;
