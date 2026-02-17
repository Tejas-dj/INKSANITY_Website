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
    primary: "bg-primary text-white hover:opacity-90",
    outline: "bg-transparent border border-border text-foreground hover:bg-white/5",
    ghost: "bg-transparent text-foreground hover:bg-white/5",
};
return (
    <button
    className={cn(
        "inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
    )}
    {...props}
    />
);
}