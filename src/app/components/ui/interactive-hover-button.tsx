import React from "react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark" | "alternative";
}

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(({ children, className, variant = "light", ...props }, ref) => {
  const baseStyles = "group relative w-auto cursor-pointer overflow-hidden border p-2 px-6 text-center font-semibold transition-all font-[helvetica-light] uppercase text-[1rem] [transition-duration:150ms] [transition-timing-function:ease-in-out]";

  const variantStyles = {
    light: "border-white",
    dark: "border-black",
    alternative: "border-white backdrop-brightness-75",
  };

  const textStyles = {
    light: "text-white group-hover:text-black",
    dark: "text-black group-hover:text-white",
    alternative: "text-white group-hover:text-black",
  };

  const backgroundStyles = {
    light: "bg-white",
    dark: "bg-black",
    alternative: "bg-white backdrop-brightness-75",
  };

  return (
    <button ref={ref} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      <div className={cn("absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out", backgroundStyles[variant])} />
      <div className={cn("relative z-10 transition-colors duration-300", textStyles[variant])}>{children}</div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
