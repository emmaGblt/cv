import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, PropsWithChildren } from "react";

import { cn } from "@/utils/classes";

type HeadingLevel = "1" | "2" | "3" | "4";

const tags: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4"
};

const headingVariants = cva("neo:font-bold", {
  variants: {
    level: {
      "1": "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-1.5 text-2xl md:mb-3 md:text-4xl",
      "2": "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-4 max-w-fit text-xl md:text-3xl",
      "3": "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-2 max-w-fit text-lg md:mb-4 md:text-2xl",
      "4": "font-bold md:text-lg"
    }
  },
  defaultVariants: {
    level: "1"
  }
});

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
