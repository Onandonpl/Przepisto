import React from "react";
import styled from "styled-components";

const Summary = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data
        .map((step) => {
          return (
            <div data={step} key={step.step}>
              {/* {step.name} */}
            </div>
          );
        })
        .reverse()}
    </Container>
  );
};

export default Summary;
const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;
