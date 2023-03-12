import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockEvents } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadEventsActionCreator } from "../../store/features/eventsSlice/eventsSlice";
import { store } from "../../store/store";
import useApi from "./useApi";

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useApi custom hook", () => {
  describe("When the getEvents function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getEvents },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await getEvents();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadEventsActionCreator(mockEvents)
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
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await getEvents();

      expect(spyDispatch).not.toHaveBeenCalled();
    });
  });
});
