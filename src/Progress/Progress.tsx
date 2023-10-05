import React from "react";
import { ProgressProps } from "./ProgressProps";

export const Progress = ({ value, max }: ProgressProps) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`h-3 rounded-full w-3 ${
          value > 99.9 ? "bg-gray-300" : "bg-blue-500"
        }`}
      />
      <div className="w-full bg-gray-300 h-1">
        <div
          className="bg-blue-500 h-1"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
      <div
        className={`h-3 rounded-full w-3 ${
          value > 0 ? "bg-gray-300" : "bg-blue-500"
        }`}
      />
    </div>
  );
};
