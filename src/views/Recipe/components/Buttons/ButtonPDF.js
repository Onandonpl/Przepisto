import React from "react";
import ReactToPdf from "react-to-pdf";
import { Button } from "./style";

const ButtonPDF = ({ pdfRef, name }) => {
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [1114, 1112],
  };
  return (
    <ReactToPdf
      targetRef={pdfRef}
      filename={name}
      options={options}
      x={0.5}
      y={0.5}
      scale={1}
    >
      {({ toPdf }) => <Button onClick={toPdf}>Pobierz pdf</Button>}
    </ReactToPdf>
  );
};

export default ButtonPDF;
