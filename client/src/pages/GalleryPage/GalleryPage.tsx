import { FC } from "react";
import ImageGallery from "../../Components/ImageGalley/ImageGallery";
import "./GalleryPage.css";
import Carousel from "../../Components/Carousel/Carousel";
import CarouselItem from "../../Components/CarouselItem/CarouselItem";
const arr = [1, 2, 3, 4];

const GalleryPage: FC = () => {
  return (
    <div className="GalleryPage page">
      <ImageGallery />
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Carousel
          items={arr.map((item) => (
            <CarouselItem key={item} index={item} />
          ))}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
