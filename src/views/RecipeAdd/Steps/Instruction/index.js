import React from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";

import { Container } from "./style";

import NavigationButtons from "../Navigation";

import InstructionForm from "./components/InstructionForm";
import Summary from "./components/Summary";

const Instruction = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { steps } = recipe;

  return (
    <Container>
      <InstructionForm steps={steps} dispatch={dispatch} />
      <NavigationButtons prev={"/recipe-ingredients"} next={"/recipe-images"} />
      <Summary data={steps} dispatch={dispatch} />
    </Container>
  );
};

export default Instruction;
