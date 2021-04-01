import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
font-family: 'Montserrat', sans-serif;
margin:0;
padding:0;
box-sizing:border-box;
}
`;

export default GlobalStyle;

export const Wrapper = styled.div`
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
