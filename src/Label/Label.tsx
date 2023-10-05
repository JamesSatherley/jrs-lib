import React from "react";
import { LabelProps } from "./LabelProps";

export const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};
