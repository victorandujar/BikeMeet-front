import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { UserRegisterData } from "../../hooks/useUser/types";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Full name'", () => {
      const labelText = "Full name";

      renderRouterWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a labe with the text 'Email'", () => {
      const labelText = "Email";

      renderRouterWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Password'", () => {
      const labelText = "Password";

      renderRouterWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      renderRouterWithProviders(<RegisterForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then it changes the value of this input", async () => {
      const emailLabel = "Email";
      const emailText = "jordi@gmail.com";

      renderRouterWithProviders(<RegisterForm />);

      const emailInput = screen.getByLabelText(emailLabel);

      await act(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When the user wirtes in the password input", () => {
    test("Then it changes the value of this input", async () => {
      const passwordLabel = "Password";
      const passwordText = "12345678";

      renderRouterWithProviders(<RegisterForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(passwordInput, passwordText));

      expect(passwordInput).toHaveValue(passwordText);
    });
  });

  describe("When the user wirtes in the full name input", () => {
    test("Then it changes the value of this input", async () => {
      const nameLabel = "Full name";
      const nameText = "Josep Ventura";

      renderRouterWithProviders(<RegisterForm />);

      const nameInput = screen.getByLabelText(nameLabel);

      await act(async () => await userEvent.type(nameInput, nameText));

      expect(nameInput).toHaveValue(nameText);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      const emailInputPlaceholderText = "abc@email.com";
      const passwordInputPlaceholderText = "Introduce your password";
      const nameInputPlaceHolderText = "Josep Ventura";

      const mockUser: UserRegisterData = {
        email: "victor@gmail.com",
        password: "12345678",
        name: "victor",
      };

      renderRouterWithProviders(<RegisterForm />);

      const emailInputPlaceholder = screen.getByPlaceholderText(
        emailInputPlaceholderText
      );

      const passwordInputPlaceholder = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );

      const nameInputPlaceHolder = screen.getByPlaceholderText(
        nameInputPlaceHolderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () => await userEvent.type(emailInputPlaceholder, mockUser.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInputPlaceholder, mockUser.password)
      );

      await act(
        async () => await userEvent.type(nameInputPlaceHolder, mockUser.name)
      );

      await act(async () => await userEvent.click(submitButton));

      expect(mockRegisterUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
