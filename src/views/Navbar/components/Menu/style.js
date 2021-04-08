import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
`;
export const MenuExpanded = styled.div`
  position: absolute;
  bottom: -200px;
  left: -50px;
  width: 200px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  background-color: #ffdf85;
  a {
    margin: 5px;
    text-decoration: none;
    color: black;
  }
`;
