import "./index.css";

import Heading from "@ui/Typography/Heading";
import { type LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

import { ABOUT_ME_TEXT, PROJECTS, WHAT_I_BRING } from "@/constants/aboutMe";

import SkillsList from "./SkillsList";

function ListIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="min-w-6 text-left">
      <Icon className="neo:text-secondary-2 cartoon:text-primary cartoon:group-even:fill-secondary-2 cartoon:group-odd:fill-background inline-block size-5" />
    </span>
  );
}

function List({ children }: PropsWithChildren) {
  return (
    <ul className="flex flex-col gap-y-1 text-justify lg:gap-y-2">
      {children}
    </ul>
  );
}

function ListItem({ children }: PropsWithChildren) {
  return <li className="group wrap flex items-center gap-x-2">{children}</li>;
}

function AboutMeContent() {
  const { presentation, projects, whatIBring, technologies } = ABOUT_ME_TEXT;

  return (
    <div>
      <Heading level="3">{presentation.heading}</Heading>
      <div className="flex flex-col gap-y-4 text-justify">
        <p className="mb-2 text-lg font-semibold italic">
          {presentation.intro}
        </p>
        <p>{presentation.paragraph1}</p>
        <p>{presentation.paragraph2}</p>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">{projects.heading}</Heading>
        <div className="flex flex-col gap-y-4 text-justify">
          <div>
            <p className="mb-3">{projects.intro}</p>
            <List>
              {PROJECTS.map((project, index) => (
                <ListItem key={`project-${index}`}>
                  <ListIcon Icon={project.Icon} />
                  {project.content}
                </ListItem>
              ))}
            </List>
          </div>
          <p>{projects.paragraph1}</p>
          <p>{projects.paragraph2}</p>
        </div>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">{whatIBring.heading}</Heading>
        <List>
          {WHAT_I_BRING.map((item, index) => (
            <ListItem key={`what-i-bring-${index}`}>
              <ListIcon Icon={item.Icon} />
              {item.content}
            </ListItem>
          ))}
        </List>
      </div>
      <div className="holographic-cards-scrollbar mt-5 md:mt-8">
        <Heading level="3">{technologies.heading}</Heading>
        <p>{technologies.intro}</p>
        <SkillsList />
      </div>
    </div>
  );
}

export default AboutMeContent;
