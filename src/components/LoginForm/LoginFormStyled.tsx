import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: center;

  .login-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__field {
      font-family: inherit;
      height: 3.5rem;
      width: 18.75rem;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 0 14px;
    }
  }
`;

export default LoginFormStyled;
