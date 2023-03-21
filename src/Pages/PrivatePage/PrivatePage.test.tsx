import { screen, waitFor } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import PrivatePage from "./PrivatePage";

describe("Given a PrivatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'My Events'", async () => {
      const headerText = "My Events";
      let expectedHeader;

      renderRouterWithProviders({}, <PrivatePage />);

      await waitFor(
        () =>
          (expectedHeader = screen.getByRole("heading", { name: headerText }))
      );

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
