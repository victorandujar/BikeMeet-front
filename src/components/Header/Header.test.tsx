import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

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
  });
});
