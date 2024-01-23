import { propTypes } from "prop-types";
import React from "react";

const About = ({ setMenu }) => {
  return (
    <>
      <section
        id="about"
        className="s-about"
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div
          className="row section-header has-bottom-sep"
          data-aos="fade-up"
          style={{ marginTop: "-3rem" }}
        >
          <div className="col-full">
            <h3 className="subhead subhead--dark">Hello There</h3>
            <h1 className="display-1 display-1--light">About Us</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row about-desc" data-aos="fade-up">
          <div className="col-full">
            <p>
              At <span style={{ color: "#ff003e" }}>Radiance&Glamour</span>, our
              founder, Sadaf, brings a fresh perspective and creativity to every
              service. With a genuine love for enhancing natural beauty, Sadaf
              infuses her youthful energy and innovative ideas into every makeup
              application, henna design, and hairstyle she creates.
              <br />
              Join us on this exciting journey as we continue to evolve,
              innovate, and celebrate the beauty in each of our clients.
              Experience the magic at{" "}
              <span style={{ color: "#ff003e" }}>Radian&Glamour</span>—where
              dreams and beauty collide.{"  "}
              <span style={{ cursor: "pointer", color: "green" }}>
                Read More About Us
              </span>
            </p>
          </div>
        </div>{" "}
        {/* end about-desc */}
        <div
          className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
          data-aos="fade-up"
          style={{ textAlign: "center" }}
        >
          <div className="col-block stats__col " style={{ width: "50%" }}>
            <div className="stats__count">68</div>
            <h5>Happy Clients</h5>
          </div>
          <div className="col-block stats__col " style={{ width: "50%" }}>
            <div className="stats__count">3</div>
            <h5>Years Experience</h5>
          </div>
        </div>{" "}
        {/* end about-stats */}
        <div className="about__line" />
      </section>
    </>
  );
};

export default About;
