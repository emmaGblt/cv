import { useState } from "react";

import { SKILLS } from "@/constants/skills";
import type { SKILL_TYPE } from "@/types/skills";

import AnimatedSkillItem from "./AnimatedSkillItem";
import SkillFilter from "./SkillFilter";

export type FILTER = SKILL_TYPE | "none";

function SkillsList() {
  const [filter, setFilter] = useState<FILTER>("none");

  return (
    <>
      <SkillFilter filter={filter} handleFilterChange={setFilter} />
      <div className="relative h-40 overflow-x-auto md:h-56">
        <ul className="absolute top-0 bottom-0 left-0 flex items-center justify-start gap-x-10 px-3 md:px-6">
          {SKILLS.filter((skill) =>
            filter != "none" ? skill.type == filter : true
          ).map((skill) => (
            <AnimatedSkillItem
              key={skill.key}
              svgSrc={skill.svgSrc}
              href={skill.href}
              alt={skill.altText}
              name={skill.name}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SkillsList;
