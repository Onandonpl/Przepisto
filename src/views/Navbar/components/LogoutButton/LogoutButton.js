import React from "react";
import styled from "styled-components";
import { auth } from "../../../../lib/firebase";
import { useDispatchAuth } from "../../../../context/AuthContext";
const LogoutButton = () => {
  const authDispatch = useDispatchAuth();

  const handleLogout = () => {
    auth.signOut();
    authDispatch({ type: "LOGOUT" });
    localStorage.removeItem("authUser");
  };

  return (
    <Button onClick={handleLogout}>
      <p>Wyloguj</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-logout"
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
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
    </Button>
  );
};

export default LogoutButton;

const Button = styled.button`
  margin: 0 10px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  p {
    font-size: 15px;

    margin-right: 5px;
  }
  &:hover {
    svg {
      stroke: red;
    }
  }
`;
