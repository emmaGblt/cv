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
  return (
    <ul className="absolute top-0 left-0 bottom-0 flex items-center justify-start gap-x-10 px-3 md:px-6">
      <AnimatedSkillItem
        key="javascript"
        svgSrc={javascriptLogo}
        href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
        alt="Logo du langage Javascript"
        name="javascript"
      />
      <AnimatedSkillItem
        key="typescript"
        svgSrc={typescriptLogo}
        href="https://www.typescriptlang.org/"
        alt="Logo du langage Typescript"
        name="typescript"
      />
      <AnimatedSkillItem
        key="react"
        svgSrc={reactLogo}
        href="https://fr.react.dev/"
        alt="Logo de la librairie React"
        name="react"
      />
      <AnimatedSkillItem
        key="python"
        svgSrc={pythonLogo}
        href="https://www.python.org/"
        alt="Logo du langage Python"
        name="python"
      />
      <AnimatedSkillItem
        key="django"
        svgSrc={djangoLogo}
        href="https://www.djangoproject.com/"
        alt="Logo du framework Django"
        name="django"
      />
      <AnimatedSkillItem
        key="react-router"
        svgSrc={reactRouterLogo}
        href="https://reactrouter.com/"
        alt="Logo de React Router"
        name="react router"
      />
      <AnimatedSkillItem
        key="github"
        svgSrc={githubLogo}
        href="https://github.com/"
        alt="Logo de Github"
        name="github"
      />
      <AnimatedSkillItem
        key="tailwindcss"
        svgSrc={tailwindCSSLogo}
        href="https://tailwindcss.com/"
        alt="Logo du framework CSS TailwindCSS"
        name="tailwindcss"
      />
      <AnimatedSkillItem
        key="vite"
        svgSrc={viteLogo}
        href="https://vite.dev/"
        alt="Logo de l'outil de build Vite"
        name="vite"
      />
      <AnimatedSkillItem
        key="vitest"
        svgSrc={vitestLogo}
        href="https://vitest.dev/"
        alt="Logo du framework de test Vitest"
        name="vitest"
      />
      <AnimatedSkillItem
        key="testing-library"
        svgSrc={testingLibraryLogo}
        href="https://testing-library.com/"
        alt="Logo de la librairie de test Testing Library"
        name="testing library"
      />
    </ul>
  );
}

export default SkillsList;
