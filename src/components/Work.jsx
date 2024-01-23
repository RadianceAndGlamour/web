import { propTypes } from "prop-types";
import WorkItem from "./WorkItem";

const Work = ({ setMenu }) => {
  return (
    <>
      <section
        id="works"
        className="s-works"
        onClick={(e) => {
          e.preventDefault();
          setMenu("");
        }}
      >
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">Recent Works</h3>
              <h1 className="display-2 ">
                We love what we do, check out some of our latest works
              </h1>
            </div>
          </div>{" "}
          {/* end section-header */}
        </div>{" "}
        {/* end intro-wrap */}
        <div className="row works-content">
          <div className="col-full masonry-wrap">
            <div className="masonry">
              <WorkItem
                imageSrc={"images/work/mehendiImg.png"}
                title={"Bridal Mehendi"}
                cat={"mehendi"}
              />
              <WorkItem
                imageSrc={
                  "images/work/WhatsApp Image 2024-01-01 at 13.10.20_29d48c38.jpg"
                }
                title={"Bridal Mehendi"}
                cat={"mehendi"}
              />
            </div>{" "}
            {/* end masonry */}
          </div>{" "}
          {/* end col-full */}
        </div>{" "}
        {/* end works-content */}
      </section>
    </>
  );
};

export default Work;
