import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EventDataStructure,
  EventsData,
  EventsDataStructure,
} from "../../../types/events/types";

const initialState: EventsData = {
  events: [],
  event: {
    date: "",
    description: "",
    distance: "",
    id: "",
    image: "",
    name: "",
    postedBy: "",
    type: "",
  },
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    loadEvents: (
      currentEventState,
      action: PayloadAction<EventsDataStructure>
    ) => ({
      ...currentEventState,
      events: action.payload,
    }),
    deleteEvent: (
      currentEventState,
      action: PayloadAction<EventDataStructure>
    ) => ({
      ...currentEventState,
      events: currentEventState.events.filter(
        (event) => event.id !== action.payload.id
      ),
    }),
    loadEvent: (
      currentEventState,
      action: PayloadAction<EventDataStructure>
    ) => ({
      ...currentEventState,
      event: action.payload,
    }),
  },
});

export const {
  loadEvents: loadEventsActionCreator,
  deleteEvent: deleteEventActionCreator,
  loadEvent: loadEventActionCreator,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
