import HeaderStyled from "./HeaderStyled";
import {
  faHouseChimney,
  faRectangleList,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

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
        {isLogged && (
          <nav className="navigation">
            <NavLink to={"/"}>
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="fa-solid--active"
              />
            </NavLink>
            <NavLink to={"/my-space"}>
              <FontAwesomeIcon
                icon={faRectangleList}
                className="fa-solid--active"
              />
            </NavLink>
            <FontAwesomeIcon icon={faPlus} className="fa-solid--active" />
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="fa-solid--active"
              onClick={logoutUser}
            />
          </nav>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
