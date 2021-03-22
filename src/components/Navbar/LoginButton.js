import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <LoginLink to={"/login"}>
      <p>Zaloguj</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-login"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
      </svg>
    </LoginLink>
  );
};

export default LoginButton;

const LoginLink = styled(Link)`
  margin: 0 10px;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: #242424;
  p {
    font-size: 15px;

    margin-right: 5px;
  }
`;
