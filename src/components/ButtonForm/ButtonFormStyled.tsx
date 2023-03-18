import styled from "styled-components";

const ButtonFormStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColorButton};
  height: 3.5rem;
  width: 100%;
  color: ${(props) => props.theme.colors.mainColorText};
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;

  :disabled {
    opacity: 70%;
  }
`;

export default ButtonFormStyled;
