import { screen } from "@testing-library/react";
import { mockEventSaCosta } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image of the event", () => {
      renderWithProviders(<Card event={mockEventSaCosta} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Sa costa'", () => {
      const headingText = "Sa costa";

      renderWithProviders(<Card event={mockEventSaCosta} />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
