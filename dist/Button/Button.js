import React from "react";
const Button = ({ className = "", type = "button", onClick, onHover, children, primary = false, secondary = false, }) => {
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
    return (React.createElement("button", { className: `${className} rounded-full px-4 py-2 hover:brightness-110 
      ${!primary && !secondary && "bg-accent text-background"}
      ${primary && "bg-primary text-background"}
      ${secondary && "bg-secondary text-primary"} `, type: type, onClick: handleClick, onMouseOver: handleHover }, children));
};
export default Button;
//# sourceMappingURL=Button.js.map