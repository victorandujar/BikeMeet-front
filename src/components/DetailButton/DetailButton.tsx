import ButtonCards from "../ButtonCards/ButtonCard";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { EventDataStructure } from "../../types/events/types";

interface DetailButtonProps {
  event: EventDataStructure;
}

const DetailButton = ({ event }: DetailButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <ButtonCards
      icon={<FontAwesomeIcon icon={faCircleInfo} className="data__icon" />}
      actionOnClick={() => {
        navigate(`/detail/${event.id}`);
      }}
      ariaLabel="detail"
    ></ButtonCards>
  );
};

export default DetailButton;
