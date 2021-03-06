import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;

export const Submit = styled.button`
  width: 200px;
  padding: 10px;
  margin: 10px;

  background-color: #fec56c;

  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  color: #242424;
  font-weight: 700;

  cursor: pointer;

  transition: linear 0.1s;
  &:hover {
    background-color: #febd2e;
  }
  &:focus {
    background-color: #febd2e;
  }
`;

//////////////////////////////
export const SummaryContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
///////////////////////////////

export const Title = styled.p`
  font-weight: 700;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 5px 15px;
`;
export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;
`;


