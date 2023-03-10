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
      width: 100%;
    }
  }
`;

export default LoginPageStyled;
