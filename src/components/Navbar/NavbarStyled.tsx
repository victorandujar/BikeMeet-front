import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .svg-inline--fa {
    height: 1.5em;
  }

  .active {
    color: ${(props) => props.theme.colors.thirdColorText};
  }
`;

export default NavbarStyled;
