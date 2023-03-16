import { ReactElement } from "react";

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
    <button onClick={actionOnClick} aria-label={ariaLabel}>
      {icon}
    </button>
  );
};

export default ButtonCards;
