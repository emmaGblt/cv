import type { LucideIcon } from "lucide-react";

import { cn } from "@/utils/classes";

type PresentationListItemProps = {
  Icon: LucideIcon;
  title: string;
  text: string;
  className?: string;
};

function PresentationListItem({
  Icon,
  title,
  text,
  className,
}: PresentationListItemProps) {
  return (
    <li className="cartoon:text-primary neo:text-secondary-2 grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 text-left">
      <div
        className={cn(
          "col-start-1 row-span-2 p-2.5 transition-all duration-1000 ease-out md:p-3",
          "cartoon:border-2 cartoon:border-primary cartoon:bg-light cartoon:rounded-md cartoon:shadow-xs cartoon:shadow-primary/80",
          "neo:bg-background neo:rounded-2xl neo:shadow-outer-md neo:border neo:border-background",
          className
        )}
      >
        <Icon className="size-4 md:size-6" />
      </div>
      <p className="col-start-2 row-start-1 font-bold">{title}</p>
      <p className="neo:text-secondary-1 col-start-2 row-start-2 overflow-hidden font-semibold text-ellipsis">
        {text}
      </p>
    </li>
  );
}

export default PresentationListItem;
