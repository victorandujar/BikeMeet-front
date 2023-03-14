import { screen } from "@testing-library/react";
import Card from "../../components/Card/Card";
import { mockEventSaCosta } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import PrivatePage from "./PrivatePage";

describe("Given a PrivatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'My Events'", () => {
      const headerText = "My Events";

      renderRouterWithProviders(<PrivatePage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a Card with a title 'Mussara'", () => {
      const expectedText = "Sa costa";

      renderRouterWithProviders(<Card event={mockEventSaCosta} />);

      const expectedTitle = screen.getByRole("heading", { name: expectedText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
