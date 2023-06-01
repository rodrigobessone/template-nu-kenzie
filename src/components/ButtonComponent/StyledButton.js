import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.insertValue ? `${Theme.colors.primary}` : `${Theme.colors.gray2}`};
  width: ${(props) => (props.insertValue ? "100%" : "3.0625rem")};
  height: ${(props) => (props.insertValue ? "3rem" : "1.1875rem")};
  border-radius: ${(props) => (props.insertValue ? "0.5rem" : "0.125rem")};
  font-size: ${(props) => (props.insertValue ? "1rem" : "0.625rem")};
  color: ${(props) =>
    props.insertValue ? `#ffffff` : `${Theme.colors.gray4}`};
  border: none;
  margin-top: ${(props) => (props.insertValue ? `1.625rem` : `0.375rem`)};
  font-weight: ${(props) => (props.insertValue ? `500` : `400`)};
  cursor: pointer;
`;

export default StyledButton;
