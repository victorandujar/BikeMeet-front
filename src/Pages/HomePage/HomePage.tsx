import { useEffect } from "react";
import useEvents from "../../hooks/useEvents/useEvents";
import React, { Suspense } from "react";
const CardList = React.lazy(() => import("../../components/CardList/CardList"));
const HomePageStyled = React.lazy(() => import("./HomePageStyled"));

const HomePage = (): JSX.Element => {
  const { getEvents } = useEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, [getEvents]);

  return (
    <Suspense>
      <HomePageStyled className="home-page">
        <header className="home-page__header">
          <h2>Home</h2>
        </header>
        <CardList />
      </HomePageStyled>
    </Suspense>
  );
};

export default HomePage;
