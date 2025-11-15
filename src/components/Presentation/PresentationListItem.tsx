import type { LucideIcon } from "lucide-react";

type PresentationListItemProps = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

function PresentationListItem({
  Icon,
  title,
  text,
}: PresentationListItemProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 text-left">
      <div className="p-3 col-start-1 row-span-2 border-3 border-secondary-3 bg-secondary-2/30 rounded-2xl">
        <Icon className="size-6 text-secondary-3" />
      </div>
      <p className="col-start-2 row-start-1 font-bold text-secondary-3">
        {title}
      </p>
      <p className="col-start-2 row-start-2 overflow-hidden text-ellipsis font-semibold">
        {text}
      </p>
    </li>
  );
}

export default PresentationListItem;
