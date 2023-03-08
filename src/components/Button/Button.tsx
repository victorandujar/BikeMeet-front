import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text.toUpperCase()}</ButtonStyled>;
};

export default Button;
