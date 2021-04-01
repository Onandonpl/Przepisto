import React from "react";
import {
  useRecipeAdd,
  useDispatchRecipeAdd,
} from "../../../../context/RecipeAddContext";
import { Container } from "./style";
import TagForm from "./components/TagForm";
import Summary from "./components/Summary";
import NavigationButtons from "../Navigation";
import PageTitle from "../../../../components/pageTitle";

const Tags = () => {
  const recipe = useRecipeAdd();
  const dispatch = useDispatchRecipeAdd();
  const { tags } = recipe;

  return (
    <PageTitle helmet={"Dodaj tagi"}>
      <Container>
        <p>Podaj tagi swojego przepisu</p>
        <TagForm dispatch={dispatch} />
        <NavigationButtons prev={"/recipe-steps"} next={"/recipe-images"} />
        <Summary data={tags} />
      </Container>
    </PageTitle>
  );
};

export default Tags;
