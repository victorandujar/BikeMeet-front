import React, { Suspense } from "react";
const RegisterForm = React.lazy(
  () => import("../../components/RegisterForm/RegisterForm")
);
const RegisterPageStyled = React.lazy(() => import("./RegisterPageStyled"));

const RegisterPage = (): JSX.Element => {
  return (
    <Suspense>
      <RegisterPageStyled>
        <header className="register-page">
          <h1 className="register-page__title">Sign up</h1>
        </header>
        <RegisterForm />
      </RegisterPageStyled>
    </Suspense>
  );
};

export default RegisterPage;
