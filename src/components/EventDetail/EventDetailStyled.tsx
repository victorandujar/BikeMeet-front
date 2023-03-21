import styled from "styled-components";

const EventDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: inherit;
  width: 100%;

  .event-detail {
    &__image {
      border-radius: 5px;
      object-fit: cover;
      width: 100%;
    }

    &__title {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 2rem;
    }

    &__description {
      text-align: justify;
    }
  }

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &__details {
      display: flex;
      gap: 0.625rem;
      align-items: center;
      font-weight: 800;
    }

    &__event {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }

  .calendar {
    color: ${(props) => props.theme.colors.thirdColorText};
    font-size: 2rem;
  }

  .date {
    color: ${(props) => props.theme.colors.thirdColorText};
    font-family: ${(props) => props.theme.fonts.secondary};
    letter-spacing: 2px;
  }

  .background {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 15px;
      background-color: #e3e3e3;
    }
  }
`;

export default EventDetailStyled;
