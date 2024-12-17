import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselProps {
  items: React.ReactNode[];
}
const Carousel: FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item,index)=><div key={index+" "+Math.random()}>{item}</div>)}
      </Slider>
    </div>
  );
};

export default Carousel;
