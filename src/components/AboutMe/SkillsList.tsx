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
import ReactRouter from "@assets/react-router.svg?react";
import Vite from "@assets/vite.svg?react";

function SkillsList() {
  // gérer le fait que la liste dépasse horizontalement
  return (
    <ul className="absolute top-0 left-0 bottom-0 flex items-center justify-start gap-x-10 px-6">
      <AnimatedSkillItem
        Icon={Javascript}
        href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
      />
      <AnimatedSkillItem
        Icon={Typescript}
        href="https://www.typescriptlang.org/"
      />
      <AnimatedSkillItem Icon={Python} href="https://www.python.org/" />
      <AnimatedSkillItem Icon={ReactLogo} href="https://fr.react.dev/" />
      <AnimatedSkillItem Icon={ReactRouter} href="https://reactrouter.com/" />
      <AnimatedSkillItem
        Icon={DjangoLogo}
        href="https://www.djangoproject.com/"
      />
      <AnimatedSkillItem Icon={Github} href="https://github.com/" />
      <AnimatedSkillItem Icon={TailwindCSS} href="https://tailwindcss.com/" />
      <AnimatedSkillItem Icon={Vite} href="https://vite.dev/" />
      <AnimatedSkillItem Icon={Vitest} href="https://vitest.dev/" />
      <AnimatedSkillItem
        Icon={TestingLibrary}
        href="https://testing-library.com/"
      />
    </ul>
  );
}

export default SkillsList;
