import React from "react";
import { ButtonProps } from "./Button.types";

const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
