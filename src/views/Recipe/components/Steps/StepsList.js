import React from "react";
import { Container } from "./style";
import Step from "./Step";
const StepsList = ({ steps }) => {
  return (
    <Container>
      {steps
        .map((step) => {
          return <Step step={step} />;
        })
        .reverse()}
    </Container>
  );
};

export default StepsList;
