import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtil";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Button text={buttonText.toUpperCase()} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText.toUpperCase(),
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
