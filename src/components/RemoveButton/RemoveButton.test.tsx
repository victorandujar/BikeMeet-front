import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { mockEventMussara } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RemoveButton from "./RemoveButton";

const mockDeleteEvent = jest.fn();

jest.mock("../../hooks/useEvents/useEvents", () => () => ({
  deleteEvent: mockDeleteEvent,
}));

describe("Given a RemoveButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with an aria-label 'delete'", () => {
      const text = "delete";

      renderWithProviders(<RemoveButton event={mockEventMussara} />);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should call the function deleteEvent when the user click the button", async () => {
      renderWithProviders(<RemoveButton event={mockEventMussara} />);

      const submitButton = screen.getByRole("button");

      await act(async () => await userEvent.click(submitButton));

      expect(mockDeleteEvent).toHaveBeenCalledWith(mockEventMussara);
    });
  });
});
