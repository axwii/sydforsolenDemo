import React from "react";
import { cn } from "@/lib/utils";
import { InteractiveHoverLink } from "./interactive-hover-link";

interface InteractiveButtonProps {
  variant?: "light" | "dark" | "alternative" | "dynamic";
  className?: string;
  children: React.ReactNode;
}

const baseStyles = "group relative w-auto cursor-pointer overflow-hidden border p-2 px-6 text-center font-semibold transition-all font-[helvetica-light] uppercase text-[1rem] [transition-duration:150ms] [transition-timing-function:ease-in-out]";

const variantStyles = {
  light: "border-white",
  dark: "border-black",
  alternative: "border-white backdrop-brightness-75",
  dynamic: "border-current",
};

const textStyles = {
  light: "text-white group-hover:text-black",
  dark: "text-black group-hover:text-white",
  alternative: "text-white group-hover:text-black",
  dynamic: "text-current group-hover:text-current",
};

const backgroundStyles = {
  light: "bg-white",
  dark: "bg-black",
  alternative: "bg-white backdrop-brightness-75",
  dynamic: "bg-white",
};

const InteractiveButtonBase = ({ children, variant = "light" }: InteractiveButtonProps) => (
  <>
    <div className={cn("absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out", backgroundStyles[variant])} />
    <div className={cn("relative z-10 transition-colors duration-300", textStyles[variant])}>{children}</div>
  </>
);

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(({ children, className, variant = "light", ...props }, ref) => (
  <button ref={ref} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
    <InteractiveButtonBase variant={variant}>{children}</InteractiveButtonBase>
  </button>
));

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverLink };
