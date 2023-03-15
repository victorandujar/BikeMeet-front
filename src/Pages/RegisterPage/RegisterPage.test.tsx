import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Sign up'", () => {
      const headertext = "Sign up";

      renderRouterWithProviders({}, <RegisterPage />);

      const expectedHeader = screen.getByRole("heading", { name: headertext });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'SIGN UP'", () => {
      const buttonText = "Sign up";

      renderRouterWithProviders({}, <RegisterPage />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
