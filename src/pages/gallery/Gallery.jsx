import React from "react";
import { dataGallery } from "../../data/dataGallery";
import "./gallery.css";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = ({ setOpenImage }) => {
  return (
    <div className="galleryContainer">
      <ImageList className="images" variant="quilted" cols={3} rowHeight={120}>
        {dataGallery.map((item) => (
          <ImageListItem
            className="imageListItem"
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setOpenImage(item);
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
