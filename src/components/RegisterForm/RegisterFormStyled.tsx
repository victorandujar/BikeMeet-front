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
    }

    &__field {
      font-family: inherit;
      height: 3.5rem;
      width: 18.125rem;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 0 14px;
    }
  }
`;

export default RegisterFormStyled;
