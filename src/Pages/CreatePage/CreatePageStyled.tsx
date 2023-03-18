import styled from "styled-components";

const CreatePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6875rem;
  width: 100%;
  height: 100%;

  .title {
    &__text {
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }
`;

export default CreatePageStyled;
