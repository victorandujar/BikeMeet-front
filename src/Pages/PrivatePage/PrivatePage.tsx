import { useEffect } from "react";
import useEvents from "../../hooks/useEvents/useEvents";
import React, { Suspense } from "react";
const CardList = React.lazy(() => import("../../components/CardList/CardList"));
const PrivatePageStyled = React.lazy(() => import("./PrivatePageStyled"));

const PrivatePage = (): JSX.Element => {
  const { getUserEvents } = useEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserEvents();
  }, [getUserEvents]);

  return (
    <Suspense>
      <PrivatePageStyled className="private-page">
        <header className="private-page__header">
          <h2>My Events</h2>
        </header>
        <CardList />
      </PrivatePageStyled>
    </Suspense>
  );
};

export default PrivatePage;
