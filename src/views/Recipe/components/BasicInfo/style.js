import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Information = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Credentials = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  margin: 5px 0;
  display: flex;
`;



export const RecipeName = styled.p`
  text-transform: uppercase;
  font-size: 25px;
`;

export const RecipeAuthor = styled.p`
  font-size: 10px;
`;

export const Box = styled.div`
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  p {
    font-size: 25px;
  }
`;
