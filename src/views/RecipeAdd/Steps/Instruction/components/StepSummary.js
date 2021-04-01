import React from "react";
import {
  Step,
  StepTitle,
  StepDescription,
  StepDuration,
  Img,
  Images,
} from "../style";
const StepSummary = ({ data }) => {
  const { step, stepName, stepDescription, stepDuration, stepImages } = data;
  return (
    <Step>
      <StepTitle>
        {step}. {stepName}
      </StepTitle>
      <StepDescription>
        <p>Opis: </p>
        <p>{stepDescription}</p>
      </StepDescription>
      <StepDuration>Czas przygotowania: {stepDuration} minut.</StepDuration>
      <Images>
        {stepImages.map((image) => {
          console.log(image.src);

          return <Img key={image.src} src={image.src} alt="step"></Img>;
        })}
      </Images>
    </Step>
  );
};

export default StepSummary;
