import AnimatedSkillItem from "./AnimatedSkillItem";
import reactLogo from "@assets/react.svg";
import djangoLogo from "@assets/django.svg";
import githubLogo from "@assets/github.svg";
import tailwindCSSLogo from "@assets/tailwindcss.svg";
import vitestLogo from "@assets/vitest.svg";
import testingLibraryLogo from "@assets/testing-library.svg";
import pythonLogo from "@assets/python.svg";
import javascriptLogo from "@assets/javascript.svg";
import typescriptLogo from "@assets/typescript.svg";
import reactRouterLogo from "@assets/react-router.svg";
import viteLogo from "@assets/vite.svg";

function SkillsList() {
  // gérer le fait que la liste dépasse horizontalement
  return (
    <ul className="absolute top-0 left-0 bottom-0 flex items-center justify-start gap-x-10 px-6">
      <AnimatedSkillItem
        svgSrc={javascriptLogo}
        href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
        alt="Logo du langage Javascript"
      />
      <AnimatedSkillItem
        svgSrc={typescriptLogo}
        href="https://www.typescriptlang.org/"
        alt="Logo du langage Typescript"
      />
      <AnimatedSkillItem
        svgSrc={reactLogo}
        href="https://fr.react.dev/"
        alt="Logo de la librairie React"
      />
      <AnimatedSkillItem
        svgSrc={pythonLogo}
        href="https://www.python.org/"
        alt="Logo du langage Python"
      />
      <AnimatedSkillItem
        svgSrc={djangoLogo}
        href="https://www.djangoproject.com/"
        alt="Logo du framework Django"
      />
      <AnimatedSkillItem
        svgSrc={reactRouterLogo}
        href="https://reactrouter.com/"
        alt="Logo de React Router"
      />
      <AnimatedSkillItem
        svgSrc={githubLogo}
        href="https://github.com/"
        alt="Logo de Github"
      />
      <AnimatedSkillItem
        svgSrc={tailwindCSSLogo}
        href="https://tailwindcss.com/"
        alt="Logo du framework CSS TailwindCSS"
      />
      <AnimatedSkillItem
        svgSrc={viteLogo}
        href="https://vite.dev/"
        alt="Logo de l'outil de build Vite"
      />
      <AnimatedSkillItem
        svgSrc={vitestLogo}
        href="https://vitest.dev/"
        alt="Logo du framework de test Vitest"
      />
      <AnimatedSkillItem
        svgSrc={testingLibraryLogo}
        href="https://testing-library.com/"
        alt="Logo de la librairie de test Testing Library"
      />
    </ul>
  );
}

export default SkillsList;
