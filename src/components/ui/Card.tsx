import { cn } from "@utils/classes";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-8 py-12 border border-gray-400 rounded-3xl shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
