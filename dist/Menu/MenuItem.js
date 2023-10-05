import React from "react";
const MenuItem = ({ label, href, primary }) => {
    return (React.createElement("a", { href: href, className: `block px-4 py-2 text-sm rounded
      ${!primary && "text-gray-700 hover:bg-gray-100"}
      ${primary && "text-background bg-primary hover:brightness-125"}` }, label));
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map