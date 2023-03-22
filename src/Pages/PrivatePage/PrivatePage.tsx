import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useEvents from "../../hooks/useEvents/useEvents";
import PrivatePageStyled from "./PrivatePageStyled";

const PrivatePage = (): JSX.Element => {
  const { getUserEvents } = useEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserEvents();
  }, [getUserEvents]);

  return (
    <PrivatePageStyled className="private-page">
      <header className="private-page__header">
        <h2>My Events</h2>
      </header>
      <CardList />
    </PrivatePageStyled>
  );
};

export default PrivatePage;
