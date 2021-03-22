import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { db } from "../../../../lib/firebase";
import { useAuth } from "../../../../context/AuthContext";
import TagsAdd from "./TagsAdd";
import IngredientsAdd from "./IngredientsAdd";
import StepsAdd from "./StepsAdd";
const RecipeAdd = () => {
  const authUser = useAuth();
  const { register, errors, handleSubmit, clearErrors, reset } = useForm();
  const { user, displayName } = authUser;

  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const onSubmit = () => {
    const data = {
      name: "chlebek",
      authorID: user,
      authorDisplayName: displayName,
      difficulty: 1,
      persons: 1,
      preparationTime: 10,
      images: [],
      tags: ["chleb", "pieczywo"],

      ingredients: [
        {
          amount: 10,
          id: "NC0TGL1heLBF9zvmvus4",
        },
        {
          amount: 10,
          id: "NC0TGL1heLBF9zvmvus4",
        },
      ],
      steps: [
        {
          step: 1,
          description: "umyj",
          image: "",
          name: "Mycie naczyn",
          time: 10,
        },
        {
          step: 2,
          description: "umyj",
          image: "",
          name: "Mycie naczyn",
          time: 10,
        },
      ],
    };
    db.collection("recipes").doc().set(data);
    setTags([]);
    setIngredients([]);
    clearErrors();
  };

  return (
    <Container>
      <button onClick={onSubmit}>dodaj</button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>Nazwa dania</label>
        <Input
          name="name"
          placeholder="Nazwa"
          ref={register({
            required: "Pole Nazwa jest wymagane.",
          })}
        />
        <label>Stopień trudności</label>
        <select name="difficulty">
          <option value="1">Łatwe</option>
          <option value="2">Średnie</option>
          <option value="3">Trudne</option>
        </select>
        <label>Dla ilu osób</label>
        <select name="persons">
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
        </select>
        <label>Czas przygotowania</label>
        <select name="preparationTime">
          <option value="15">15 minut</option>
          <option value="30">30 minut</option>
          <option value="45">45 minut</option>
          <option value="60">60 minut</option>
          <option value="90">90 minut</option>
          <option value="120">120 minut</option>
          <option value="0">+120 minut</option>
        </select>
        <IngredientsAdd
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <TagsAdd setTags={setTags} tags={tags} />
        <StepsAdd setSteps={setSteps} steps={steps} />
        <Submit type="submit" value="Dodaj przepis"></Submit>
        {errors.email && <ErrorBox>{errors.email.message}</ErrorBox>}
        {errors.password && <ErrorBox>{errors.password.message}</ErrorBox>}
      </Form>{" "}
    </Container>
  );
};

export default RecipeAdd;

const Container = styled.div``;
const Form = styled.form`
  width: 100%;
  height: 30%;
  margin: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: 35px;
  font-weight: bold;
  label {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;

  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const Submit = styled.input`
  width: 60%;
  padding: 10px;
  margin: 10px;

  background-color: #fec56c;

  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  color: #242424;
  font-weight: 700;

  cursor: pointer;

  transition: linear 0.1s;
  &:hover {
    background-color: #febd2e;
  }
  &:focus {
    background-color: #febd2e;
  }
`;

const ErrorBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: bold;
  color: #ff0000;
`;
