import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsData, EventsDataStructure } from "../../../types/events/types";

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
  },
});

export const { loadEvents: loadEventsActionCreator } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
