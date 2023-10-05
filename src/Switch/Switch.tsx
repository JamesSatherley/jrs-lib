import React, { useState } from "react";
import { SwitchProps } from "./SwitchProps";

export const Switch = ({ defaultOn = false }: SwitchProps) => {
  const [isOn, setIsOn] = useState(defaultOn);

  return (
    <div
      className={`w-16 h-8 rounded-full p-1 cursor-pointer relative bg-gray-300`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-6 h-6 rounded-full absolute transition-all transform 
         ${isOn ? "translate-x-8 bg-primary" : "translate-x-0 bg-secondary"}`}
        style={{
          transition:
            "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};
