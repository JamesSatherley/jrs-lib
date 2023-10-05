import React, { useState } from "react";
import { CollapsibleProps } from "./CollapsibleProps";

export const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background border border-text rounded-lg flex flex-col py-2 px-4">
      <button
        className=" cursor-pointer text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div
        className={`transition-all duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};