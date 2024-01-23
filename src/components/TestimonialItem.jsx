import { propTypes } from "prop-types";

const TestimonialItem = ({ text, pic, name }) => {
  return (
    <>
      <div className="testimonials__slide">
        <p>{text}</p>
        <img src={pic} alt="Author image" className="testimonials__avatar" />
        <div className="testimonials__info">
          <span className="testimonials__name">{name}</span>
          <span className="testimonials__pos">CEO, Apple</span>
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
