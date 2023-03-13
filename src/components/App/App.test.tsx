import { screen } from "@testing-library/react";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/renderWithProviders";
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
      renderWithProviders(<App />);

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
