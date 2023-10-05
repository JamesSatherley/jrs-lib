import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Input = ({ name, type = "text", onChange, onClick, onFocus, onBlur, placeholder, className = "!w-36", primary = false, secondary = false, }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (React.createElement("div", { className: `flex flex-row border-b border-primary w-min
    ${!primary && !secondary && "bg-inherit py-1 px-1"}
    ${primary && "bg-text rounded-t py-2 px-4"}
    ${secondary && "bg-background rounded-t py-2 px-4"} ` },
        React.createElement("input", { className: `${className} text-primary-700 placeholder-primary-500 focus:outline-none 
        ${!primary && !secondary && "bg-inherit "}
        ${primary && "bg-text text-background"}
        ${secondary && "bg-background text-text"} `, name: name, type: showPassword ? type : "text", onChange: onChange, onClick: onClick, onFocus: onFocus, onBlur: onBlur, placeholder: placeholder, spellCheck: false }),
        type === "password" && (React.createElement("div", { className: "mt-1 ml-2", onClick: () => setShowPassword(!showPassword) }, showPassword ? (React.createElement(AiFillEye, { size: 18, className: "text-primary-700" })) : (React.createElement(AiFillEyeInvisible, { size: 18, className: "text-primary-700" }))))));
};
export default Input;
//# sourceMappingURL=Input.js.map