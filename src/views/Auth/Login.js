import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import PageTitle from "../../components/pageTitle";
import { auth, db } from "../../lib/firebase";
import { useAuth, useDispatchAuth } from "../../context/AuthContext";

const Login = () => {
  const { register, errors, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();
  const contextUser = useAuth();
  const dispatch = useDispatchAuth();

  useEffect(() => {
    if (contextUser.isLogged) {
      return history.push("/");
    }
  }, [contextUser]);

  const setLocalStorageUser = (userOnLogin) => {
    const authUser = {
      user: userOnLogin.uid,
      displayName: userOnLogin.displayName,
      loading: false,
      error: false,
      isLogged: true,
    };

    localStorage.setItem("authUser", JSON.stringify(authUser));
  };

  const addUserToCollection = (userOnLogin) => {
    const userRef = db.collection("users").doc(userOnLogin.uid);
    userRef.set({
      userID: userOnLogin.uid,
      name: userOnLogin.displayName,
    });
  };

  const onSubmit = async (data) => {
    try {
      await auth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((data) => {
          const { user } = data;
          setLocalStorageUser(user);
          dispatch({ type: "SUCCES_LOGIN", payload: user });
          addUserToCollection(user);
        });

      history.push("/");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <PageTitle helmet={"Logowanie"}>
      <LoginContainer>
        <LoginTitle>Logowanie</LoginTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            placeholder="Email"
            ref={register({
              required: "Pole Email jest wymagane.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "B????dny email.",
              },
            })}
          />
          <Input
            name="password"
            type="password"
            placeholder="Has??o"
            ref={register({ required: "Pole Has??o jest wymagane." })}
          />
          <Submit type="submit" value="Zaloguj"></Submit>

          {loginError && (
            <ErrorBox>B????d podczas logowania, sprawd?? dane.</ErrorBox>
          )}
          {errors.email && <ErrorBox>{errors.email.message}</ErrorBox>}
          {errors.password && <ErrorBox>{errors.password.message}</ErrorBox>}
        </Form>
      </LoginContainer>
    </PageTitle>
  );
};

export default Login;
const LoginContainer = styled.div`
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

const LoginTitle = styled.p`
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
