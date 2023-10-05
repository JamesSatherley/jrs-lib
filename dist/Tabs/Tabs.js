import React, { useState } from "react";
const Tabs = ({ children, primary = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabsArray = React.Children.toArray(children);
    return (React.createElement("div", null,
        React.createElement("div", { className: "" }, tabsArray.map((tab, index) => (React.createElement("button", { key: index, onClick: () => setActiveIndex(index), className: `border-r last-of-type:border-none py-1 px-3 
            ${!primary && "border-primary"}
            ${primary &&
                "border-background bg-primary text-white hover:brightness-125"}` }, tab.props.label)))),
        React.createElement("div", null, tabsArray[activeIndex])));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map