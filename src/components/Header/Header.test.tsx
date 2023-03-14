import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";

import Header from "./Header";
import { UserState } from "../../types/users/types";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 1 logo image", () => {
      renderRouterWithProviders(<Header />);
      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BIKEMEET'", () => {
      const headingText = "Bikemeet";

      renderRouterWithProviders(<Header />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText.toUpperCase(),
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a font awsome icon from Home", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders(<Header />, { user: user });

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });
  });
});
