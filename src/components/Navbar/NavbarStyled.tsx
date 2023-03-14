import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  gap: 62px;
  width: 100%;
  justify-content: space-between;

  .svg-inline--fa {
    height: 1.5em;
  }

  .fa-solid {
    color: ${(props) => props.theme.colors.secondaryColorText};
  }

  :active {
    color: ${(props) => props.theme.colors.thirdColorText};
  }
`;

export default NavbarStyled;
