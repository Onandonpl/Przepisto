import React from "react";
import { useHistory } from "react-router-dom";
import { Container, NavButton } from "./style";
const NavigationButtons = ({ prev, next }) => {
  const history = useHistory();

  return (
    <Container>
      <NavButton
        onClick={() => {
          history.push(prev);
        }}
      >
        Poprzedni krok
      </NavButton>
      <NavButton
        onClick={() => {
          history.push(next);
        }}
      >
        Następny krok
      </NavButton>
    </Container>
  );
};

export default NavigationButtons;
