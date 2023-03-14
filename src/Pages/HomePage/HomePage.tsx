import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useEvents from "../../hooks/useEvents/useEvents";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getEvents, getUserEvents } = useEvents();

  useEffect(() => {
    getEvents();
    getUserEvents();
  }, [getEvents, getUserEvents]);

  return (
    <HomePageStyled className="home-page">
      <header className="home-page__header">
        <h2>Home</h2>
      </header>
      <CardList />
    </HomePageStyled>
  );
};

export default HomePage;
