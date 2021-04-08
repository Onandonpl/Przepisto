import React from "react";
import {
  IngredientContainer,
  IngredientInfo,
  IngredientCheckbox,
} from "./style";

const Ingredient = ({ ingredient }) => {
  const { name, amount, unit } = ingredient;
  return (
    <IngredientContainer>
      <IngredientCheckbox type="checkbox" />

      <IngredientInfo>
        <p>{name} </p>
        <div>
          <p>{amount} </p>
          <p>{unit}</p>
        </div>
      </IngredientInfo>
      
    </IngredientContainer>
  );
};

export default Ingredient;
