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
          type="email"
          id="email"
          placeholder="abc@email.com"
          className="login-form__field"
          autoComplete="off"
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
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="login-form__field"
          autoComplete="off"
        />
      </div>
      <Button text={"Log in"} />
      <div className="link">
        Not a member? <a href="sign up">Sign up</a>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
