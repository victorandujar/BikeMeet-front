import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader with the aria-label attribute 'The page is loading'", () => {
      const labelText = "The page is loading";

      renderWithProviders(<Loader />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
