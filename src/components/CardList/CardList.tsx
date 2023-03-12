import { useEffect } from "react";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { getEvents } = useEvents();

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const events = useAppSelector((state) => state.event.events);

  return (
    <CardListStyled>
      {events?.map((event) => (
        <li key={event.id}>
          <Card event={event} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
