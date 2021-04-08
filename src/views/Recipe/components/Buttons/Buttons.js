import React from "react";

import { BasicButtons } from "./style";

import ButtonPDF from "./ButtonPDF";
import ButtonFavorite from "./ButtonFavorite";
import ButtonShopList from "./ButtonShopList";

const Buttons = ({ name, pdfRef }) => {
  return (
    <BasicButtons>
      <ButtonPDF pdfRef={pdfRef} name={name} />
      <ButtonFavorite />
      <ButtonShopList />
    </BasicButtons>
  );
};

export default Buttons;
