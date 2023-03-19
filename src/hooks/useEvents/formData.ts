import { EventCreateStructure } from "../../types/events/types";

const formData = (event: EventCreateStructure) => {
  const data = new FormData();
  data.append("name", event.name);
  data.append("distance", event.distance);
  data.append("type", event.type);
  data.append("date", event.date.toLocaleString());
  data.append("description", event.description);
  data.append("image", event.image!);

  return data;
};

export default formData;
