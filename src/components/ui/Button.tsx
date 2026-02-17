import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function Button({ 
  className, 
  variant = "primary", 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-[#743014] text-[#E8D1A7] border border-[#442D1C] hover:bg-[#442D1C] hover:shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-[#743014] text-[#743014] hover:bg-[#743014]/10",
    ghost: "bg-transparent text-[#442D1C] hover:bg-[#442D1C]/5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-none px-6 py-2.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#743014] focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}