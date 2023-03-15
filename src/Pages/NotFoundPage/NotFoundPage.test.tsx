import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alt text 'page-not-foun'", () => {
      const expectedText = "page-not-found";

      renderRouterWithProviders(<NotFoundPage />);

      const expectedImage = screen.getByTestId(expectedText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a header with the text 'Oh NO!'", () => {
      const headerText = "Oh NO!";

      renderRouterWithProviders(<NotFoundPage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Back to home page'", () => {
      const expectedText = "Back to home page";

      renderRouterWithProviders(<NotFoundPage />);

      const expectedButton = screen.getByRole("button", {
        name: expectedText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
