export interface EventCreateStructure {
  name: string;
  distance: string;
  type: string;
  date: Date | string;
  description: string;
  image: File | string;
}
export interface EventDataStructure extends EventCreateStructure {
  id: string;
  postedBy: string;
}
export interface EventsData {
  events: EventsDataStructure;
}

export type EventsDataStructure = EventDataStructure[];
