import useEvents from "../../hooks/useEvents/useEvents";
import ButtonCards from "../ButtonCards/ButtonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EventDataStructure } from "../../types/events/types";

interface RemoveButtonProps {
  event: EventDataStructure;
}
const RemoveButton = ({ event }: RemoveButtonProps): JSX.Element => {
  const { deleteEvent } = useEvents();

  return (
    <ButtonCards
      actionOnClick={() => deleteEvent(event)}
      icon={<FontAwesomeIcon icon={faTrash} title="delete" />}
      ariaLabel={"delete"}
    />
  );
};

export default RemoveButton;
