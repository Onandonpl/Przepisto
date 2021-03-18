import React from "react";
import { Helmet } from "react-helmet";
const Container = ({ helmet, children }) => {
  return (
    <>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Container;
