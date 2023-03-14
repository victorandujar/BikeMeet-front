import HeaderStyled from "./HeaderStyled";
import { useAppSelector } from "../../store/hooks";
import Navbar from "../Navbar/Navbar";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <HeaderStyled className="main-header">
      <div className="main-header__logo logo">
        <img
          src="images/Logo.png"
          alt=""
          width={40}
          height={35}
          className="logo__image"
        />
        <h2 className="logo__title">BIKEMEET</h2>
      </div>

      <div className="main-header__navigation navigation">
        {isLogged && <Navbar />}
      </div>
    </HeaderStyled>
  );
};

export default Header;
