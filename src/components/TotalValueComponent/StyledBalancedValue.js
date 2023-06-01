import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyleBalancedValue = styled.section`
  background-color: #ffffff;
  width: 100%;
  max-width: 22.1875rem;
  height: 6rem;
  margin-top: 1.125rem;
  border-radius: 0.25rem;
  border: 1px solid ${Theme.colors.gray2};
  padding: 1.25rem 1.4375rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-top: 1.2rem;
    font-family: "Nunito";
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: ${Theme.colors.gray3};
  }

  h3 {
    color: ${Theme.colors.primary};
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }

  span {
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    color: ${Theme.colors.gray4};
  }

  @media(max-width: 768px){
    margin: 1rem auto;
  }
  
`;
export default StyleBalancedValue;
