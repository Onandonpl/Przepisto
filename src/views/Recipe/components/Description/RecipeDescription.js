import React from "react";
import { Description } from "./style";
import Images from "../ImagesGallery/ImagesGallery";
import StepsList from "../Steps/StepsList";
const RecipeDescription = ({ data }) => {
  const { images, steps } = data;
  return (
    <Description>
      <Images images={images} />
      <StepsList steps={steps} />
    </Description>
  );
};

export default RecipeDescription;
