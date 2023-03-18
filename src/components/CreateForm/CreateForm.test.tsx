import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

describe("Given a CreateForm componente", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'create event'", () => {
      const expectedButtonText = "create event";
      renderWithProviders(<CreateForm />);

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show an input with for attribute text 'name'", () => {
      const text = "name";

      renderWithProviders(<CreateForm />);

      const expectedInput = screen.getByRole("textbox", { name: text });

      expect(expectedInput).toBeInTheDocument();
    });
  });
});
