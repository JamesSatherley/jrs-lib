import React from "react";
import { LabelProps } from "./LabelProps";

export const Label = ({ text, htmlFor }: LabelProps) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};