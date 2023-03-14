import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserState } from "../../types/users/types";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'BIKEMEET'", () => {
      const headerText = "BIKEMEET";

      renderRouterWithProviders(<App />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a navigation bar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders(<App />, { user: user });

      const expextedNavigationBar = screen.getByRole("navigation");

      expect(expextedNavigationBar).toBeInTheDocument();
    });

    test("Then it should show an image as logo", () => {
      renderRouterWithProviders(<App />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
