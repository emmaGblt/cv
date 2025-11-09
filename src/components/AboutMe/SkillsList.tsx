import AnimatedSkillItem from "./AnimatedSkillItem";
import ReactLogo from "@assets/react.svg?react";
import DjangoLogo from "@assets/django.svg?react";
import Github from "@assets/github.svg?react";
import TailwindCSS from "@assets/tailwindcss.svg?react";
import Vitest from "@assets/vitest.svg?react";
import TestingLibrary from "@assets/testing-library.svg?react";
import Python from "@assets/python.svg?react";
import Javascript from "@assets/javascript.svg?react";
import Typescript from "@assets/typescript.svg?react";

function SkillsList() {
  // gérer le fait que la liste dépasse horizontalement
  return (
    <ul className="absolute top-0 left-0 bottom-0 flex items-center justify-start gap-x-10 px-6">
      <AnimatedSkillItem Icon={Javascript} />
      <AnimatedSkillItem Icon={Typescript} />
      <AnimatedSkillItem Icon={Python} />
      <AnimatedSkillItem Icon={ReactLogo} />
      <AnimatedSkillItem Icon={DjangoLogo} />
      <AnimatedSkillItem Icon={Github} />
      <AnimatedSkillItem Icon={TailwindCSS} />
      <AnimatedSkillItem Icon={Vitest} />
      <AnimatedSkillItem Icon={TestingLibrary} />
    </ul>
  );
}

export default SkillsList;
