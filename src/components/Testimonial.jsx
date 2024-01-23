import { propTypes } from "prop-types";
import { Carousel } from "@trendyol-js/react-carousel";
import TestimonialItem from "./TestimonialItem";

const Testimonial = ({ setMenu }) => {
  let text =
    "Flawless results every time! Sadaf and the team at Radiance&Glamour are true artists. From makeup to henna, their expertise shines through. I can't recommend them enough!";
  let pic = "/images/clients/client1.jpg";
  let name = "Sofia Saifi";
  return (
    <>
      <section
        id="clients"
        className="s-clients"
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Clients</h3>
            <h1 className="display-2">What clients say about us !</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row clients-testimonials" data-aos="fade-up">
          <div className="col-full">
            <div className="testimonials" style={{ cursor: "pointer" }}>
              <center>
                <Carousel
                  rightArrow="	Next&rarr;"
                  leftArrow="&larr;Previous"
                  swiping={true}
                >
                  <TestimonialItem text={text} pic={pic} name={name} />
                  <TestimonialItem text={text} pic={pic} name={name} />
                  <TestimonialItem text={text} pic={pic} name={name} />
                </Carousel>
              </center>
            </div>
            {/* end testimonials */}
          </div>{" "}
          {/* end col-full */}
        </div>{" "}
        {/* end client-testimonials */}
      </section>
    </>
  );
};

export default Testimonial;
