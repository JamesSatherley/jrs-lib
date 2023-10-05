import React, { useState } from "react";
import { AccordionProps } from "./AccordionProps";

export const Accordion = ({ sections }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-background border border-text rounded-lg flex flex-col ">
      {sections.map((section, index) => (
        <div
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
          key={index}
          className="py-1 px-4 first-of-type:pt-1 last-of-type:pb-1 last-of-type:border-none border-b border-b-gray-500 cursor-pointer"
        >
          {section.title}

          <div
            className={`transition-all duration-500 ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            } overflow-hidden`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};
