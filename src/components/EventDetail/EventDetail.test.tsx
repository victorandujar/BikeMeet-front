import { screen } from "@testing-library/react";
import { mockEventMussara } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import EventDetail from "./EventDetail";

describe("Given a EventDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'back to home page'", () => {
      const textButton = "back to home page";

      renderRouterWithProviders({}, <EventDetail event={mockEventMussara} />);

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a header with the text 'Mussara'", () => {
      const textHeader = mockEventMussara.name;

      renderRouterWithProviders(
        { events: { events: [], event: mockEventMussara } },
        <EventDetail event={mockEventMussara} />
      );

      const expectedHeader = screen.getByRole("heading", { name: textHeader });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
