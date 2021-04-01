import styled from "styled-components";

export const NavButton = styled.button`
  width: 100px;
  padding: 5px;
  margin: 10px;

  background-color: #fec56c;

  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  color: #242424;
  font-weight: 700;
  font-size: 10px;
  cursor: pointer;

  transition: linear 0.1s;
  &:hover {
    background-color: #febd2e;
  }
  &:focus {
    background-color: #febd2e;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
