import { NavLink } from "react-router-dom";
import {
  faHouseChimney,
  faRectangleList,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../../hooks/useUser/useUser";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  const { logoutUser } = useUser();
  return (
    <NavbarStyled className="navigation-bar">
      <NavLink to={"/"}>
        <FontAwesomeIcon icon={faHouseChimney} className="fa-solid--active" />
      </NavLink>
      <NavLink to={"/my-space"}>
        <FontAwesomeIcon icon={faRectangleList} className="fa-solid--active" />
      </NavLink>
      <FontAwesomeIcon icon={faPlus} className="fa-solid--active" />
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="fa-solid--active"
        onClick={logoutUser}
      />
    </NavbarStyled>
  );
};

export default Navbar;
