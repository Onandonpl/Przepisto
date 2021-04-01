import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./views/Navbar";
import Container from "./components/container";
import GlobalStyle, { Wrapper } from "./components/globals/GlobalStyle";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Container helmet={"Strona główna"}>
          <Navbar />
          <Routes></Routes>
          <GlobalStyle />
        </Container>
      </Wrapper>
    </Router>
  );
};

export default App;

