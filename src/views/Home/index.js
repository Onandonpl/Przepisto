import React from "react";
import { useRecipes } from "../../context/RecipesContext";

import PageTitle from "../../components/pageTitle";
import RecipeSmall from "../../components/RecipeSmall";
import { Recipes } from "./style";
const Home = () => {
  const recipes = useRecipes();
  console.log(recipes.recipes);
  return (
    <PageTitle helmet={"Strona główna"}>
      <Recipes>
        {recipes.recipes.map((recipe) => {
          const { recipeID, recipeData } = recipe;
          return (
            <RecipeSmall key={recipeID} recipeID={recipeID} data={recipeData} />
          );
        })}
      </Recipes>
    </PageTitle>
  );
};

export default Home;
