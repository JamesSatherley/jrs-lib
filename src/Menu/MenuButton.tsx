import React, { ReactNode } from "react";

interface MenuButtonProps {
  children: ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children }) => {
  return <>{children}</>;
};

export default MenuButton;
