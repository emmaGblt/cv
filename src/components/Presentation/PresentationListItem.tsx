import { cn } from "@/utils/classes";
import type { LucideIcon } from "lucide-react";

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
    <li className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 text-left">
      <div
        className={cn(
          "p-3 col-start-1 row-span-2 border-3 border-primary bg-light rounded-xl shadow-xs shadow-primary/80",
          className
        )}
      >
        <Icon className="size-6 text-primary" />
      </div>
      <p className="col-start-2 row-start-1 font-bold">{title}</p>
      <p className="col-start-2 row-start-2 overflow-hidden text-ellipsis font-semibold">
        {text}
      </p>
    </li>
  );
}

export default PresentationListItem;
