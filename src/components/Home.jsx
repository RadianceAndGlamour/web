import { propTypes } from "prop-types";

const Home = ({ setMenu, socialMedia }) => {
  return (
    <>
      <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-image-src="images/hero-bg2.jpg"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div
            className="row home-content__main"
            onClick={(e) => {
              e.preventDefault();
              setMenu("");
            }}
          >
            <h3>Radiance & Glamour</h3>
            <h1 style={{ fontSize: "4rem" }}>
              Step into a world where beauty meets indulgence,
              <br /> and every visit is a celebration of your unique allure.
            </h1>
            <div
              className="home-content__buttons"
              onClick={(e) => {
                e.preventDefault();
                setMenu("");
              }}
            >
              <a
                href="#contact"
                className="smoothscroll btn btn--stroke"
                style={{ minWidth: "80%" }}
              >
                Book An Appointment
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>{" "}
        {/* end home-content */}
        <ul className="home-social">
          <li>
            <a href={socialMedia.fb}>
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href={socialMedia.x}>
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>X</span>
            </a>
          </li>
          <li>
            <a href={socialMedia.insta}>
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href={socialMedia.wa}>
              <i className="fa fa-whatsapp" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </li>
          <li>
            <a href={"mailto:" + socialMedia.mail}>
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <span>Mail</span>
            </a>
          </li>
        </ul>
        {/* end home-social */}
      </section>
    </>
  );
};

export default Home;
