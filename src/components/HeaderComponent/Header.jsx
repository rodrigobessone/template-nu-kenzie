import React from "react";
import StyledHeader from "./StyledHeader";

// A função Header é um componente que retorna um JSX. Ele renderiza um componente StyledHeader contendo um elemento div com uma imagem
// (<img>) que exibe um logo.
function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="/nukenzie.svg" alt="logo-nu-kenzie" />
      </div>
    </StyledHeader>
  );
}

export default Header;
