import React, { useState, ReactElement } from "react";
import { TabsProps } from "./TabsProps";

export const Tabs: React.FC<TabsProps> = ({ children, primary = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsArray = React.Children.toArray(children) as ReactElement[];

  return (
    <div>
      <div className="">
        {tabsArray.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`border-r last-of-type:border-none py-1 px-3 
            ${!primary && "border-primary"}
            ${
              primary &&
              "border-background bg-primary text-white hover:brightness-125"
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>{tabsArray[activeIndex]}</div>
    </div>
  );
};
