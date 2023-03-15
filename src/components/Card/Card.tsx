import { EventDataStructure } from "../../types/events/types";
import {
  faPersonBiking,
  faRoad,
  faCircleInfo,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardStyled from "./CardStyled";
import { useAppSelector } from "../../store/hooks";

interface CardProps {
  event: EventDataStructure;
}

const Card = ({
  event: { date, distance, image, name, type, postedBy },
}: CardProps): JSX.Element => {
  const localDateFormat = date.toLocaleString().split("T")[0];
  const { id } = useAppSelector((state) => state.user);
  const isMySpace = postedBy === id;

  return (
    <CardStyled className="card">
      <img
        src={image}
        alt={name}
        width={105}
        height={110}
        className="card__image"
      />
      <div className="card__data data">
        <div className="data__detail">
          <span className="data__date">{localDateFormat}</span>
          <FontAwesomeIcon icon={faCircleInfo} className="data__icon" />
        </div>
        <h2 className="data__title">{name}</h2>
        <div className="data__info info">
          <div className="info__event event">
            <FontAwesomeIcon icon={faPersonBiking} className="event__icon" />
            <span className="event__data">{type}</span>
          </div>
          <div className="info__event event">
            <FontAwesomeIcon icon={faRoad} className="event__icon" />
            <span className="event__data">{distance} km</span>
          </div>
          {isMySpace && (
            <div className="my-space__buttons buttons">
              <button className="buttons__icon" aria-label="delete">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="buttons__icon" aria-label="modify">
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </div>
          )}
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
