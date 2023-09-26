export interface ToastProps {
  message: string;
  type: "warning" | "error" | "info";
  duration: number;
  isVisible: boolean;
  setIsVisible: Function;
}
