import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteEventActionCreator,
  loadEventActionCreator,
  loadEventsActionCreator,
} from "../../store/features/eventsSlice/eventsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  EventCreateStructure,
  EventDataStructure,
  EventsData,
} from "../../types/events/types";
import formData from "./formData";

const apiUrl = process.env.REACT_APP_URL_API;
const pathEvents = "/events";
const getEventsEndpoint = "/";
const getUserEventsEndpoint = "/my-events";
const deleteEventEndpoint = "/delete/";
const createEventEndpoint = "/create";
const eventByIdEndpoint = "/detail/";

const useEvents = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

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
          `${apiUrl}${pathEvents}${deleteEventEndpoint}${event.id}`,
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
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "The event has been deleted!",
          })
        );
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

  const createEvent = async (event: EventCreateStructure) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const data = formData(event);

      await fetch(`${apiUrl}${pathEvents}${createEventEndpoint}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          isSuccess: true,
          message: "The event has been created!",
        })
      );
      navigate("/my-space");
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "The event couldn't be created.",
        })
      );
    }
  };

  const findEventById = useCallback(
    async (idEvent: string) => {
      try {
        dispatch(setIsLoadingActionCreator());
        const response = await fetch(
          `${apiUrl}${pathEvents}${eventByIdEndpoint}${idEvent}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("We couldn't retrieve events. Try again!");
        }

        const { event } = (await response.json()) as EventsData;

        dispatch(unsetIsLoadingActionCreator());
        dispatch(loadEventActionCreator(event));
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: "No event found to show.",
          })
        );
      }
    },
    [dispatch, token]
  );

  return {
    getEvents,
    getUserEvents,
    deleteEvent,
    createEvent,
    findEventById,
  };
};

export default useEvents;
