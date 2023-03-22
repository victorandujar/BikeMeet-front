import {
  EventCreateStructure,
  EventDataStructure,
  EventsData,
  EventsDataStructure,
} from "../types/events/types";
import { UiState } from "../types/ui/types";

export const mockEventSaCosta: EventDataStructure = {
  name: "Sa costa",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: "123",
  image: "",
  type: "Gravel",
  id: "sajkhdasdjkh",
  postedBy: "2392382308901",
};

export const mockEventMussara: EventDataStructure = {
  name: "Mussara",
  date: "20/02/03",
  description: "asdjklksadhdashdjk",
  distance: "123",
  image: "sacosta.png",
  type: "Road",
  id: "asdjkdhskdsjka",
  postedBy: "2392382308901",
};

export const mockEventCreate: EventCreateStructure = {
  name: "Sa Barava",
  distance: "123",
  type: "Road",
  date: "2023-03-31T00:00",
  description: "lkdngjkfdabgjkdgbdsgnb",
  image: "image.jpg",
};

export const mockEventsDelete: EventsDataStructure = [mockEventSaCosta];

export const mockListEvents: EventsDataStructure = [
  mockEventMussara,
  mockEventSaCosta,
];

export const mockEvents: EventsData = {
  events: [mockEventMussara, mockEventSaCosta],
  event: {
    name: "Mussara",
    date: "20/02/03",
    description: "asdjklksadhdashdjk",
    distance: "123",
    image: "sacosta.png",
    type: "Road",
    id: "asdjkdhskdsjka",
    postedBy: "2392382308901",
  },
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

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  },
};
