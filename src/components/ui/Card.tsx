import { cn } from "@utils/classes";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-12 py-14 border-3 border-primary rounded-3xl shadow-lg shadow-primary/50 card relative bg-secondary-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
