import HeaderStyled from "./HeaderStyled";
import {
  faHouseChimney,
  faRectangleList,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (): JSX.Element => {
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
      <nav className="main-header__navigation">
        <FontAwesomeIcon icon={faHouseChimney} className="fa-solid--active" />
        <FontAwesomeIcon icon={faRectangleList} className="fa-solid--active" />
        <FontAwesomeIcon icon={faPlus} className="fa-solid--active" />
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="fa-solid--active"
        />
      </nav>
    </HeaderStyled>
  );
};

export default Header;
