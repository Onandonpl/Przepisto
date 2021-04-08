import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Submit } from "./style";
const IngredientForm = ({ dispatch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name } = data;
    const payload = {
      name: name,
    };

    dispatch({
      type: "ADD_INGREDIENT",
      payload: payload,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Nazwa</label>
      <Input
        name="name"
        type="text"
        placeholder={`Nazwa`}
        required
        ref={register()}
      />

      <Submit type="submit">Dodaj składnik</Submit>
    </Form>
  );
};

export default IngredientForm;
