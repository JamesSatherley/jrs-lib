import React from "react";
const Progress = ({ value, max }) => {
    return (React.createElement("div", { className: "flex flex-row items-center" },
        React.createElement("div", { className: `h-3 rounded-full w-3 ${value > 99.9 ? "bg-gray-300" : "bg-blue-500"}` }),
        React.createElement("div", { className: "w-full bg-gray-300 h-1" },
            React.createElement("div", { className: "bg-blue-500 h-1", style: { width: `${(value / max) * 100}%` } })),
        React.createElement("div", { className: `h-3 rounded-full w-3 ${value > 0 ? "bg-gray-300" : "bg-blue-500"}` })));
};
export default Progress;
//# sourceMappingURL=Progress.js.map