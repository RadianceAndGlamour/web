import { propTypes } from "prop-types";

const Service = ({ setMenu }) => {
  return (
    <>
      <section
        id="services"
        className="s-services"
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Services</h3>
            <h1 className="display-2">Your Beauty, Our Dream.</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row services-list block-1-2 block-tab-full">
          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/makeup.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">MakeUp</h3>
              <p>
                Indulge in the transformative power of makeup with our expert
                applications. Whether you&apos;re aiming for a subtle, everyday
                glow or a glamorous evening look, our makeup artists specialize
                in enhancing your features and capturing the essence of your
                personal style.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/mehndi.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">Mehendi</h3>
              <p>
                Adorn your hands and feet with the intricate artistry of henna.
                Our henna services showcase the rich tradition of this ancient
                form of body art, offering both traditional and contemporary
                designs to complement any occasion.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/hairstyle.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">Hair Style</h3>
              <p>
                Revitalize your look with our hairstyling services, ranging from
                classic cuts to on-trend styles. Whether you desire a chic bob,
                romantic curls, or a daring color change, our team is committed
                to creating hairstyles that reflect your individuality.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/facial.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">Facial</h3>
              <p>
                Pamper yourself with our luxurious facial service at
                Radiance&Glamour. Our expert estheticians tailor each treatment
                to your skin&apos;s unique needs, promising a revitalizing
                journey to radiant and healthy-looking skin. Experience the
                epitome of relaxation as we bring out your inner glow with care
                and precision.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/peel.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">Peel</h3>
              <p>
                Transform your skin with our specialized peel service at
                Radiance&Glamour. Unveil a radiant complexion as we gently
                exfoliate and rejuvenate, leaving you with a renewed and
                refreshed glow. Trust our skilled estheticians to enhance your
                natural beauty through this invigorating and personalized peel
                experience.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <hr />
            <div className="service-icon">
              <img src="images/consultant.jpg" alt="" />
            </div>
            <div className="service-text">
              <h3 className="h2">Personalized Consultations</h3>
              <p>
                Not sure which service is right for you? Our team is here to
                guide you through personalized consultations, understanding your
                preferences, lifestyle, and individual needs to create a
                customized beauty plan.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end services-list */}
      </section>
    </>
  );
};

export default Service;
