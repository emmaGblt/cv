import { BookOpen, Briefcase } from "lucide-react";

import {
  EDUCATION,
  PROFESSIONAL_EXPERIENCES
} from "@/constants/curriculumVitae";

import Experiences from "./Experiences";

function CurriculumVitaeContent() {
  return (
    <div className="flex flex-col gap-4 md:gap-y-6">
      <Experiences
        title="Expériences"
        Icon={Briefcase}
        experiences={PROFESSIONAL_EXPERIENCES}
      />
      <Experiences title="Formation" Icon={BookOpen} experiences={EDUCATION} />
    </div>
  );
}

export default CurriculumVitaeContent;
