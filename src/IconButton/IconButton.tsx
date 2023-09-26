import React, { FC, MouseEvent } from "react";
import { IconButtonProps } from "./IconButtonProps";

const IconButton: FC<IconButtonProps> = ({
  className = "",
  type = "button",
  onClick,
  onHover,
  primary = false,
  secondary = false,
  icon,
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
      className={`${className} rounded-full p-2
      ${
        !primary &&
        !secondary &&
        "bg-accent text-background hover:brightness-150"
      }
      ${primary && "bg-primary text-background hover:brightness-150 "}
      ${secondary && "bg-secondary text-primary hover:brightness-110 "} `}
      type={type}
      onClick={handleClick}
      onMouseOver={handleHover}
    >
      {React.createElement(icon)}
    </button>
  );
};

export default IconButton;
