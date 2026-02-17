import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // Base Paper Style
        "bg-[#FDF6E3] border border-[#442D1C] rounded-sm",
        // Hard Shadow (No blur)
        "shadow-[4px_4px_0px_#442D1C]",
        // "Pasted" Rotation Effect (Default)
        "hover:-rotate-1 transition-transform duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}