import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 360px;
  background-color: ${(props) => props.theme.colors.cardBackGroundColor};
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 4px 3.2px;

  .card {
    &__image {
      object-fit: cover;
      border-radius: 16px 16px 0 0;
      width: 100%;
      height: 200px;
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    padding: 12px;
    width: 100%;

    &__detail {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    &__date {
      color: ${(props) => props.theme.colors.thirdColorText};
    }

    &__title {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    &__icon {
      font-size: 1.5rem;
    }
  }

  .info {
    display: flex;
    gap: 2.5rem;
  }

  .event {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 18px;

    &__data {
      font-size: 14px;
    }
  }
`;

export default CardStyled;
