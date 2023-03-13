import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { useAppSelector } from "../../store/hooks";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a token", () => {
    test("Then it should show the react element received by props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "vik27634fvj",
      });
      const element = <div>Protected route</div>;

      renderRouterWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Protected route");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a container with text `Text for test` and user without token", () => {
    test("Then it should shoudn't show the container with text `Text for tests`", () => {
      const text = "Text for test";
      const containerWithText = <div>{text}</div>;

      renderRouterWithProviders(<ProtectedRoute element={containerWithText} />);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
