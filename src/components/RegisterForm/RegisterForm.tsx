import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import Button from "../ButtonForm/ButtonForm";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await registerUser({ email, password, name });
  };

  const areFieldsEmpty = email === "" || password === "" || name === "";

  return (
    <RegisterFormStyled className="register-form" onSubmit={onSubmitHandler}>
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
          onChange={handleName}
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
          onChange={handleEmail}
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
          onChange={handlePassword}
        />
      </div>
      <Button text={"Sign up"} isDisabled={areFieldsEmpty} />
      <div className="link">
        Already a member? <Link to="/login">Log in</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
