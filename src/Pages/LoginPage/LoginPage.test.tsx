import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtil";
import LoginPage from "./LoginPage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Log in'", () => {
      const headingText = "Log in";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOG IN'", () => {
      const buttonText = "Log in";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <LoginPage />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
