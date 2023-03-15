import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import PrivatePage from "./PrivatePage";

describe("Given a PrivatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'My Events'", () => {
      const headerText = "My Events";

      renderRouterWithProviders({}, <PrivatePage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
