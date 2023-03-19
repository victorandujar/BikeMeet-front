import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import {
  mockEventCreate,
  mockEventMussara,
  mockListEvents,
} from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import {
  deleteEventActionCreator,
  loadEventsActionCreator,
} from "../../store/features/eventsSlice/eventsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { store } from "../../store/store";
import useEvents from "./useEvents";

beforeAll(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useEvents custom hook", () => {
  describe("When the getEvents function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadEventsActionCreator(mockListEvents)
      );
    });
  });

  describe("When the getEvents function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModal dispatch", async () => {
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "We couldn't retrieve events. Try again!",
        })
      );
    });
  });

  describe("When the getUserEvents is called", () => {
    test("Then it should make a request with an authorization header", async () => {
      const {
        result: {
          current: { getUserEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getUserEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadEventsActionCreator(mockListEvents)
      );
    });
  });

  describe("Given a getUserEvents function and an error happens", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the unsetIsLoading dispatch", async () => {
      const {
        result: {
          current: { getUserEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getUserEvents();

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });

    test("Then it should call the openModal dispatch", async () => {
      const {
        result: {
          current: { getUserEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getUserEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "We couldn't retrieve events. Try again!",
        })
      );
    });
  });
});

describe("Given a useEvents custom hook and a deleteEvent function", () => {
  describe("When the deleteEvent function is called", () => {
    test("Then it should call the setIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await deleteEvent(mockEventMussara);

      expect(spyDispatch).toHaveBeenCalledWith(setIsLoadingActionCreator());
    });

    test("Then it should should call the unsetIsLoadingActionCreator discpath", async () => {
      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await deleteEvent(mockEventMussara);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });

    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await deleteEvent(mockEventMussara);

      expect(spyDispatch).toHaveBeenCalledWith(
        deleteEventActionCreator(mockEventMussara)
      );
    });
  });

  describe("When the response respond with an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModalActionCreator", async () => {
      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await deleteEvent(mockEventMussara);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "The event couldn't be deleted.",
        })
      );
    });
  });
});

describe("Given a useEvents custom hook and the createEvent function", () => {
  describe("When the createEvent function is called", () => {
    test("Then it should call the openModal action creator", async () => {
      const {
        result: {
          current: { createEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await createEvent(mockEventCreate);

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When the response respond with an error", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the openModalActionCreator", async () => {
      const {
        result: {
          current: { createEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await createEvent(mockEventCreate);

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "The event couldn't be created.",
        })
      );
    });
  });
});
