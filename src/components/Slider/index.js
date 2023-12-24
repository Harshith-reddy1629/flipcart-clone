import React from "react";
import Slider from "react-slick";
import N from "../../Assets/next.png";
import P from "../../Assets/prev.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const carouselImages = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/89a0ff387a16ec92.jpeg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/016910bef5f24a49.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/039ec2390c9d9c67.jpeg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b1d99ada6bab3722.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f515750b4e4ec8e.jpeg?q=20",
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_nxt_btn"}
      style={style}
      onClick={onClick}
    >
      <div className="carousel_btn_icon">
        <img alt="." height="11" src={N} />
      </div>
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " carousel_btn carousel_prev_btn"}
      style={style}
      onClick={onClick}
    >
      <div className="carousel_btn_icon">
        <img alt="." height="11" src={P} />
      </div>
    </div>
  );
};

const SliderC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    // <div className="silder-container">
    <Slider {...settings}>
      {carouselImages.map((each) => (
        <img src={each} alt="." />
      ))}
    </Slider>
    // </div>
  );
};

export default SliderC;
