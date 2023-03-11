import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled className="register-form">
      <div className="register-form__section">
        <label
          htmlFor="name"
          className="register-form__title"
          aria-label="name"
        >
          Full name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Josep Ventura"
          className="register-form__field"
          autoComplete="off"
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="email"
          className="register-form__title"
          aria-label="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="abc@email.com"
          className="register-form__field"
          autoComplete="off"
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="password"
          className="register-form__title"
          aria-label="password"
        >
          Password
        </label>
        <input
          aria-label="password-textbox"
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="register-form__field"
          autoComplete="off"
        />
      </div>
      <Button text={"Sign up"} isDisabled={false} />
      <div className="link">
        Already a member? <a href="log-in">Log in</a>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
