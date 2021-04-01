import React from "react";
import styled from "styled-components";
import PageTitle from "../../components/pageTitle";
const Home = () => {
  return (
    <PageTitle helmet={"Strona główna"}>
      <Container>Home</Container>
    </PageTitle>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
