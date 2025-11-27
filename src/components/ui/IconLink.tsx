import type { FC, SVGProps } from "react";

import { cn } from "@/utils/classes";

type IconLinkProps = {
  href: string;
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
};

function IconLink({ href, name, Icon, className }: IconLinkProps) {
  return (
    <a
      className={cn(
        "group pushButton inline-flex gap-x-1.5",
        "cartoon:bg-secondary-2 cartoon:border-2 cartoon:border-primary cartoon:font-semibold cartoon:shadow-sm cartoon:shadow-primary/80 cartoon:rounded-md cartoon:py-2 cartoon:px-2.5",
        "neo:p-2.5 md:neo:p-4 neo:rounded-full neo:shadow-outer-md neo:active:shadow-inner-md",
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="cartoon:fill-primary neo:fill-secondary-2 size-4 md:neo:size-6 neo:group-hover:fill-black/50" />
      <span className="neo:hidden text-xs md:text-sm font-semibold neo:group-hover:text-black/50">
        {name}
      </span>
    </a>
  );
}

export default IconLink;
