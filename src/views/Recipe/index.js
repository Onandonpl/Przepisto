import React from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../../context/RecipesContext";
const Recipe = () => {
  const { id } = useParams();
  const recipes = useRecipes();
  console.log(
    recipes.recipes.find((element) => {
      return element.recipeID === id;
    })
  );
  return <div></div>;
};

export default Recipe;
