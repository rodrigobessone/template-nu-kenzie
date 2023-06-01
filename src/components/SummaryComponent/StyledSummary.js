import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledSummary = styled.section`
    width: 60%;
    max-height: 34.25rem;
    max-width: 35rem;

    ul {
      list-style: none;
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-family: "Nunito";
      font-size: 1.375rem;
      font-weight: 700;
      color: ${Theme.colors.gray3};
      margin-top: 1.5rem;
    }

    h3 {
      font-family: "Nunito";
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-family: "Nunito";
      font-size: 12px;
      font-weight: 400;
    }

    span {
      margin-top: 0.375rem;
      font-family: "Nunito";
      font-size: 12px;
      font-weight: 400;
    }

    button {
      margin-top: 0.125rem;
      font-family: Nunito;
      font-size: 10px;
      font-weight: 400;
    }
  }
  @media(max-width: 768px){
    width: 100%;
    max-width: 22.1875rem;
    margin: 4rem auto;
  }
`;

export default StyledSummary;
