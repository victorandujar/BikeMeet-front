import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsDataStructure } from "../../../types/events/types";

const initialState: EventsDataStructure = [];

const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    loadEvents: (
      currentEventState,
      action: PayloadAction<EventsDataStructure>
    ) => [...action.payload],
  },
});

export const { loadEvents: loadEventsActionCreator } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
