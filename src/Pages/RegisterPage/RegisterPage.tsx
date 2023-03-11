import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <header className="register-page">
        <h1 className="register-page__title">Sign up</h1>
      </header>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
