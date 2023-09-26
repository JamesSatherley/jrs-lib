import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import { MenuProps } from "./MenuProps";

const Menu: React.FC<MenuProps> = ({ children, primary = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const button = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === MenuButton
  );

  const items = React.Children.toArray(children).filter(
    (child) => (child as React.ReactElement).type === MenuItem
  );

  return (
    <div className="inline-block relative">
      <div onClick={() => setIsOpen(!isOpen)}>{button}</div>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-48 rounded-md  shadow-lg  ring-1 ring-black ring-opacity-5
        ${!primary && "bg-background"}
        ${primary && "bg-primary text-background"}`}
        >
          {items}
        </div>
      )}
    </div>
  );
};

export default Menu;
