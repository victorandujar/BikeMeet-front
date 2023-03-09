import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtil";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderWithProviders(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show 1 logo image", () => {
      renderWithProviders(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );
      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BIKEMEET'", () => {
      const headingText = "Bikemeet";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText.toUpperCase(),
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
