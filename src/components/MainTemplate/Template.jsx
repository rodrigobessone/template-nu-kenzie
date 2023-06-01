import React from "react";
import Header from "../HeaderComponent/Header";
import StyledMain from "./StyledMain";

function Template({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Template;
