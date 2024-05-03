import React from "react";
import { GalleryProps } from "../constant/GalleryData";

const Gallery: React.FC<GalleryProps> = ({ image, place, description }) => {
  return (
    <div className="gallery__box">
      <div className="gallery__box--images">
        <img src={image} alt={image} />
      </div>
      <div className="gallery__box--data">
        <h1>{place}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Gallery;
