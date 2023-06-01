import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledHeader = styled.header`
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.gray1};

  div {
    display: flex;
    align-items: center;
    max-width: 65%;
    margin: 0 auto;
    height: 5.5rem;
  }
`;
export default StyledHeader;
