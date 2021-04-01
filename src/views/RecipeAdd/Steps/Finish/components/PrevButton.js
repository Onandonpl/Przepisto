import React from "react";
import { useHistory } from "react-router-dom";
import { NavButton } from "../style";

const PrevButton = ({ prev }) => {
  const history = useHistory();

  return (
    <NavButton
      onClick={() => {
        history.push(prev);
      }}
    >
      Poprzedni krok
    </NavButton>
  );
};

export default PrevButton;
