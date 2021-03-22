import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <RegisterLink to={"/register"}>
      <p>Zarejestruj się</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user-plus"
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
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11h6m-3 -3v6" />
      </svg>
    </RegisterLink>
  );
};

export default RegisterButton;
const RegisterLink = styled(Link)`
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
