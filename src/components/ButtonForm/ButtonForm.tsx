import ButtonFormStyled from "./ButtonFormStyled";

interface ButtonProps {
  text: string;
  isDisabled: boolean;
}

const Button = ({ text, isDisabled }: ButtonProps): JSX.Element => {
  return <ButtonFormStyled disabled={isDisabled}>{text}</ButtonFormStyled>;
};

export default Button;
