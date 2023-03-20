import { screen } from "@testing-library/react";
import { mockEvents } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card list with a Card, and a Card header name 'Sa costa'", () => {
      const headerText = "Sa costa";

      renderRouterWithProviders(
        {
          events: {
            events: mockEvents.events,
            event: {
              date: "",
              description: "",
              distance: "",
              id: "",
              image: "",
              name: "",
              postedBy: "",
              type: "",
            },
          },
        },
        <CardList />
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
