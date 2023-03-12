import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 18.375rem;
  background-color: ${(props) => props.theme.colors.cardBackGroundColor};
  padding: 12px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 4px 3.2px;

  .card {
    &__image {
      object-fit: cover;
      border-radius: 16px;
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    &__info {
      display: flex;
      justify-content: space-between;
    }

    &__date {
      color: ${(props) => props.theme.colors.thirdColorText};
    }

    &__title {
      font-size: 18px;
      font-family: ${(props) => props.theme.fonts.secondary};
    }

    &__icon {
      font-size: 18px;
    }
  }

  .info {
    display: flex;
    gap: 2rem;
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
