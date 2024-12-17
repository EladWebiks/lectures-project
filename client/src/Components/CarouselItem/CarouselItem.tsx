import { FC } from "react";
import "./CarouselItem.css"
import NailCareRecommendation from "../../types/recommendations";
interface CarouselItemProps {
  item:NailCareRecommendation 
}
const CarouselItem: FC<CarouselItemProps> = ({ item }) => {
  return (
      <div className="CarouselItem">
        <h5 className="carousel-item-header">{item.username}</h5>
        <img  className="carousel-item-img" src={item.image} alt="" />
        <p  className="carousel-item-p">{item.recommendation}</p>
      </div>
  );
};

export default CarouselItem;
