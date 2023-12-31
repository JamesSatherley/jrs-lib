import React from "react";
import { AvatarProps } from "./AvatarProps";

export const getInitials = (name: string) => {
  const words = name.split(" ");
  return words.length < 2
    ? words[0][0]
    : `${words[0][0]}${words[words.length - 1][0]}`;
};

export const Avatar = ({
  name = "?",
  bg = "#aaaaaa",
  colour = "#222222",
  scale = 1,
}: AvatarProps) => {
  const scaling = 2.5 * 16 * scale;
  return (
    <div
      className={`rounded-full flex justify-center items-center text-surface-50 hover:brightness-110`}
      style={{
        backgroundColor: bg,
        height: scaling,
        width: scaling,
        fontSize: scaling / 2,
        color: colour,
      }}
    >
      {getInitials(name)}
    </div>
  );
};
