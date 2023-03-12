export interface EventDataStructure {
  name: string;
  distance: number;
  type: string;
  date: Date | string;
  description: string;
  image: string;
}

export type EventsDataStructure = EventDataStructure[];
