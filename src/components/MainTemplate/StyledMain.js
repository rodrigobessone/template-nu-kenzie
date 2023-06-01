import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 65%;
  margin: 2.4375rem auto;
  display: flex;
  gap: 3.75rem;
@media (max-width: 768px){
  flex-direction: column;
  max-width: 100%;
  margin: 2.4375rem 1rem;
}
`;

export default StyledMain;
