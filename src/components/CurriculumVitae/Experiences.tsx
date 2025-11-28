import { type LucideIcon } from "lucide-react";

import type { TExperience } from "@/types";
import { cn } from "@/utils/classes";

import Experience from "./Experience";

type ExperiencesProps = {
  title: string;
  experiences: Array<TExperience>;
  Icon: LucideIcon;
};

function Experiences({ title, experiences, Icon }: ExperiencesProps) {
  return (
    <div className="md:w-11/12">
      <div className="mb-1.5 flex items-center gap-x-2.5 md:mb-3 md:gap-x-3">
        <span
          className={cn(
            "z-10 p-1.5 transition-all duration-1000 ease-out md:p-2.5",
            "cartoon:border-2 cartoon:border-primary cartoon:rounded-md cartoon:bg-light cartoon:shadow-sm cartoon:shadow-primary/80",
            "neo:bg-background neo:rounded-2xl neo:shadow-outer-md neo:border neo:border-background"
          )}
        >
          <Icon className="size-3 md:size-5" />
        </span>
        <h3 className="text-lg font-bold md:text-2xl">{title}</h3>
      </div>
      <ol className="flex flex-col gap-y-4 md:gap-y-5">
        {experiences.map((experience) => (
          <Experience {...experience} key={experience.title} />
        ))}
      </ol>
    </div>
  );
}

export default Experiences;
