import { ReactElement } from "react";
import ButtonCardsStyled from "./ButtonCardsStyled";

interface ButtonProps {
  actionOnClick: () => void;
  icon: ReactElement;
  ariaLabel: string;
}

const ButtonCards = ({
  actionOnClick,
  icon,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonCardsStyled onClick={actionOnClick} aria-label={ariaLabel}>
      {icon}
    </ButtonCardsStyled>
  );
};

export default ButtonCards;
