import React, { useState } from "react";
import { SliderProps } from "./SliderProps";

export const Slider = ({ min, max, className = "" }: SliderProps) => {
  const [value, setValue] = useState(min);

  return (
    <input
      className={className}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};
