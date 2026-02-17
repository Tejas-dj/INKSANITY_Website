import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
return (
    <div
    className={cn(
        "bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg",
        className
    )}
    {...props}
    >
    {children}
    </div>
);
}