import React from "react";

interface MenuItemProps {
  label: string;
  href: string;
  primary?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, primary }) => {
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

export default MenuItem;
