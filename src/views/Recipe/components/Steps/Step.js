import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";

import {
  StepImage,
  StepCount,
  StepDuration,
  StepDescription,
  StepContainer,
} from "./style";
const Step = ({ step }) => {
  const { stepName, stepDescription, stepDuration, stepImages } = step;

  return (
    <StepContainer>
      <StepCount>
        <p>Krok {step.step}: </p> {stepName}
      </StepCount>
      <StepDuration>
        <AiOutlineFieldTime />
        <p>{stepDuration} minut.</p>
      </StepDuration>
      <StepDescription>
        <p>{stepDescription}</p>
        {stepImages.length !== 0 ? (
          <StepImage src={stepImages[0].src} alt="step" />
        ) : (
          <StepImage src={"/dinnerThumbExample.jpg"} alt="step" />
        )}
      </StepDescription>
    </StepContainer>
  );
};

export default Step;
