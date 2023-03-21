import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserState } from "../../types/users/types";
import LoginPage from "./LoginPage";
import * as ReactRouterDom from "react-router-dom";
import "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Log in'", async () => {
      const headingText = "Log in";
      let expectedHeading;
      renderRouterWithProviders({}, <LoginPage />);

      await waitFor(
        () =>
          (expectedHeading = screen.getByRole("heading", {
            name: headingText,
          }))
      );

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOG IN'", async () => {
      const buttonText = "Log in";
      let expectedButton;

      renderRouterWithProviders({}, <LoginPage />);

      await waitFor(
        () =>
          (expectedButton = screen.getByRole("button", {
            name: buttonText,
          }))
      );

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should Navigate to the root path", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders({ user: user }, <LoginPage />);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
