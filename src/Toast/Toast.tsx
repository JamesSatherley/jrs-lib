import React, { useEffect } from "react";
import { ToastProps } from "./ToastProps";

export const Toast = ({
  message,
  type,
  isVisible,
  setIsVisible,
  duration = 3000,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible, duration, setIsVisible]);

  if (!isVisible) return null;

  let bgColor = "bg-green-500";
  switch (type) {
    case "warning":
      bgColor = "bg-yellow-400";
      break;
    case "error":
      bgColor = "bg-red-500";
      break;
    case "info":
      bgColor = "bg-blue-500";
      break;
    default:
      bgColor = "bg-green-500";
  }

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 p-4 rounded ${bgColor} text-white`}
    >
      {message}
    </div>
  );
};
