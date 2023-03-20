import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import DetailPage from "./DetailPage";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Event details'", () => {
      const headerText = "Event details";

      renderRouterWithProviders({}, <DetailPage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
