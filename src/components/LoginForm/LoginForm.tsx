import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import Button from "../ButtonForm/ButtonForm";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });
  };

  const areFieldsEmpty = email === "" || password === "";

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
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
          onChange={handleEmail}
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
          aria-label="password-textbox"
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="login-form__field"
          autoComplete="off"
          onChange={handlePassword}
        />
      </div>
      <Button text={"Log in"} isDisabled={areFieldsEmpty} />
      <div className="link">
        Not a member? <Link to="/sign-up">Sign up</Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
