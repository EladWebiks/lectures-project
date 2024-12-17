import { FC } from "react";
import "./CarouselItem.css"
interface CarouselItemProps {
  index: number;
}
const CarouselItem: FC<CarouselItemProps> = ({ index }) => {
  return (
      <div className="CarouselItem">{index}</div>
  );
};

export default CarouselItem;
