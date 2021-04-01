import React from "react";
import { useForm } from "react-hook-form";

import IngredientOptions from "./IngredientOptions";

import { Form, Input, Select, Submit } from "../style";

const IngredientForm = ({ dispatch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, amount, price, unit } = data;
    const payload = {
      name: name,
      amount: amount,
      unit: unit,
      price: price,
    };

    dispatch({
      type: "ADD_INGREDIENT",
      payload: payload,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Składnik</label>
      <Select name="name" ref={register()}>
        <IngredientOptions />
      </Select>

      <label>Jednostka</label>
      <Select name="unit" ref={register()}>
        <option value="l">Litr</option>
        <option value="kg">kilogram</option>
        <option value="szt">Sztuka</option>
      </Select>

      <label>Ilość</label>
      <Input
        name="amount"
        type="number"
        placeholder={`Ilość`}
        required
        min="0"
        ref={register()}
        step="0.01"
      />
      <label>Cena za pojedynczy składnik</label>
      <Input
        name="price"
        type="number"
        placeholder={`Cena w zł`}
        required
        min="0"
        ref={register()}
        step="0.01"
      />

      <Submit type="submit">Dodaj składnik</Submit>
    </Form>
  );
};

export default IngredientForm;
