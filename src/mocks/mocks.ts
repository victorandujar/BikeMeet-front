import {
  EventCreateStructure,
  EventDataStructure,
  EventsData,
  EventsDataStructure,
} from "../types/events/types";
import { UiState } from "../types/ui/types";
import FormDataPolyfill from "form-data";

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
  date: "12/02/23",
  description: "lkdngjkfdabgjkdgbdsgnb",
  image: "dflkjdksfndfdk",
};

export const mockEventsDelete: EventsDataStructure = [mockEventSaCosta];

export const mockListEvents: EventsDataStructure = [
  mockEventMussara,
  mockEventSaCosta,
];

export const mockEvents: EventsData = {
  events: [mockEventMussara, mockEventSaCosta],
  event: mockEventMussara,
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

export const getMockNewEvent = (): FormDataPolyfill => {
  const data = new FormDataPolyfill();
  data.append("name", mockEventCreate.name);
  data.append("distance", mockEventCreate.distance);
  data.append("type", mockEventCreate.type);
  data.append("date", mockEventCreate.date.toLocaleString());
  data.append("description", mockEventCreate.description);
  data.append("image", mockEventCreate.image);
  return data;
};
