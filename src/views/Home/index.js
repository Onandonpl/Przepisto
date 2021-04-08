import React from "react";
import { useRecipes } from "../../context/RecipesContext";

import PageTitle from "../../components/pageTitle";
import RecipeThumb from "./components/RecipeThumb/RecipeThumb";
import { Recipes } from "./style";
const Home = () => {
  const recipes = useRecipes();
  return (
    <PageTitle helmet={"Strona główna"}>
      <Recipes>
        {recipes.recipes.map((recipe) => {
          const { recipeID, recipeData } = recipe;
          return (
            <RecipeThumb key={recipeID} recipeID={recipeID} data={recipeData} />
          );
        })}
      </Recipes>
    </PageTitle>
  );
};

export default Home;
