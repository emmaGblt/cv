import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, PropsWithChildren } from "react";

import { cn } from "@/utils/classes";

type HeadingLevel = "1" | "2" | "3";

const tags: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3"
};

const headingVariants = cva(
  "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold",
  {
    variants: {
      level: {
        "1": "mb-1.5 text-2xl md:mb-3 md:text-4xl xl:text-center",
        "2": "mb-4 max-w-fit text-xl md:text-3xl",
        "3": "mb-2 max-w-fit text-lg md:mb-4 md:text-2xl"
      }
    },
    defaultVariants: {
      level: "1"
    }
  }
);

interface HeadingProps
  extends PropsWithChildren, VariantProps<typeof headingVariants> {
  level?: HeadingLevel;
  className?: string;
}

function Heading({ level = "1", children, className }: HeadingProps) {
  const Tag = tags[level];

  return (
    <Tag className={cn(headingVariants({ level }), className)}>{children}</Tag>
  );
}

export default Heading;
