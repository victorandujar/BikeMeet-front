import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <div className="login-page">
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
        <h1 className="login-page__title">Log in</h1>
      </div>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
