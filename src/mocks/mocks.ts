import { EventDataStructure, EventsData } from "../types/events/types";
import { UiState } from "../types/ui/ui";

export const mockEventSaCosta: EventDataStructure = {
  name: "Sa costa",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Gravel",
  id: "sajkhdasdjkh",
};

export const mockEventMussara: EventDataStructure = {
  name: "Mussara",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: 123,
  image: "sacosta.png",
  type: "Road",
  id: "asdjkdhskdsjka",
};

export const mockEvents: EventsData = {
  events: [mockEventMussara, mockEventSaCosta],
};

export const mockIsLoadingState: UiState = {
  isLoading: false,
  modal: { isError: false, isSuccess: false, message: "" },
};

export const preloadedUiState: UiState = {
  modal: {
    isError: false,
    message: "The item has been deleted!",
    isSuccess: true,
  },
  isLoading: true,
};

export const preloadedErrorUiState: UiState = {
  modal: { isError: true, message: "Wrong credentials", isSuccess: false },
  isLoading: false,
};
