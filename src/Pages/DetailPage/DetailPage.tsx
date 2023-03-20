import { useEffect } from "react";
import { useParams } from "react-router";
import useEvents from "../../hooks/useEvents/useEvents";
import { useAppSelector } from "../../store/hooks";
import React, { Suspense } from "react";
const EventDetail = React.lazy(
  () => import("../../components/EventDetail/EventDetail")
);
const DetailPageStyled = React.lazy(() => import("./DetailPageStyled"));

const DetailPage = (): JSX.Element => {
  const { findEventById } = useEvents();
  const { event } = useAppSelector((state) => state.events);
  const { id } = useParams();

  useEffect(() => {
    findEventById(id!);
  }, [id, findEventById]);

  return (
    <Suspense>
      <DetailPageStyled className="detail-page">
        <header className="detail-page__title">
          <h2>Event details</h2>
        </header>
        <EventDetail event={event} />
      </DetailPageStyled>
    </Suspense>
  );
};

export default DetailPage;
