import CardList from "../../components/CardList/CardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h2>Home</h2>
      <CardList />
    </HomePageStyled>
  );
};

export default HomePage;
