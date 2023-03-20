import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockEventCreate } from "../../mocks/mocks";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

const mockCreateEventFunction = jest.fn();

jest.mock("../../hooks/useEvents/useEvents", () => () => ({
  createEvent: mockCreateEventFunction,
}));

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

  describe("When the user writes in the 'Event name' input", () => {
    test("Then it changes the value of this input", async () => {
      const nameLabel = "Event name";
      const nameText = "Sa Costa";

      renderRouterWithProviders({}, <CreateForm />);

      const nameInput = screen.getByLabelText(nameLabel);

      await act(async () => await userEvent.type(nameInput, nameText));

      expect(nameInput).toHaveValue(nameText);
    });
  });

  describe("When the user submits the form", () => {
    test("The crateEvent function should be called", async () => {
      const eventNameInputPlaceHolderText = "Introduce an event name";
      const distanceInputPlaceholderText = "Km";
      const typeSelectPlaceHolderText = "Surface";
      const dateInputPlaceHolderText = "Enter a valid date";
      const descriptionTextAreaPlaceHolderText = "Add a description";
      const imageInputPlaceHolderText = "Add an image";

      const picture = new File(["event"], "event.jpg", {
        type: "image/jpg",
      });

      renderRouterWithProviders({}, <CreateForm />);

      const nameInputPlaceholder = screen.getByPlaceholderText(
        eventNameInputPlaceHolderText
      );

      const distanceInputPlaceholder = screen.getByPlaceholderText(
        distanceInputPlaceholderText
      );

      const typeInputPlaceholder = screen.getByPlaceholderText(
        typeSelectPlaceHolderText
      );

      const dateInputPlaceholder = screen.getByPlaceholderText(
        dateInputPlaceHolderText
      );

      const decriptionInputPlaceholder = screen.getByPlaceholderText(
        descriptionTextAreaPlaceHolderText
      );

      const imageInputPlaceholder = screen.getByPlaceholderText(
        imageInputPlaceHolderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () =>
          await userEvent.type(nameInputPlaceholder, mockEventCreate.name)
      );

      await act(
        async () =>
          await userEvent.type(
            distanceInputPlaceholder,
            mockEventCreate.distance
          )
      );

      await act(async () => await userEvent.click(dateInputPlaceholder));

      await act(
        async () =>
          await userEvent.type(
            dateInputPlaceholder,
            mockEventCreate.date.toString()
          )
      );

      await act(
        async () =>
          await userEvent.selectOptions(
            typeInputPlaceholder,
            mockEventCreate.type
          )
      );

      await act(
        async () =>
          await userEvent.type(
            decriptionInputPlaceholder,
            mockEventCreate.description
          )
      );

      await act(
        async () => await userEvent.upload(imageInputPlaceholder, picture)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockCreateEventFunction).toHaveBeenCalled();
    });
  });
});
