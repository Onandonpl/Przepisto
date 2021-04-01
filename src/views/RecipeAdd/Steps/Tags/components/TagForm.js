import React from "react";
import { useForm } from "react-hook-form";

import { Form, Input, Submit } from "../style";
const TagForm = ({ dispatch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name } = data;

    dispatch({
      type: "ADD_TAG",
      payload: name,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Nazwa Tagu</label>
      <Input name="name" ref={register()} placeholder="Nazwa" required />
      <Submit type="submit">Dodaj Tag</Submit>
    </Form>
  );
};

export default TagForm;
