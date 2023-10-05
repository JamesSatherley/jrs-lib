import { MouseEvent, ReactNode } from "react";
export interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onHover?: (event: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
}
