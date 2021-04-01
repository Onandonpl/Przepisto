import React from "react";
import { useIngredients } from "../../../../../context/IngredientsContext";

const IngredientOptions = () => {
  const ingredientsContext = useIngredients();

  return (
    <>
      {ingredientsContext.ingredients.map((ingredient) => {
        return (
          <option key={ingredient.name} value={ingredient.name}>
            {ingredient.name}
          </option>
        );
      })}
    </>
  );
};

export default IngredientOptions;
