import {
  EventDataStructure,
  EventsDataStructure,
} from "../../../types/events/types";
import { eventsReducer, loadEventsActionCreator } from "./eventsSlice";

const mockEventSaCosta: EventDataStructure = {
  name: "Sa costa",
  date: new Date(),
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Gravel",
};

const mockEventMussara: EventDataStructure = {
  name: "Mussara",
  date: new Date(),
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Road",
};

const events: EventsDataStructure = [mockEventMussara, mockEventSaCosta];

describe("Given a users reducer", () => {
  describe("When it receives a new state and the action to load events", () => {
    test("Then it should return a list of 2 events", () => {
      const loadEventsAction = loadEventsActionCreator(events);
      const expectedEventsToLoad: EventsDataStructure = events;

      const newEvents = eventsReducer([], loadEventsAction);

      expect(newEvents).toStrictEqual(expectedEventsToLoad);
    });
  });
});
