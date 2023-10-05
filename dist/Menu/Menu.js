import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
const Menu = ({ children, primary = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const button = React.Children.toArray(children).find((child) => child.type === MenuButton);
    const items = React.Children.toArray(children).filter((child) => child.type === MenuItem);
    return (React.createElement("div", { className: "inline-block relative" },
        React.createElement("div", { onClick: () => setIsOpen(!isOpen) }, button),
        isOpen && (React.createElement("div", { className: `absolute z-10 mt-2 w-48 rounded-md  shadow-lg  ring-1 ring-black ring-opacity-5
        ${!primary && "bg-background"}
        ${primary && "bg-primary text-background"}` }, items))));
};
export default Menu;
//# sourceMappingURL=Menu.js.map