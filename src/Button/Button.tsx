import React, { FC, MouseEvent } from "react";
import { ButtonProps } from "./ButtonProps";

export const Button: FC<ButtonProps> = ({
  className = "",
  type = "button",
  onClick,
  onHover,
  children,
  primary = false,
  secondary = false,
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  const handleHover = (event: MouseEvent<HTMLButtonElement>) => {
    if (onHover) {
      onHover(event);
    }
  };

  return (
    <button
      className={`${className} rounded-full px-4 py-2 hover:brightness-110 
      ${!primary && !secondary && "bg-accent text-background"}
      ${primary && "bg-primary text-background"}
      ${secondary && "bg-secondary text-primary"} `}
      type={type}
      onClick={handleClick}
      onMouseOver={handleHover}
    >
      {children}
    </button>
  );
};
