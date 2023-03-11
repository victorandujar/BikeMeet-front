import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Full name'", () => {
      const labelText = "Full name";

      renderWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a labe with the text 'Email'", () => {
      const labelText = "Email";

      renderWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Password'", () => {
      const labelText = "Password";

      renderWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      renderWithProviders(<RegisterForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
