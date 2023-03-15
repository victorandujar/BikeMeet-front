import { act, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Password'", () => {
      const labelText = "Password";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Email'", () => {
      const labelText = "Email";

      renderRouterWithProviders({}, <LoginForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then it changes the value of this input", async () => {
      const emailLabel = "Email";
      const emailText = "jordi@gmail.com";

      renderRouterWithProviders({}, <LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);

      await act(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When the user wirtes in the password input", () => {
    test("Then it changes the value of this input", async () => {
      const passwordLabel = "Password";
      const passwordText = "12345678";

      renderRouterWithProviders({}, <LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(passwordInput, passwordText));

      expect(passwordInput).toHaveValue(passwordText);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      const emailInputPlaceholderText = "abc@email.com";
      const passwordInputPlaceholderText = "Introduce your password";

      const mockUser: UserCredentials = {
        email: "victor@gmail.com",
        password: "12345678",
      };

      renderRouterWithProviders({}, <LoginForm />);

      const emailInputPlaceholder = screen.getByPlaceholderText(
        emailInputPlaceholderText
      );

      const passwordInputPlaceholder = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () => await userEvent.type(emailInputPlaceholder, mockUser.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInputPlaceholder, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
