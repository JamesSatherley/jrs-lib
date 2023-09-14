import React, { useState } from "react";

interface RadioGroupProps {
  options: string[];
  className: string;
}

const Radio: React.FC<RadioGroupProps> = ({ options, className = "mr-2" }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            className={className}
            type="radio"
            id={option}
            name="radio-group"
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
