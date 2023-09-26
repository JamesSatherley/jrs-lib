import React, { FC } from "react";
import { AvatarProps } from "./AvatarProps";

const getInitials = (name: string) => {
  const words = name.split(" ");
  return words.length < 2
    ? words[0][0]
    : `${words[0][0]}${words[words.length - 1][0]}`;
};

const Avatar: FC<AvatarProps> = ({
  name = "?",
  bg = "#aaaaaa",
  colour = "#222222",
  scale = 1,
}) => {
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

export default Avatar;
