import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;
export const Form = styled.form`
  max-width: 350px;
  width: 100%;

  height: 30%;
  margin: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: 35px;
  font-weight: bold;
  label {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px;
  padding: 10px;

  border: 1px solid #b3b3b3;
  border-radius: 10px;

  appearance: textfield;

  &:hover {
    border-color: #febd2e;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin: 10px;
  padding: 10px;

  border: 1px solid #b3b3b3;
  border-radius: 10px;

  appearance: none;
  &:hover {
    border-color: #febd2e;
  }
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

export const SummaryContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;
export const Ingredients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Title = styled.p`
  font-weight: 700;
`;
export const Ingredient = styled.div`
  width: 300px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 5px 22px -15px rgba(0, 0, 0, 0.75);
`;
export const Button = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextArea = styled.textarea`
  width: 100%;
  margin: 10px;
  padding: 10px;

  border: 1px solid #b3b3b3;
  border-radius: 10px;

  &:hover {
    border-color: #febd2e;
  }
`;
