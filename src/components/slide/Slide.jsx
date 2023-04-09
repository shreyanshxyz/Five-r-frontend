import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

// The three props are the ones which will be passed down whenever we use the slider from the carousel so that the three props control that specific slideshow.

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
