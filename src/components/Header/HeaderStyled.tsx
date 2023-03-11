import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 0 60px 0;
  min-width: 100%;
  gap: 40px;

  .logo {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    &__title {
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 900;
      font-style: italic;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.thirdColorText};
    }
  }

  .main-header {
    &__navigation {
      display: flex;
      flex-direction: row;
      gap: 60px;
    }
  }

  .svg-inline--fa {
    height: 1.5em;
  }

  .fa-solid {
    color: ${(props) => props.theme.colors.secondaryColorText};

    &--active:hover {
      color: ${(props) => props.theme.colors.thirdColorText};
    }
  }
`;

export default HeaderStyled;
