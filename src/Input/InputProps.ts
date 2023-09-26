import { ChangeEvent, MouseEvent, FocusEvent } from "react";

export interface InputProps {
  name: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}
