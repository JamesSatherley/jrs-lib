import React, { useState } from "react";
const Radio = ({ options, className = "mr-2" }) => {
    const [selected, setSelected] = useState("");
    return (React.createElement("div", null, options.map((option, index) => (React.createElement("div", { key: index },
        React.createElement("input", { className: className, type: "radio", id: option, name: "radio-group", value: option, checked: selected === option, onChange: () => setSelected(option) }),
        React.createElement("label", { htmlFor: option }, option))))));
};
export default Radio;
//# sourceMappingURL=Radio.js.map