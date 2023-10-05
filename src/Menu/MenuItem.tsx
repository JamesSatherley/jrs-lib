import React from "react";
import { MenuItemProps } from "./MenuItemProps";

export const MenuItem  = ({ label, href, primary }: MenuItemProps) => {
  return (
    <a
      href={href}
      className={`block px-4 py-2 text-sm rounded
      ${!primary && "text-gray-700 hover:bg-gray-100"}
      ${primary && "text-background bg-primary hover:brightness-125"}`}
    >
      {label}
    </a>
  );
};