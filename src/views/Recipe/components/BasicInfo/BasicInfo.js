import React from "react";

import { AiOutlineFieldTime, AiFillSignal } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";

import PageTitle from "../../../../components/pageTitle";
import Buttons from "../Buttons/Buttons";
import {
  Container,
  Information,
  Info,
  RecipeName,
  RecipeAuthor,
  Box,
  Credentials,
} from "./style";

const BasicInfo = ({ pdfRef, data }) => {
  const {
    name,
    persons,
    difficulty,
    preparationTime,
    authorDisplayName,
    ingredients,
  } = data;

  const recipeCost = ingredients
    .map((elem) => {
      return parseFloat(elem.price) * parseFloat(elem.amount);
    })
    .reduce((prev, next) => {
      return prev + next;
    });

  return (
    <PageTitle helmet={name}>
      <Container>
        <Information>
          <Credentials>
            <RecipeName>{name}</RecipeName>
            <RecipeAuthor>Autor: {authorDisplayName}</RecipeAuthor>
          </Credentials>

          <Info>
            <Box>
              <p>
                <AiFillSignal />
              </p>
              {difficulty}
            </Box>

            <Box>
              <p>
                <BsFillPersonFill />
              </p>
              {persons}
            </Box>

            <Box>
              <p>
                <AiOutlineFieldTime />
              </p>
              {preparationTime} minut
            </Box>

            <Box>
              <p>
                <GrMoney />
              </p>
              {recipeCost} zł
            </Box>
          </Info>
        </Information>
        <Buttons pdfRef={pdfRef} name={name} />
      </Container>
    </PageTitle>
  );
};

export default BasicInfo;
