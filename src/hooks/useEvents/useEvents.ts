import { useCallback } from "react";
import {
  deleteEventActionCreator,
  loadEventsActionCreator,
} from "../../store/features/eventsSlice/eventsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { EventDataStructure, EventsData } from "../../types/events/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathEvents = "/events";
const getEventsEndpoint = "/";
const getUserEventsEndpoint = "/my-events";
const deleteEventEndpoint = "/delete/";

const useEvents = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

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

      if (!response.ok) {
        throw new Error("We couldn't retrieve events. Try again!");
      }

      const { events } = (await response.json()) as EventsData;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadEventsActionCreator(events));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: (error as Error).message,
        })
      );
    }
  }, [dispatch]);

  const getUserEvents = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathEvents}${getUserEventsEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("We couldn't retrieve events. Try again!");
      }

      const { events } = (await response.json()) as EventsData;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadEventsActionCreator(events));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "We couldn't retrieve events. Try again!",
        })
      );
      return (error as Error).message;
    }
  }, [dispatch, token]);

  const deleteEvent = useCallback(
    async (event: EventDataStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${pathEvents}${deleteEventEndpoint}${event.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("The event couldn't be deleted.");
        }

        dispatch(unsetIsLoadingActionCreator());
        dispatch(deleteEventActionCreator(event));
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: "The event couldn't be deleted.",
          })
        );
      }
    },
    [dispatch, token]
  );

  return { getEvents, getUserEvents, deleteEvent };
};

export default useEvents;
