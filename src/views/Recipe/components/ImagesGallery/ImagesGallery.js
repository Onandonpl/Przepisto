import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Loading from "../Loading/Loading";
import { ImagesContainer } from "./style";
const ImagesGallery = ({ images }) => {
  
  const recipeImages = () => {
    if (images.length === 0) {
      return [
        {
          original: "/dinnerThumbExample.jpg",
        },
      ];
    } else {
      return images.map((image) => {
        return { original: image.src };
      });
    }
  };

  if (images === undefined) {
    return <Loading />;
  }

  return (
    <ImagesContainer>
      <ImageGallery
        items={recipeImages()}
        lazyLoad={true}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </ImagesContainer>
  );
};

export default ImagesGallery;
