import LoginForm from "../../components/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoginPageStyled from "./LoginPageStyled";
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginPageStyled>
      <header className="login-page">
        <FontAwesomeIcon icon={faArrowLeft} />
        <h1 className="login-page__title">Log in</h1>
      </header>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
