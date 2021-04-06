import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./views/Navbar";
import GlobalStyle, { Wrapper } from "./components/globals/GlobalStyle";
const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes></Routes>
        <GlobalStyle />
      </Wrapper>
    </Router>
  );
};

export default App;
