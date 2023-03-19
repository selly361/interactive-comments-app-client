import { IButtonProps } from "./Button.types";
import { buttonMap } from "utils/constants/buttonMap";

function Button({ type = 'primary-button', content, onClick }: IButtonProps) {
  const ButtonComponent = buttonMap[type];

  return <ButtonComponent onClick={onClick}>{content}</ButtonComponent>;
}

export default Button;
