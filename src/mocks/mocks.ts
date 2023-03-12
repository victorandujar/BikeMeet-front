import { EventDataStructure, EventsDataStructure } from "../types/events/types";

export const mockEventSaCosta: EventDataStructure = {
  name: "Sa costa",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Gravel",
};

export const mockEventMussara: EventDataStructure = {
  name: "Mussara",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Road",
};

export const mockEvents: EventsDataStructure = [
  mockEventMussara,
  mockEventSaCosta,
];
