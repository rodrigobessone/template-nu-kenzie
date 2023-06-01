import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledItem = styled.li`
  padding: 0.625rem 0.875rem;
  background-color: ${Theme.colors.gray1};
  border-radius: 0.25rem;
  border-left: 4px solid
    ${(props) =>
      props.type === '0' ? Theme.colors.secondary : Theme.colors.gray2};
  list-style: none;
  border-bottom: 1rem;
  margin-top: 1rem;
`;

export default StyledItem;
