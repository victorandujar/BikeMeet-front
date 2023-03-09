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
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 1.5rem;
    }
  }

  .svg-inline--fa {
    height: 1.5em;
  }

  .fa-solid {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secondaryColorText};

    &--active:hover {
      color: ${(props) => props.theme.colors.thirdColorText};
    }
  }
`;

export default LoginPageStyled;
