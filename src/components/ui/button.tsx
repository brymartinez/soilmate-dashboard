// Shadcn UI Button component using Tailwind, Airbnb style, named export
import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "link";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-green-500 text-white hover:bg-green-600",
          variant === "outline" && "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
          variant === "ghost" && "bg-transparent hover:bg-gray-100 text-gray-900",
          variant === "link" && "bg-transparent underline-offset-4 hover:underline text-green-700",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
