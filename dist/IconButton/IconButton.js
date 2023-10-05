import React from "react";
const IconButton = ({ className = "", type = "button", onClick, onHover, primary = false, secondary = false, icon, }) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    };
    const handleHover = (event) => {
        if (onHover) {
            onHover(event);
        }
    };
    return (React.createElement("button", { className: `${className} rounded-full p-2
      ${!primary &&
            !secondary &&
            "bg-accent text-background hover:brightness-150"}
      ${primary && "bg-primary text-background hover:brightness-150 "}
      ${secondary && "bg-secondary text-primary hover:brightness-110 "} `, type: type, onClick: handleClick, onMouseOver: handleHover }, React.createElement(icon)));
};
export default IconButton;
//# sourceMappingURL=IconButton.js.map