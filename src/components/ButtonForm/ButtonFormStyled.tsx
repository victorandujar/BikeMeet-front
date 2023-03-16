import styled from "styled-components";

const ButtonFormStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColorButton};
  height: 3.5rem;
  width: 18.125rem;
  color: ${(props) => props.theme.colors.mainColorText};
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;

  :disabled {
    :disabled {
      opacity: 70%;
    }
  }
`;

export default ButtonFormStyled;
