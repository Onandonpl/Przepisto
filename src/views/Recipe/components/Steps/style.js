import styled from "styled-components";

export const Container = styled.div`
  margin: 25px 0;
`;
export const StepContainer = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: rgba(254, 197, 108, 0.3);
`;
export const StepImage = styled.img`
  height: 100px;
  width: 150px;
`;

export const StepCount = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 5px;
    font-weight: 700;
  }
`;

export const StepDuration = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  p {
    margin: 0 5px;
  }
`;

export const StepDescription = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  p {
  }
`;
