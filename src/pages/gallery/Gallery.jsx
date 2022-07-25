import React from "react";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import { SliderData } from "../../components/imageSlider/SliderData";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <ImageSlider slides={SliderData} />
    </div>
  );
};
export default Gallery;
