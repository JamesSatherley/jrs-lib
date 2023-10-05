import React, { useState } from "react";
const Accordion = ({ sections }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (React.createElement("div", { className: "bg-background border border-text rounded-lg flex flex-col " }, sections.map((section, index) => (React.createElement("div", { onClick: () => setOpenIndex(index === openIndex ? null : index), key: index, className: "py-1 px-4 first-of-type:pt-1 last-of-type:pb-1 last-of-type:border-none border-b border-b-gray-500 cursor-pointer" },
        section.title,
        React.createElement("div", { className: `transition-all duration-500 ${openIndex === index ? "max-h-screen" : "max-h-0"} overflow-hidden` }, section.content))))));
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map