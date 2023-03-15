import { screen } from "@testing-library/react";
import { mockEventSaCosta } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Card from "./Card";
import "react-router-dom";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image of the event", () => {
      renderRouterWithProviders(<Card event={mockEventSaCosta} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Sa costa'", () => {
      const headingText = "Sa costa";

      renderRouterWithProviders(<Card event={mockEventSaCosta} />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a button with an aria-label 'delete'", () => {
      const text = "delete";

      renderRouterWithProviders(<Card event={mockEventSaCosta} />, {
        user: { id: "2392382308901", email: "", isLogged: true, token: "" },
      });

      const expecteButton = screen.getByRole("button", { name: text });

      expect(expecteButton).toBeInTheDocument();
    });
  });
});
