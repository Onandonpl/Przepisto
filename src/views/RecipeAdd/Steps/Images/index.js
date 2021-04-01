import React, { useState } from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";

import AddImages from "../AddImages";
import NavigationButtons from "../Navigation";

const Images = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { images } = recipe;

  const [recipeImages, setRecipeImages] = useState([]);
  console.log(recipeImages);
  const handleFinishRecipe = () => {
    dispatch({ type: "SUBMIT" });
  };
  return (
    <div>
      <p>Dodaj zdjęcia swojego przepisu</p>
      <AddImages setImages={setRecipeImages} images={recipeImages} />
      <NavigationButtons />
      <button onClick={handleFinishRecipe}></button>
    </div>
  );
};

export default Images;
