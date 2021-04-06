import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 350px;
  height: 400px;
  overflow: hidden;
  margin: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 22px -15px rgba(0, 0, 0, 0.75);
`;
export const Img = styled.img`
  height: 70%;
  object-fit: cover;
`;

export const Title = styled.p`
  margin: 5px;

  font-size: 25px;
`;
export const Box = styled.div`
  margin: 5px 10px;
  display: flex;
  align-items: center;

  font-size: 20px;
`;
export const Persons = styled.div``;
export const Difficulty = styled.div``;
export const Text = styled.p`
  margin-left: 5px;
`;
export const ViewMore = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 700;
`;
