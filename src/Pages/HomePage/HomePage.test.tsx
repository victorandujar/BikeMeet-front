import { screen, waitFor } from "@testing-library/react";
import { mockEvents } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import HomePage from "./HomePage";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockEvents.events,
}));

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of cards with a card header 'Mussara'", async () => {
      const headerText = "Mussara";

      let expectedHeaderCard;

      renderRouterWithProviders({}, <HomePage />);

      await waitFor(
        () =>
          (expectedHeaderCard = screen.getByRole("heading", {
            name: headerText,
          }))
      );

      expect(expectedHeaderCard).toBeInTheDocument();
    });
  });
});
