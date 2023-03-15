import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { UserState } from "../../types/users/types";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a font awsome icon from Home", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders({ user: user }, <Navbar />);

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });
  });
});
