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
        <FontAwesomeIcon icon={faHouseChimney} />
      </NavLink>
      <NavLink to={"/my-space"}>
        <FontAwesomeIcon icon={faRectangleList} />
      </NavLink>
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faRightFromBracket} onClick={logoutUser} />
    </NavbarStyled>
  );
};

export default Navbar;
