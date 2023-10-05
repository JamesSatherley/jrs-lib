import React from "react";
import { TabProps } from "./TabProps";

export const Tab = ({ label, children }: TabProps) => {
  return <div className="p-3">{children}</div>;
};