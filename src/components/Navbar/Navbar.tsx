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
      <NavLink to={"/"} aria-label="home">
        <FontAwesomeIcon icon={faHouseChimney} title="home" />
      </NavLink>
      <NavLink to={"/my-space"} aria-label="my space">
        <FontAwesomeIcon icon={faRectangleList} title="list" />
      </NavLink>
      <NavLink to={"/create"} aria-label="create">
        <FontAwesomeIcon icon={faPlus} title="create" />
      </NavLink>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        onClick={logoutUser}
        title="logout"
      />
    </NavbarStyled>
  );
};

export default Navbar;
