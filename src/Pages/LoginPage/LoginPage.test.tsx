import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Log in'", () => {
      const headingText = "Log in";

      renderRouterWithProviders({}, <LoginPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOG IN'", () => {
      const buttonText = "Log in";

      renderRouterWithProviders({}, <LoginPage />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
