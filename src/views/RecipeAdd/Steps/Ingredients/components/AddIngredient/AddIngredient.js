import React, { useState } from "react";
import { Container, Button } from "./style";
import IngredientForm from "./IngredientForm";
import { useDispatchIngredients } from "../../../../../../context/IngredientsContext";
const AddIngredient = () => {
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatchIngredients();
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Container>
      <Button onClick={handleExpand}>Brakuje składnika?</Button>
      {expand ? <IngredientForm dispatch={dispatch} /> : null}
    </Container>
  );
};

export default AddIngredient;
