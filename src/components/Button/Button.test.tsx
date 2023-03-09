import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../styles/GlobalStyles";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      render(
        <>
          <GlobalStyles />
          <Button text={buttonText.toUpperCase()} />
        </>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText.toUpperCase(),
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
