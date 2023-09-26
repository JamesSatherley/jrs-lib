import React, { useState } from "react";
import { SliderProps } from "./SliderProps";

const Slider: React.FC<SliderProps> = ({ min, max, className = "" }) => {
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

export default Slider;
