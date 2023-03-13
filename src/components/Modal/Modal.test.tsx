import { preloadedErrorUiState, preloadedUiState } from "../../mocks/mocks";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Modal from "./Modal";

jest.mock("../../modals/modals", () => ({
  showErrorToast: jest.fn(),
  showSuccessToast: jest.fn(),
}));

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should show the message 'Wrong credentials' in a toast", () => {
      const expectedMessage = "Wrong credentials";

      renderWithProviders(<Modal />, { ui: preloadedErrorUiState });

      expect(showErrorToast).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it is rendered with a succes action and the message 'The item has ben deleted!'", () => {
    test("Then it should show the message 'The item has been deleted' in a toast", () => {
      const expectedMessage = "The item has been deleted!";

      renderWithProviders(<Modal />, { ui: preloadedUiState });

      expect(showSuccessToast).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
