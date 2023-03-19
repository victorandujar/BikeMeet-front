import { EventDataStructure } from "../../types/events/types";
import {
  faPersonBiking,
  faRoad,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventDetailStyled from "./EventDetailStyled";
import ButtonForm from "../ButtonForm/ButtonForm";
import { Link } from "react-router-dom";

interface DetailProps {
  event: EventDataStructure;
}

const EventDetail = ({ event }: DetailProps): JSX.Element => {
  const localDateFormat = event.date.toLocaleString().split("T")[0];
  return (
    <EventDetailStyled className="event-detail">
      <img
        src={event.image.toString()}
        alt={event.name}
        width={265}
        height={200}
        className="event-detail__image"
      />
      <h2 className="event-detail__title">{event.name}</h2>
      <div className="event-detail__info info">
        <div className="info__details">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="info__icon calendar"
          />
          <span className="info__data date">{localDateFormat}</span>
        </div>
        <div className="info__event">
          <div className="info__details">
            <FontAwesomeIcon icon={faPersonBiking} className="info__icon" />
            <span className="info__data">{event.type}</span>
          </div>
          <div className="info__details">
            <FontAwesomeIcon icon={faRoad} className="info__icon" />
            <span className="info__data">{event.distance} km</span>
          </div>
        </div>
      </div>
      <p className="event-detail__description">{event.description}</p>
      <Link to={"/"}>
        <ButtonForm text="back to home page" isDisabled={false} />
      </Link>
    </EventDetailStyled>
  );
};

export default EventDetail;
