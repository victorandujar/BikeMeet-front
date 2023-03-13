import { useCallback } from "react";
import { loadEventsActionCreator } from "../../store/features/eventsSlice/eventsSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { EventsData } from "../../types/events/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathEvents = "/events";
const getEventsEndpoint = "/events";

const useEvents = () => {
  const dispatch = useAppDispatch();

  const getEvents = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathEvents}${getEventsEndpoint}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );
      const { events } = (await response.json()) as EventsData;

      if (!response.ok) {
        return;
      }

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadEventsActionCreator(events));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getEvents };
};

export default useEvents;
