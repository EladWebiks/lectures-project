import React, { FC } from "react";
import { useMyContext } from "../../Context";
import "./ImageGallery.css";

const ImageGallery: FC = () => {
  const { image } = useMyContext();
  return (
    <div className="ImageGallery">
      <div className="parent">
        {image.map((img, index) => {
          return (
            <div style={{backgroundImage: `url(${img.img})`, backgroundSize:"cover", backgroundPosition:"center center"}}  key={img.title} className={"div" + (index + 1) +" elad"}>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
