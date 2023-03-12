export interface EventDataStructure {
  name: string;
  distance: number;
  type: string;
  date: Date | string;
  description: string;
  image: string;
  id: string;
}

export interface EventsData {
  events: EventsDataStructure;
}

export type EventsDataStructure = EventDataStructure[];
