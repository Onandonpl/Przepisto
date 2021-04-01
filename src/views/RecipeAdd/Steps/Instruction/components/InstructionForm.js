import React, { useState } from "react";
import { useForm } from "react-hook-form";

import AddImages from "../../AddImages";

import { Form, Input, Select, TextArea, Submit } from "../style";

const InstructionForm = ({ steps, dispatch }) => {
  const [images, setImages] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, preparationTime, description } = data;

    const payload = {
      step: steps.length + 1,
      stepName: name,
      stepDuration: preparationTime,
      stepDescription: description,
      stepImages: images,
    };

    dispatch({
      type: "ADD_STEP",
      payload: payload,
    });

    setImages([]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Nazwa kroku</label>
      <Input name="name" ref={register()} required />

      <label>Czas przygotowania</label>
      <Select name="preparationTime" ref={register()}>
        <option value={15}>15 minut</option>
        <option value={30}>30 minut</option>
        <option value={45}>45 minut</option>
        <option value={60}>60 minut</option>
        <option value={90}>90 minut</option>
        <option value={120}>120 minut</option>
        <option value={0}>+120 minut</option>
      </Select>
      <label>Opis kroku</label>
      <TextArea
        name="description"
        placeholder="Opis"
        ref={register()}
        required
      ></TextArea>
      <label>Dodaj zdjęcie</label>
      <AddImages images={images} setImages={setImages} />
      <Submit type="submit">Dodaj Krok</Submit>
    </Form>
  );
};

export default InstructionForm;
