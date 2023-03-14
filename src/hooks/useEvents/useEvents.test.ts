import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockEvents } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadEventsActionCreator } from "../../store/features/eventsSlice/eventsSlice";
import { unsetIsLoadingActionCreator } from "../../store/features/uiSlice/uiSlice";
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

  describe("Given a getUserEvents function", () => {
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
});
