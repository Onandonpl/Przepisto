import React from "react";
import { useDispatchRecipeAdd } from "../../../../context/RecipeAddContext";
import { Container } from "./style";
import FinishButton from "./components/FinishButton";
import PrevButton from "./components/PrevButton";
import PageTitle from "../../../../components/pageTitle";
const Finish = () => {
  const dispatch = useDispatchRecipeAdd();

  return (
    <PageTitle helmet={"Zakończ"}>
      <Container>
        <p>Gratulacje! teraz możesz dodać swój przepis.</p>
        <FinishButton dispatch={dispatch} />
        <PrevButton prev="/recipe-images" />
      </Container>
    </PageTitle>
  );
};

export default Finish;
