import { screen } from "@testing-library/react";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/renderWithProviders";
import { UserState } from "../../types/users/types";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigation bar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders({ user: user }, <Layout />);
      renderRouterWithProviders({
        ui: {
          isLoading: true,
          modal: { isError: false, isSuccess: false, message: "" },
        },
      });

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });

    test("Then it should show a a heading with the text 'BIKEMEET'", () => {
      const headerText = "BIKEMEET";

      renderWithProviders(<Layout />);

      const expectedLabel = screen.getByRole("heading", { name: headerText });

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
