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
    <li className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4">
      <div className="p-3 col-start-1 row-span-2  border rounded-2xl">
        <Icon className="size-4" />
      </div>
      <p className="col-start-2 row-start-1">{title}</p>
      <p className="col-start-2 row-start-2">{text}</p>
    </li>
  );
}

export default PresentationListItem;
