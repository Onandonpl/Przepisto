import React, { useState } from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";
import { Container, Submit } from "./style";
import AddImages from "../AddImages";

import Summary from "./components/Summary";
import NavigationButtons from "../Navigation";
import PageTitle from "../../../../components/pageTitle";

const Images = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { images } = recipe;

  const [recipeImages, setRecipeImages] = useState([]);

  const handleAddImage = () => {
    dispatch({ type: "ADD_IMAGE", payload: recipeImages });
  };
  return (
    <PageTitle helmet={"Dodaj zdjęcia"}>
      <Container>
        <p>Dodaj zdjęcia swojego przepisu</p>
        <AddImages setImages={setRecipeImages} images={recipeImages} />
        <Submit onClick={handleAddImage}>Dodaj zdjęcie</Submit>
        <NavigationButtons prev={"/recipe-tags"} next={"/recipe-finish"} />
        <Summary data={images} />
      </Container>
    </PageTitle>
  );
};

export default Images;
