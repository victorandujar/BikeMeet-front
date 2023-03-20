import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: center;
  width: 100%;

  .register-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
    }

    &__field {
      font-family: inherit;
      height: 3.5rem;
      width: 100%;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 0 14px;
    }
  }

  .link {
    &__text {
      color: ${(props) => props.theme.colors.thirdColorText};
      font-weight: 800;
    }
  }
`;

export default RegisterFormStyled;
