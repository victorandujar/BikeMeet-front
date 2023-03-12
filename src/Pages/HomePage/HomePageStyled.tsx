import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6875rem;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export default HomePageStyled;
