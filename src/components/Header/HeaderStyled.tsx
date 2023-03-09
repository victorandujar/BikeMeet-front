import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 0 60px 0;

  .logo {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    &__title {
      font-weight: 900;
      font-style: italic;
      font-size: 1rem;
      color: var(--third-color-text);
    }
  }

  .main-header {
    &__navigation {
      display: flex;
      gap: 15px;
    }
  }

  .svg-inline--fa {
    height: 1.5em;
  }

  .fa-solid {
    color: var(--secondary-color-text);

    &--active:hover {
      color: var(--third-color-text);
    }
  }
`;

export default HeaderStyled;
