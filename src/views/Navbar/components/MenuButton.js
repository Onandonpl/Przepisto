import React from "react";
import styled from "styled-components";

const MenuButton = () => {
  return (
    <Container>
      <p>Menu</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-menu-2"
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
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </Container>
  );
};

export default MenuButton;
const Container = styled.div`
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