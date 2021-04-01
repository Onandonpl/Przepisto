import React from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";

import IngredientForm from "./components/IngredientForm";
import Summary from "./components/Summary";
import NavigationButtons from "../Navigation";

import { Container } from "./style";
import PageTitle from "../../../../components/pageTitle";

const Ingredients = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { ingredients } = recipe;

  return (
    <PageTitle helmet={"Dodaj składniki"}>
      <Container>
        <p>Podaj składniki swojego przepisu</p>
        <IngredientForm dispatch={dispatch} />
        <NavigationButtons prev={"/recipe-name"} next={"/recipe-steps"} />
        <Summary data={ingredients} dispatch={dispatch} />
      </Container>
    </PageTitle>
  );
};

export default Ingredients;
