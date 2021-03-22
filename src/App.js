import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import { useTags, useDispatchTags } from "./context/TagsContext";
import { useIngredients } from "./context/IngredientsContext";
const App = () => {
  const tags = useTags();
  const ingredients = useIngredients();
  console.log(ingredients);
  console.log(tags);
  return (
    <Router>
      <Wrapper>
        <Container helmet={"Strona główna"}>
          <Navbar />
          {/* {tags.tags.map((tag) => (
            <div>{tag.name}</div>
          ))} */}
          <Routes></Routes>
          <GlobalStyle />
        </Container>
      </Wrapper>
    </Router>
  );
};

export default App;
const Wrapper = styled.div`
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
