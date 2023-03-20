import {
  mockEventMussara,
  mockEvents,
  mockEventSaCosta,
} from "../../../mocks/mocks";
import { EventsData, EventsDataStructure } from "../../../types/events/types";
import {
  deleteEventActionCreator,
  eventsReducer,
  loadEventActionCreator,
  loadEventsActionCreator,
} from "./eventsSlice";

const events: EventsDataStructure = [mockEventMussara, mockEventSaCosta];
const initialEventsState: EventsData = {
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

describe("Given a events reducer", () => {
  describe("When it receives a new state and the action to load events", () => {
    test("Then it should return a list of 2 events", () => {
      const loadEventsAction = loadEventsActionCreator(events);
      const expectedEventsToLoad: EventsData = {
        events: events,
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

      const newEvents = eventsReducer(initialEventsState, loadEventsAction);

      expect(newEvents).toStrictEqual(expectedEventsToLoad);
    });
  });

  describe("When it receives a new state and the action to delete events", () => {
    test("Then it should delete an event", () => {
      const deleteEventAction = deleteEventActionCreator(mockEventMussara);
      const expectedNewArray: EventsData = {
        events: [mockEventSaCosta],
        event: mockEventMussara,
      };

      const deletedEvent = eventsReducer(mockEvents, deleteEventAction);

      expect(deletedEvent).toStrictEqual(expectedNewArray);
    });
  });

  describe("When it receives a new state and an action to loadEvent", () => {
    describe("Then it should load that event", () => {
      const loadEventAction = loadEventActionCreator(mockEventMussara);
      const expectedNewEvent: EventsData = {
        events: [],
        event: mockEventMussara,
      };

      const loadedEvent = eventsReducer(initialEventsState, loadEventAction);

      expect(expectedNewEvent).toStrictEqual(loadedEvent);
    });
  });
});
