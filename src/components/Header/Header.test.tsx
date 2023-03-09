import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderWithProviders(<Header />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show 1 logo image", () => {
      renderWithProviders(<Header />);
      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BIKEMEET'", () => {
      const headingText = "Bikemeet";

      renderWithProviders(<Header />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText.toUpperCase(),
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
