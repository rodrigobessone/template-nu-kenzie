import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h3{
    font-family: Nunito;
    font-size: 16px;
    font-weight: 700;

}
span{
    font-family: Nunito;
    font-size: 12px;
    font-weight: 400;

}

`;

export default GlobalStyles;
