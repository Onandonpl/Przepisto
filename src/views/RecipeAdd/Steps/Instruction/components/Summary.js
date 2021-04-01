import React from "react";

import { SummaryContainer, Title } from "../style";

import StepSummary from "./StepSummary";

const Summary = ({ data }) => {
  return (
    <SummaryContainer>
      <Title>Twoja instrukcja</Title>
      {data
        .map((step) => {
          return <StepSummary data={step} key={step.step}></StepSummary>;
        })
        .reverse()}
    </SummaryContainer>
  );
};

export default Summary;
