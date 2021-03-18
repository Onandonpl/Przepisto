import React from "react";
import { useAuth, useDispatchAuth } from "./context/AuthContext";
import firebase from "./lib/firebase";
// import { login } from "./actions/authAction";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
const App = () => {
  const user = useAuth();
  const dispatch = useDispatchAuth();
  console.log(user);
  const loginFake = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("test@test.com", "password")
      .catch((e) => {
        console.log(e);
      });
  };
  const login = async () => {
    firebase.auth().signInWithEmailAndPassword("admin@admin.com", "admin1");
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("authUser");
  };
  const logind = (user) => console.log(user);
  const handleLogin = () => {
    logind("siema", "siema");
  };
  return (
    <Wrapper>
      <Container helmet={"Strona główna"}>
        <div>
        {user.user}
        <button onClick={loginFake}>Login Fake</button>
        <button onClick={login}>Login </button>
        <button onClick={handleLogin}>login z akcji</button>
        <button onClick={logout}>logout</button>
      </div>
        <Navbar />
        <Routes></Routes>
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};

export default App;
const Wrapper = styled.div`
  position: relative;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 3%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f3f0;
`;
