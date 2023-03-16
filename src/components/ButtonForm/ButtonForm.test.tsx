import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Button from "./ButtonForm";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      renderWithProviders(
        <Button text={buttonText.toUpperCase()} isDisabled />
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText.toUpperCase(),
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
