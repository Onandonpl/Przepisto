import React from "react";
import { AiOutlineFieldTime, AiFillSignal } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { Container, Img, Title, Box, Text, ViewMore } from "./style";
const RecipeSmall = ({ data, recipeID }) => {
  return (
    <Container>
      <Img src={data.images[0].src}></Img>
      <Title>
        <ViewMore to={`/recipe/${recipeID}`}>{data.name}</ViewMore>
      </Title>
      <Box>
        <AiOutlineFieldTime />
        <Text> {data.preparationTime} minut</Text>
      </Box>
      <Box>
        <BsFillPersonFill />
        <Text>{data.persons}</Text>
      </Box>
      <Box>
        <AiFillSignal />
        <Text>{data.difficulty}</Text>
      </Box>
    </Container>
  );
};

export default RecipeSmall;
