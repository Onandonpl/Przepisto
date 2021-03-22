import React, { useState } from "react";
import styled from "styled-components";
import { useIngredients } from "../../../../context/IngredientsContext";

const IngredientsAdd = ({ ingredients, setIngredients }) => {
  const ingredientsContext = useIngredients();

  const [ingredientAmount, setIngredientAmount] = useState(0);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [actualIngredient, setActualIngredient] = useState(
    ingredientsContext.ingredients[0]
  );
  const clearInputs = () => {
    setIngredientPrice(0);
    setIngredientAmount(0);
  };
  const handleAddIngredient = () => {
    const { name, unit } = actualIngredient;

    if (!ingredientAmount || !ingredientPrice) {
      alert("podaj wartosc");
    } else {
      setIngredients([
        ...ingredients,
        {
          name: name,
          amount: ingredientAmount,
          unit: unit,
          price: ingredientPrice,
          checked: false,
        },
      ]);
      setActualIngredient(ingredientsContext.ingredients[0]);
    }
  };

  const handleIngredientChange = (e) => {
    setActualIngredient(
      { ...ingredientsContext }.ingredients.find(
        (ingredient) => ingredient.name === e.target.value
      )
    );
    clearInputs();
  };

  const handleIngredientAmount = (e) => {
    setIngredientAmount(e.target.value);
  };

  const handleIngredientPrice = (e) => {
    setIngredientPrice(e.target.value);
  };

  const ingredientOptions = () => {
    return ingredientsContext.ingredients.map((ingredient) => {
      return (
        <option key={ingredient.name} value={ingredient.name}>
          {ingredient.name} w {ingredient.unit}
        </option>
      );
    });
  };

  return (
    <Container>
      <label>Składniki</label>
      <select
        name="ingredients"
        value={actualIngredient.name}
        onChange={handleIngredientChange}
      >
        {ingredientOptions()}
      </select>
      <label>Ilość</label>
      <input
        type="number"
        value={ingredientAmount}
        onChange={handleIngredientAmount}
        placeholder={`Podaj ilość`}
        required
        min="0"
      />
      <label>Cena</label>
      <input
        type="number"
        value={ingredientPrice}
        onChange={handleIngredientPrice}
        placeholder={`Podaj cene w zł`}
        min="0"
      />
      <input
        type="button"
        onClick={handleAddIngredient}
        value={"Dodaj skladnik"}
      ></input>
    </Container>
  );
};

export default IngredientsAdd;
const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
