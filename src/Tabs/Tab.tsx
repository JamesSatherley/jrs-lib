import React from "react";
import { TabProps } from "./TabProps";

export const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div className="p-3">{children}</div>;
};
