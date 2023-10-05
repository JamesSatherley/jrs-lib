import React, { useState } from "react";
const Slider = ({ min, max, className = "" }) => {
    const [value, setValue] = useState(min);
    return (React.createElement("input", { className: className, type: "range", min: min, max: max, value: value, onChange: (e) => setValue(Number(e.target.value)) }));
};
export default Slider;
//# sourceMappingURL=Slider.js.map