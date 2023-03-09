import { ToastContainer } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <header className="login-page">
        <FontAwesomeIcon icon={faArrowLeft} />
        <h1 className="login-page__title">Log in</h1>
      </header>
      <LoginForm />
      <ToastContainer hideProgressBar />
    </LoginPageStyled>
  );
};

export default LoginPage;
