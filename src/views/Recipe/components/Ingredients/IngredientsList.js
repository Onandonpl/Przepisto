import React from "react";
import Ingredient from "./Ingredient";
import { ListContainer } from "./style";
const IngredientsList = ({ ingredients }) => {
  return (
    <ListContainer>
      {ingredients.map((ingredient) => {
        return <Ingredient ingredient={ingredient} />;
      })}
    </ListContainer>
  );
};

export default IngredientsList;
