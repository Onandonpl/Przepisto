import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import PageTitle from "../../components/pageTitle";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { register, errors, handleSubmit, clearErrors } = useForm();
  const [registerError, setRegisterError] = useState(false);
  const [succes, setSucces] = useState(false);
  const history = useHistory();
  const user = useAuth();

  useEffect(() => {
    if (user.isLogged) {
      return history.push("/");
    }
  }, [user]);

  const onSubmit = async (data) => {
    clearErrors();
    setRegisterError(false);
    setSucces(false);
    try {
      await auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userData) => {
          userData.user.updateProfile({
            displayName: data.userName,
          });
        });
      setSucces(true);
    } catch (error) {
      setRegisterError(true);
    }
  };

  return (
    <PageTitle helmet={"Rejestracja"}>
      <RegisterContainer>
        <RegisterTitle>Rejestracja</RegisterTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Email użytkownika</label>
          <Input
            name="email"
            placeholder="Email"
            ref={register({
              required: "Pole Email jest wymagane.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Błędny email.",
              },
            })}
          />
          <label>Nazwa użytkownika</label>
          <Input
            name="userName"
            placeholder="Nazwa użytkownika"
            ref={register({
              required: "Pole Nazwa użytkownika jest wymagane.",
            })}
          />
          <label>Hasło</label>
          <Input
            name="password"
            type="password"
            placeholder="Hasło"
            ref={register({ required: "Pole Hasło jest wymagane." })}
          />
          <Submit type="submit" value="Zarejestruj"></Submit>
          {registerError && <ErrorBox>Błąd podczas rejestracji</ErrorBox>}
          {errors.email && <ErrorBox>{errors.email.message}</ErrorBox>}
          {errors.password && <ErrorBox>{errors.password.message}</ErrorBox>}
          {succes && (
            <LoginLink to={"/login"}>
              Pomyślnie utworzono konto, możesz się teraz zalogować
            </LoginLink>
          )}
        </Form>
      </RegisterContainer>
    </PageTitle>
  );
};

export default Register;
const RegisterContainer = styled.div`
  min-height: 350px;
  max-width: 420px;
  width: 100%;
  padding: 10px;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 33px -20px #000000;
`;

const RegisterTitle = styled.p`
  color: #242424;
  font-size: 35px;
  font-weight: 700;
`;

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
const LoginLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  color: green;
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
