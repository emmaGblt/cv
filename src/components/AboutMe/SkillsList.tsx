import ansibleLogo from "@assets/ansible.svg";
import awsLogo from "@assets/aws.svg";
import djangoLogo from "@assets/django.svg";
import dockerLogo from "@assets/docker.svg";
import githubLogo from "@assets/github.svg";
import grafanaLogo from "@assets/grafana.svg";
import javascriptLogo from "@assets/javascript.svg";
import kubernetesLogo from "@assets/kubernetes.svg";
import prometheusLogo from "@assets/prometheus.svg";
import pytestLogo from "@assets/pytest.svg";
import pythonLogo from "@assets/python.svg";
import reactLogo from "@assets/react.svg";
import reactRouterLogo from "@assets/react-router.svg";
import storybookLogo from "@assets/storybook.svg";
import tailwindCSSLogo from "@assets/tailwindcss.svg";
import terraformLogo from "@assets/terraform.svg";
import testingLibraryLogo from "@assets/testing-library.svg";
import typescriptLogo from "@assets/typescript.svg";
import viteLogo from "@assets/vite.svg";
import vitestLogo from "@assets/vitest.svg";

import AnimatedSkillItem from "./AnimatedSkillItem";
import SkillFilter from "./SkillFilter";

function SkillsList() {
  return (
    <>
      <SkillFilter />
      <div className="relative h-40 overflow-x-auto md:h-56">
        <ul className="absolute top-0 bottom-0 left-0 flex items-center justify-start gap-x-10 px-3 md:px-6">
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
            key="pytest"
            svgSrc={pytestLogo}
            href="https://docs.pytest.org/en/stable/"
            alt="Logo du framework de test Pytest"
            name="pytest"
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
            key="storybook"
            svgSrc={storybookLogo}
            href="https://storybook.js.org/"
            alt="Logo de Storybook"
            name="storybook"
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
          <AnimatedSkillItem
            key="aws"
            svgSrc={awsLogo}
            href="https://aws.amazon.com/"
            alt="Logo de AWS"
            name="aws"
          />
          <AnimatedSkillItem
            key="docker"
            svgSrc={dockerLogo}
            href="https://www.docker.com/"
            alt="Logo de Docker"
            name="docker"
          />
          <AnimatedSkillItem
            key="kubernetes"
            svgSrc={kubernetesLogo}
            href="https://kubernetes.io/"
            alt="Logo de Kubernetes"
            name="kubernetes"
          />
          <AnimatedSkillItem
            key="terraform"
            svgSrc={terraformLogo}
            href="https://developer.hashicorp.com/terraform"
            alt="Logo de Terraform"
            name="terraform"
          />
          <AnimatedSkillItem
            key="ansible"
            svgSrc={ansibleLogo}
            href="https://docs.ansible.com/"
            alt="Logo de Ansible"
            name="ansible"
          />
          <AnimatedSkillItem
            key="prometheus"
            svgSrc={prometheusLogo}
            href="https://prometheus.io/"
            alt="Logo de Prometheus"
            name="prometheus"
          />
          <AnimatedSkillItem
            key="grafana"
            svgSrc={grafanaLogo}
            href="https://grafana.com/"
            alt="Logo de Grafana"
            name="grafana"
          />
        </ul>
      </div>
    </>
  );
}

export default SkillsList;
