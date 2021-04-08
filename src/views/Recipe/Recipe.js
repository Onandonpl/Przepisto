import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRecipes } from "../../context/RecipesContext";

import Loading from "./components/Loading/Loading";

import { Container, Box } from "./style";

import BasicInfo from "./components/BasicInfo/BasicInfo";
import Ingredients from "./components/Ingredients/Ingredients";
import RecipeDescription from "./components/Description/RecipeDescription";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const pdfRef = React.createRef();
  const recipes = useRecipes();

  useEffect(() => {
    const recipe = recipes.recipes.find((element) => {
      return element.recipeID === id;
    });
    setRecipe(recipe);
    setLoading(false);
  }, [id, recipes.recipes]);

  if (loading) {
    return <Loading />;
  }

  const { recipeData } = recipe;

  return (
    <Container ref={pdfRef}>
      <Box>
        <BasicInfo pdfRef={pdfRef} data={recipeData} />
        <Ingredients data={recipeData} />
      </Box>
      <Box>
        <RecipeDescription data={recipeData} />
      </Box>
    </Container>
  );
};

export default Recipe;
