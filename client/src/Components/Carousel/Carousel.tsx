import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselProps {
  items: React.ReactNode[];
}
const Carousel: FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
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
