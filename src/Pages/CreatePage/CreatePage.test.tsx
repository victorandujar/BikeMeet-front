import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CreatePage from "./CreatePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of cards with a card header 'Create your event'", () => {
      const headerText = "Create your event";

      renderRouterWithProviders({}, <CreatePage />);

      const expectedHeaderTitle = screen.getByRole("heading", {
        name: headerText,
      });

      expect(expectedHeaderTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'create event'", () => {
      const expectedButtonText = "create event";
      renderRouterWithProviders(
        {
          user: { id: "2392382308901", email: "", isLogged: true, token: "" },
        },
        <CreatePage />
      );

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
