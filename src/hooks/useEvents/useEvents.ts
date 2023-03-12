import { useCallback } from "react";
import { loadEventsActionCreator } from "../../store/features/eventsSlice/eventsSlice";
import { useAppDispatch } from "../../store/hooks";
import { EventsDataStructure } from "../../types/events/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathEvents = "/events";
const getEventsEndpoint = "/events";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getEvents = useCallback(async () => {
    try {
      const response = await fetch(
        `${apiUrl}${pathEvents}${getEventsEndpoint}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );
      const events = (await response.json()) as EventsDataStructure;

      if (!response.ok) {
        return;
      }

      dispatch(loadEventsActionCreator(events));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getEvents };
};

export default useApi;
