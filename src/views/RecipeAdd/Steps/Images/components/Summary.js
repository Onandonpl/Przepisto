import React from "react";
import { SummaryContainer, Images, Img, Title } from "../style";
const Summary = ({ data }) => {
  return (
    <SummaryContainer>
      <Title>Twoje zdjęcia</Title>
      <Images>
        {data.map((image) => {

          return <Img key={image.src} src={image.src} alt="step"></Img>;
        })}
      </Images>
    </SummaryContainer>
  );
};

export default Summary;
