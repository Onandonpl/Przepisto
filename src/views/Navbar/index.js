import React from "react";
import styled from "styled-components";

import LogoutButton from "./components/LogoutButton/LogoutButton";
import LoginButton from "./components/LoginButton/LoginButton";
import RegisterButton from "./components/RegisterButton/RegisterButton";
import LogoButton from "./components/LogoButton/LogoButton";
import { useAuth } from "../../context/AuthContext";
import Menu from "./components/Menu/Menu";
const Navbar = () => {
  const authContext = useAuth();
  const { isLogged } = authContext;
  return (
    <Container>
      <LogoButton />
      <Buttons>
        {isLogged ? null : (
          <>
            <LoginButton /> <RegisterButton />
          </>
        )}

        {isLogged && (
          <>
            <Menu />
            <LogoutButton />
          </>
        )}
      </Buttons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  height: 50px;
  max-width: 1920px;
  width: 100%;
  padding: 0 20px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffdf85;
  box-shadow: 0px 7px 33px -20px rgba(0, 0, 0, 0.75);
`;

const Buttons = styled.div`
  display: flex;
`;
