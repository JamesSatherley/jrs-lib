import React, { useState } from "react";
const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (React.createElement("div", { className: "bg-background border border-text rounded-lg flex flex-col py-2 px-4" },
        React.createElement("button", { className: " cursor-pointer text-left", onClick: () => setIsOpen(!isOpen) }, title),
        React.createElement("div", { className: `transition-all duration-500 ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden` }, children)));
};
export default Collapsible;
//# sourceMappingURL=Collapsible.js.map