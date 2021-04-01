import React from "react";

import { Container } from "./style";

import NameForm from "./components/NameForm";
import PageTitle from "../../../../components/pageTitle";

const Name = () => {
  return (
    <PageTitle helmet={"Podstawowe informacje"}>
      <Container>
        <p>Podstawowe informacje</p>
        <NameForm />
      </Container>
    </PageTitle>
  );
};

export default Name;
