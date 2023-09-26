import React from "react";
import { TabProps } from "./TabProps";

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div className="p-3">{children}</div>;
};

export default Tab;
