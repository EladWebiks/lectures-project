import React from "react";
import CarouselComponent from "./Carousel";
import Card from "./Card";
import { useMyContext } from "../../Context";
import "./ImageGallery.css";

const ImageGallery: React.FC = () => {
  const { image } = useMyContext(); // קבלת נתוני התמונות מהקונטקסט

  const cards = image.map((img: { img: string }, index: number) => ({
    key: `${index}`,
    content: <Card imagen={img.img} />, // יוצרים קלף עבור כל תמונה
  }));

  return (
    <div className="ImageGallery">
      <CarouselComponent
        cards={cards}
        height="400px"
        width="70%"
        margin="0 auto"
        offset={2}
      />
    </div>
  );
};

export default ImageGallery;
