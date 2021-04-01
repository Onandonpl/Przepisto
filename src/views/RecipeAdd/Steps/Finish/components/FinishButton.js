import React from "react";
import { useHistory } from "react-router-dom";

import { Submit } from "../style";
const FinishButton = ({ dispatch }) => {
  const history = useHistory();

  const handleFinishRecipe = () => {
    dispatch({ type: "SUBMIT" });
    history.push("/");
  };
  return <Submit onClick={handleFinishRecipe}>Dodaj przepis</Submit>;
};

export default FinishButton;
