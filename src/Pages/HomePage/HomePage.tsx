import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useEvents from "../../hooks/useEvents/useEvents";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getEvents } = useEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, [getEvents]);

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
