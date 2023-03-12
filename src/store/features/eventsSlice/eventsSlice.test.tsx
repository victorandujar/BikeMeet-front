import { mockEventMussara, mockEventSaCosta } from "../../../mocks/mocks";
import { EventsData, EventsDataStructure } from "../../../types/events/types";
import { eventsReducer, loadEventsActionCreator } from "./eventsSlice";

const events: EventsDataStructure = [mockEventMussara, mockEventSaCosta];
const initialEventsState: EventsData = {
  events: [],
};

describe("Given a users reducer", () => {
  describe("When it receives a new state and the action to load events", () => {
    test("Then it should return a list of 2 events", () => {
      const loadEventsAction = loadEventsActionCreator(events);
      const expectedEventsToLoad: EventsData = {
        events: events,
      };

      const newEvents = eventsReducer(initialEventsState, loadEventsAction);

      expect(newEvents).toStrictEqual(expectedEventsToLoad);
    });
  });
});
