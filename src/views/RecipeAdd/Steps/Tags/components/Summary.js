import React from "react";
import { Title, SummaryContainer, Tag, Tags } from "../style";
const Summary = ({ data }) => {
  console.log(data);
  return (
    <SummaryContainer>
      <Title>Twoje Tagi</Title>
      <Tags>
        {data.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
    </SummaryContainer>
  );
};

export default Summary;
