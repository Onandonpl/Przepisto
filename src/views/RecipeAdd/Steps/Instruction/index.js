import React from "react";

import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";

import { Container } from "./style";

import NavigationButtons from "../Navigation";

import InstructionForm from "./components/InstructionForm";
import Summary from "./components/Summary";
import PageTitle from "../../../../components/pageTitle";

const Instruction = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { steps } = recipe;

  return (
    <PageTitle helmet={"Dodaj instrukcję"}>
      <Container>
        <p>Opisz kroki jak wykonać przepis</p>
        <InstructionForm steps={steps} dispatch={dispatch} />
        <NavigationButtons prev={"/recipe-ingredients"} next={"/recipe-tags"} />
        <Summary data={steps} dispatch={dispatch} />
      </Container>
    </PageTitle>
  );
};

export default Instruction;
