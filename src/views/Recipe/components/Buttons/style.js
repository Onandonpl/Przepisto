import styled from "styled-components";

export const RecipeContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const Basic = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BasicName = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BasicButtons = styled.div`
  display: flex;
  justify-content: space-around;
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

export const IngredientsContainer = styled.div`
  margin: 20px 0;
`;
export const IngredientsTitle = styled.p`
  margin: 5px;
  font-size: 25px;
`;
export const SingleIngredient = styled.div`
  max-width: 350px;
  display: flex;
`;
export const IngredientInfo = styled.div`
  margin: 0 10px;
  display: flex;
  div {
    margin: 0 5px;
    display: flex;
    p {
      margin: 0 1px;
    }
  }
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px;

  background-color: #ffdf85;
  border: 2px solid #fec56c;
  border-radius: 5px;

  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImagesContainer = styled.div`
  max-width: 600px;
  max-height: 600px;
`;
