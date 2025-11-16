import { cn } from "@utils/classes";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-12 py-14 border-4 rounded-xl border-primary shadow shadow-primary/60 card relative bg-background-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
