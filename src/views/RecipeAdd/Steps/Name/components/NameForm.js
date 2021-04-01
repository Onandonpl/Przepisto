import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../../../../context/AuthContext";
import { useDispatchRecipeAdd } from "../../../../../context/RecipeAddContext";

import { Form, Input, Select, Submit } from "../style";

const NameForm = () => {
  const authUser = useAuth();
  const { user, displayName } = authUser;

  const dispatch = useDispatchRecipeAdd();
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, difficulty, persons, preparationTime } = data;
    const payload = {
      authorID: user,
      authorDisplayName: displayName,
      difficulty: difficulty,
      persons: persons,
      preparationTime: preparationTime,
      name: name,
    };

    dispatch({
      type: "SUBMIT",
      payload: payload,
    });
    history.push("/recipe-ingredients");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Nazwa dania</label>
      <Input name="name" placeholder="Nazwa" ref={register()} required />
      <label>Stopień trudności</label>
      <Select name="difficulty" ref={register()}>
        <option value="1">Łatwe</option>
        <option value="2">Średnie</option>
        <option value="3">Trudne</option>
      </Select>
      <label>Dla ilu osób</label>
      <Select name="persons" ref={register()}>
        <option value="1">1 osoba</option>
        <option value="2">2 osoby</option>
        <option value="3">3 osoby</option>
        <option value="4">4 osoby</option>
        <option value="5">5 osób</option>
        <option value="6">6 osób</option>
        <option value="7">7 osób</option>
        <option value="8">8 osób</option>
        <option value="9">9 osób</option>
        <option value="10">10 osób</option>
      </Select>
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
      <Submit type="submit">Następny krok</Submit>
    </Form>
  );
};

export default NameForm;
