import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <div className="login-form__section">
        <label htmlFor="email" className="login-form__title" aria-label="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Introduce your email"
          className="login-form__field"
        />
      </div>
      <div className="login-form__section">
        <label
          htmlFor="password"
          className="login-form__title"
          aria-label="password"
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          placeholder="Introduce your password"
          className="login-form__field"
        />
      </div>
      <Button text={"Log in"} />
    </LoginFormStyled>
  );
};

export default LoginForm;
