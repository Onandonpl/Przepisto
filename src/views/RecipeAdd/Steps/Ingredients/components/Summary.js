import React from "react";
import {
  SummaryContainer,
  Title,
  Ingredients,
  Ingredient,
  Button,
} from "../style";

import { MdRemoveCircleOutline } from "react-icons/md";

const Summary = ({ data, dispatch }) => {
  return (
    <SummaryContainer>
      <Title>Twoje składniki</Title>
      <Ingredients>
        {data.map((ingredient, index) => {
          const { name, amount, unit, price } = ingredient;

          return (
            <Ingredient key={name}>
              <div>
                <p> Nazwa: {name}</p>
                <p> Ilość: {amount}</p>
                <p> Jednostka: {unit}</p>
                <p> Cena: {price * amount} zł</p>
              </div>
              <Button
                onClick={() => {
                  dispatch({ type: "DELETE_INGREDIENT", payload: index });
                }}
              >
                <MdRemoveCircleOutline />
              </Button>
            </Ingredient>
          );
        })}
      </Ingredients>
    </SummaryContainer>
  );
};

export default Summary;
