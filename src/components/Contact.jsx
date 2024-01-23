import { PropTypes } from "prop-types";

export const Contact = ({ setMenu, socialMedia }) => {
  return (
    <>
      <section
        id="contact"
        className="s-contact"
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div className="overlay" />
        <div className="contact__line" />
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Contact Us</h3>
            <h1 className="display-2 display-2--light">
              Reach out for a Any Query or just say Hello
            </h1>
          </div>
        </div>
        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <h3 className="h6">Send Us A Message</h3>
            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action
              noValidate="novalidate"
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    minLength={2}
                    required
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    required
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    rows={10}
                    cols={50}
                    required
                    className="full-width"
                    defaultValue={""}
                  />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {/* contact-warning */}
            <div className="message-warning">
              Something went wrong. Please try again.
            </div>
            {/* contact-success */}
            <div className="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>{" "}
          {/* end contact-primary */}
          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  Shri Ram Colony
                  <br />
                  New Delhi
                  <br />
                  110094 IN
                </p>
              </div>
              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>radianceandglamour@gmail.com</p>
              </div>
              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+91) 999 555 1212
                  <br />
                  Mobile: (+91) 999 555 0100
                  <br />
                  Whatsapp: (+91) 999 3339 0000
                </p>
              </div>
              <ul className="contact-social">
                <li>
                  <a href={socialMedia.fb}>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialMedia.x}>
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialMedia.insta}>
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={socialMedia.wa}>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={"mailto:" + socialMedia.mail}>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </a>
                </li>
              </ul>{" "}
              {/* end contact-social */}
            </div>{" "}
            {/* end contact-info */}
          </div>{" "}
          {/* end contact-secondary */}
        </div>{" "}
        {/* end contact-content */}
      </section>
    </>
  );
};

export default Contact;
