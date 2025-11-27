import { cn } from "@utils/classes";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-6 sm:px-8 py-10 md:px-12 md:py-14 relative transition-all duration-1000 ease-out",
        "cartoon:border-4 cartoon:rounded-md cartoon:border-primary cartoon:shadow-md cartoon:shadow-primary/80 cartoon:bg-background-2",
        "neo:rounded-4xl neo:border neo:border-background neo:shadow-outer-lg neo:bg-background",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
