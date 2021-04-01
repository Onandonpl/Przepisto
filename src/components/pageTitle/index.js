import React from "react";
import { Helmet } from "react-helmet";
const PageTitle = ({ helmet, children }) => {
  return (
    <>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageTitle;
