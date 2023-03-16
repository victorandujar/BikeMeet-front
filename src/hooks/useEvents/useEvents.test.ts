import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockEventMussara, mockEvents } from "../../mocks/mocks";
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

afterEach(() => {
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
        loadEventsActionCreator(mockEvents.events)
      );
    });
  });

  describe("When the getEvents function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getEvents();

      expect(spyDispatch).not.toHaveBeenCalledWith(
        loadEventsActionCreator(mockEvents.events)
      );
    });
  });

  describe("When the getUserEvents is called", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
    });

    test("Then it should make a request with an authorization header", async () => {
      const token = "";
      const {
        result: {
          current: { getUserEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getUserEvents();

      expect(global.fetch).toHaveBeenCalledWith(
        `${process.env.REACT_APP_URL_API}/events/my-events`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
  });
  describe("Given a getUserEvents function and an error happens", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getUserEvents },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await getUserEvents();

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When te deleteEvent function is called", () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });

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

    test("Then it should call the openModalActionCreator", async () => {
      const mockErrorMessage = "Error message";
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error(mockErrorMessage)
      );

      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      await deleteEvent(mockEventMussara);

      expect(spyDispatch).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "Error message",
        })
      );
    });

    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteEvent },
        },
      } = renderHook(() => useEvents(), { wrapper: Wrapper });

      (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true });
      await deleteEvent(mockEventMussara);
      expect(spyDispatch).toHaveBeenCalledWith(
        deleteEventActionCreator(mockEventMussara)
      );
    });
  });
});
