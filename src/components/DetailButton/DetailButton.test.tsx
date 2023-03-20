import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockEventMussara } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import DetailButton from "./DetailButton";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a DetailButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show button with an aria-label text 'detail'", () => {
      const text = "detail";

      renderRouterWithProviders({}, <DetailButton event={mockEventMussara} />);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should call the function findEventById when the user clicks the button", async () => {
      renderRouterWithProviders({}, <DetailButton event={mockEventMussara} />);

      const submitButton = screen.getByRole("button");

      await act(async () => await userEvent.click(submitButton));

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
