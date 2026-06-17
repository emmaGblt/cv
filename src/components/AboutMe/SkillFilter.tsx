import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Eraser } from "lucide-react";
import { useId } from "react";

import type { TSKILL_TYPE } from "@/types/skills";
import { cn } from "@/utils/classes";

import type { FILTER } from "./SkillsList";

const FILTERS = [
  { name: "frontend", value: "frontend" },
  { name: "backend", value: "backend" },
  { name: "devops", value: "devops" }
] as Array<{ name: string; value: TSKILL_TYPE }>;

type Props = {
  filter: FILTER;
  handleFilterChange: (value: FILTER) => void;
};

function SkillFilter({ filter, handleFilterChange }: Props) {
  const id = useId();

  return (
    <div className="mt-6 mb-1 flex flex-wrap items-center gap-x-2 gap-y-4">
      <div id={id}>Filtre :</div>
      <RadioGroup
        aria-labelledby={id}
        className="flex flex-wrap items-center gap-x-2 gap-y-4"
        value={filter}
        onValueChange={(value) => handleFilterChange(value)}
      >
        <label className="hidden">
          <Radio.Root value="none" />
          None
        </label>
        {FILTERS.map((filter) => (
          <label
            key={filter.value}
            className={cn(
              "pushButton px-2 py-0.5 text-sm hover:cursor-pointer",
              "cartoon:bg-background cartoon:border-2 cartoon:border-primary cartoon:shadow-sm cartoon:shadow-primary/80 cartoon:rounded-md cartoon:font-semibold",
              "neo:rounded-3xl neo:hover:text-black/50 neo:shadow-outer-md neo:has-data-checked:shadow-inner-md neo:active:shadow-inner-md"
            )}
          >
            <Radio.Root value={filter.value} />
            {filter.name}
          </label>
        ))}
      </RadioGroup>
      {filter != "none" && (
        <button
          role="button"
          className="neo:text-black/50 cartoon:text-primary ml-2 hover:cursor-pointer"
          onClick={() => handleFilterChange("none")}
          aria-label="delete-filter"
        >
          <Eraser className="size-5" />
        </button>
      )}
    </div>
  );
}

export default SkillFilter;
