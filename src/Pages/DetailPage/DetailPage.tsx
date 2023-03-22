import { useEffect } from "react";
import { useParams } from "react-router";
import EventDetail from "../../components/EventDetail/EventDetail";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppSelector } from "../../store/hooks";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): JSX.Element => {
  const { findEventById } = useEvents();
  const { event } = useAppSelector((state) => state.events);
  const { id } = useParams();

  useEffect(() => {
    findEventById(id!);
  }, [id, findEventById]);

  return (
    <DetailPageStyled className="detail-page">
      <header className="detail-page__title">
        <h2>Event details</h2>
      </header>
      <EventDetail event={event} />
    </DetailPageStyled>
  );
};

export default DetailPage;
