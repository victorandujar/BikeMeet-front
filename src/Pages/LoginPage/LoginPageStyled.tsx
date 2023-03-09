import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;

  .login-page {
    display: flex;
    gap: 20px;
    align-items: center;

    &__title {
      font-size: 1.5rem;
    }
  }
  .fa-solid {
    font-size: 1.2rem;
    color: var(--secondary-color-text);

    &--active:hover {
      color: var(--third-color-text);
    }
  }
`;

export default LoginPageStyled;
