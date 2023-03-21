import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alt text 'page-not-foun'", async () => {
      const expectedText = "page-not-found";
      let expectedImage;

      renderRouterWithProviders({}, <NotFoundPage />);

      await waitFor(() => (expectedImage = screen.getByTestId(expectedText)));

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a header with the text 'Oh NO!'", async () => {
      const headerText = "Oh NO!";
      let expectedHeader;

      renderRouterWithProviders({}, <NotFoundPage />);

      await waitFor(
        () =>
          (expectedHeader = screen.getByRole("heading", { name: headerText }))
      );

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Back to home page'", async () => {
      const expectedText = "Back to home page";
      let expectedButton;

      renderRouterWithProviders({}, <NotFoundPage />);

      await waitFor(
        () =>
          (expectedButton = screen.getByRole("button", {
            name: expectedText,
          }))
      );

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
