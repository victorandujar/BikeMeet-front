import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColorButton};
  height: 3.5rem;
  width: 18.75rem;
  color: ${(props) => props.theme.colors.mainColorText};
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
`;

export default ButtonStyled;
