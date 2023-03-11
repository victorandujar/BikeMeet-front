export interface EventDataStructure {
  name: string;
  distance: number;
  type: string;
  date: Date;
  description: string;
  image: string;
}

export type EventsDataStructure = EventDataStructure[];
