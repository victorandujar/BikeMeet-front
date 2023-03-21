import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CreatePage from "./CreatePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of cards with a card header 'Create your event'", async () => {
      const headerText = "Create your event";
      let expectedHeaderTitle;

      renderRouterWithProviders({}, <CreatePage />);

      await waitFor(
        () =>
          (expectedHeaderTitle = screen.getByRole("heading", {
            name: headerText,
          }))
      );

      expect(expectedHeaderTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'create event'", async () => {
      const expectedButtonText = "create event";
      let expectedButton;

      renderRouterWithProviders(
        {
          user: { id: "2392382308901", email: "", isLogged: true, token: "" },
        },

        <CreatePage />
      );

      await waitFor(
        () =>
          (expectedButton = screen.getByRole("button", {
            name: expectedButtonText,
          }))
      );

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
