import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserState } from "../../types/users/types";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navigation bar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders(<Layout />, { user: user });

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });

    test("Then it should show a a heading with the text 'BIKEMEET'", () => {
      const headerText = "BIKEMEET";

      renderRouterWithProviders(<Layout />, {
        ui: {
          isLoading: true,
          modal: { isError: false, isSuccess: false, message: "" },
        },
      });

      const expectedLabel = screen.getByRole("heading", { name: headerText });

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then if isLoading is false it should not show the Loader component", () => {});
  });
});
