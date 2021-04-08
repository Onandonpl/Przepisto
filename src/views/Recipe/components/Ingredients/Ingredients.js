import React from "react";
import IngredientsList from "./IngredientsList";
import { IngredientsContainer, IngredientsTitle } from "./style";

const Ingredients = ({ data }) => {
  const { ingredients } = data;
  return (
    <IngredientsContainer>
      <IngredientsTitle>Składniki</IngredientsTitle>
      <IngredientsList ingredients={ingredients} />
    </IngredientsContainer>
  );
};

export default Ingredients;
