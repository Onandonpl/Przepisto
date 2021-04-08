import React from "react";
import { AiOutlineFieldTime, AiFillSignal } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import { Container, Img, Title, Box, Text, ViewMore } from "./style";
const RecipeThumb = ({ data, recipeID }) => {
  return (
    <Container>
      {data.images[0] ? (
        <Img src={data.images[0].src}></Img>
      ) : (
        <Img src="/dinnerThumbExample.jpg"></Img>
      )}

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

export default RecipeThumb;
