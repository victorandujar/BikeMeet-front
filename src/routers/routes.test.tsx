import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRouterWithProviders } from "../testUtils/renderWithProviders";

beforeAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the router", () => {
  describe("When the app renders and the users clicks to the Home icon", () => {
    test("Then it should show the title Home", async () => {
      renderRouterWithProviders({
        user: { email: "", id: "", isLogged: true, token: "dtrfgyh" },
      });

      const homeButton = screen.getByRole("link", { name: "home" });
      await waitFor(async () => await userEvent.click(homeButton));

      const expectedTitle = await screen.findByText("Home");

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show the title My events", async () => {
      renderRouterWithProviders({
        user: { email: "", id: "", isLogged: true, token: "dtrfgyh" },
      });

      const homeButton = screen.getByRole("link", { name: "my space" });
      await waitFor(async () => await userEvent.click(homeButton));

      const expectedTitle = await screen.findByText("My Events");

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show the title Create event", async () => {
      renderRouterWithProviders({
        user: { email: "", id: "", isLogged: true, token: "dtrfgyh" },
      });

      const homeButton = screen.getByRole("link", { name: "create" });
      await waitFor(async () => await userEvent.click(homeButton));

      const expectedTitle = await screen.findByText("Create your event");

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
