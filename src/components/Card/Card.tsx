import { EventDataStructure } from "../../types/events/types";
import {
  faPersonBiking,
  faRoad,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardStyled from "./CardStyled";

interface CardProps {
  event: EventDataStructure;
}

const Card = ({ event }: CardProps): JSX.Element => {
  const localDateFormat = event.date.toLocaleString().split("T")[0];

  return (
    <CardStyled className="card">
      <img
        src={event.image}
        alt={event.name}
        width={105}
        height={110}
        className="card__image"
      />
      <div className="card__data data">
        <div className="data__info">
          <span className="data__date">{localDateFormat}</span>
          <FontAwesomeIcon icon={faCircleInfo} className="data__icon" />
        </div>
        <h2 className="data__title">{event.name}</h2>
        <div className="data__info info">
          <div className="info__event event">
            <FontAwesomeIcon icon={faPersonBiking} className="event__icon" />
            <span className="event__data">{event.type}</span>
          </div>
          <div className="info__event event">
            <FontAwesomeIcon icon={faRoad} className="event__icon" />
            <span className="event__data">{event.distance} km</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
