import { MouseEvent } from "react";
import { AiFillEye } from "react-icons/ai";
type IconType = typeof AiFillEye;
export interface IconButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onHover?: (event: MouseEvent<HTMLButtonElement>) => void;
    primary?: boolean;
    secondary?: boolean;
    icon: IconType;
}
export {};
