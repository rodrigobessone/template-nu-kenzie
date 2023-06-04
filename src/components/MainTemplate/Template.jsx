import React from "react";
import Header from "../HeaderComponent/Header";
import StyledMain from "./StyledMain";

// A função Template é um componente que recebe a prop children, representando o conteúdo a ser renderizado dentro do template. 
// No retorno JSX, temos um fragmento vazio para envolver os elementos seguintes. O primeiro elemento é o componente <Header />, 
// que renderiza o cabeçalho do template. O segundo elemento é o componente <StyledMain>, que envolve o conteúdo children. Essa 
// prop especial permite que outros componentes ou elementos sejam passados para dentro do componente Template.
function Template({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Template;
