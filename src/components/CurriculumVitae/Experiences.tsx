import type { TExperience } from "@/types";
import Experience from "./Experience";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/utils/classes";

type ExperiencesProps = {
  title: string;
  experiences: Array<TExperience>;
  Icon: LucideIcon;
};

function Experiences({ title, experiences, Icon }: ExperiencesProps) {
  return (
    <div className="w-11/12">
      <div className="flex items-center gap-x-3 mb-3">
        <span
          className={cn(
            "p-2.5 transition-all ease-out duration-1000 z-10",
            "cartoon:border-2 cartoon:border-primary cartoon:rounded-md cartoon:bg-light cartoon:shadow-sm cartoon:shadow-primary/80"
          )}
        >
          <Icon className="size-5" />
        </span>
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
      <ol className="flex flex-col gap-y-5">
        {experiences.map((experience) => (
          <Experience {...experience} />
        ))}
      </ol>
    </div>
  );
}

export default Experiences;
