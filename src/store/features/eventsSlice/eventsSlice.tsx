import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EventDataStructure,
  EventsData,
  EventsDataStructure,
} from "../../../types/events/types";

const initialState: EventsData = {
  events: [],
};

const eventsSlice = createSlice({
  name: "event",
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
    ) => {
      currentEventState.events.filter(
        (event) => event.id !== action.payload.id
      );
    },
  },
});

export const {
  loadEvents: loadEventsActionCreator,
  deleteEvent: deleteEventActionCreator,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
