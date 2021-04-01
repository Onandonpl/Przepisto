import React from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";

import IngredientForm from "./components/IngredientForm";
import Summary from "./components/Summary";
import NavigationButtons from "../Navigation";

import { Container } from "./style";

const Ingredients = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { ingredients } = recipe;

  return (
    <Container>
      <IngredientForm dispatch={dispatch} />
      <NavigationButtons prev={"/recipe-name"} next={"/recipe-steps"} />
      <Summary data={ingredients} dispatch={dispatch} />
    </Container>
  );
};

export default Ingredients;
