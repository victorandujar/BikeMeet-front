import CardList from "../../components/CardList/CardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
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
