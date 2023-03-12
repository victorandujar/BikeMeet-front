import { screen } from "@testing-library/react";
import { mockEvents } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CardList from "./CardList";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockEvents.events,
}));

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card list with a Card, and a Card header name 'Sa costa'", () => {
      const headerText = "Sa costa";

      renderWithProviders(<CardList />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
