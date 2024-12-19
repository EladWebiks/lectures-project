import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./Carousel.css";

interface CarouselProps {
  cards: { key: string; content: React.ReactNode }[];
  height: string;
  width: string;
  margin: string;
  offset: number;
  autoPlayInterval?: number; // משך הזמן בין מעברים (במילישניות)
}

const CarouselComponent: React.FC<CarouselProps> = ({
  cards,
  height,
  width,
  margin,
  offset,
  autoPlayInterval = 3000, // ברירת מחדל: 3 שניות
}) => {
  const [goToSlide, setGoToSlide] = useState<number | null>(0); // ניהול השקופית הנוכחית
  const [offsetRadius, setOffsetRadius] = useState(offset);

  useEffect(() => {
    setOffsetRadius(offset);
  }, [offset]);

  // מעבר לשקופית הבאה אוטומטית
  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prev) => (prev !== null ? (prev + 1) % cards.length : 0));
    }, autoPlayInterval);

    // ניקוי האינטרוול בעת הרכיב מתבטל
    return () => clearInterval(interval);
  }, [cards.length, autoPlayInterval]);

  return (
    <div
      style={{
        height,
        width,
        margin,
      }}
    >
      <Carousel
        slides={cards.map((card, index) => ({
          ...card,
          onClick: () => setGoToSlide(index), // לחיצה על קלף תעבור לשקופית המתאימה
        }))}
        goToSlide={goToSlide ?? undefined}
        offsetRadius={offsetRadius}
        animationConfig={config.gentle}
        showNavigation={false}
      />
    </div>
  );
};

export default CarouselComponent;
