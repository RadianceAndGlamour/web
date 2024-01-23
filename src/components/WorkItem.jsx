import React from "react";
import { propTypes } from "prop-types";

const WorkItem = ({ imageSrc, title, cat }) => {
  return (
    <>
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a className="thumb-link" title="Shutterbug" data-size="1050x700">
              <img src={imageSrc} alt />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">{title}</h3>
            <p className="item-folio__cat">{cat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
