import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./Button.styles";

import { IButtonProps } from "./Button.types";
import React from "react";

const buttonMap = {
  'primary-button': PrimaryButton,
  'secondary-button': SecondaryButton,
  'tertiary-button': TertiaryButton,
};

function Button({ type = 'primary-button', content, onClick }: IButtonProps) {
  const ButtonComponent = buttonMap[type];

  return <ButtonComponent onClick={onClick}>{content}</ButtonComponent>;
}

export default Button;
