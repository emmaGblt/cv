import ansibleLogo from "@assets/ansible.svg";
import awsLogo from "@assets/aws.svg";
import baseuiLogo from "@assets/base-ui.svg";
import djangoLogo from "@assets/django.svg";
import djangoRestFrameworkLogo from "@assets/django-rest-framework.svg";
import dockerLogo from "@assets/docker.svg";
import factoryBoyLogo from "@assets/factory-boy.svg";
import githubLogo from "@assets/github.svg";
import gitlabLogo from "@assets/gitlab.svg";
import grafanaLogo from "@assets/grafana.svg";
import javascriptLogo from "@assets/javascript.svg";
import kubernetesLogo from "@assets/kubernetes.svg";
import postgresqlLogo from "@assets/postgresql.svg";
import prometheusLogo from "@assets/prometheus.svg";
import pytestLogo from "@assets/pytest.svg";
import pythonLogo from "@assets/python.svg";
import radixuiLogo from "@assets/radix-ui.svg";
import reactLogo from "@assets/react.svg";
import reactRouterLogo from "@assets/react-router.svg";
import storybookLogo from "@assets/storybook.svg";
import tailwindCSSLogo from "@assets/tailwindcss.svg";
import terraformLogo from "@assets/terraform.svg";
import testingLibraryLogo from "@assets/testing-library.svg";
import typescriptLogo from "@assets/typescript.svg";
import viteLogo from "@assets/vite.svg";
import vitestLogo from "@assets/vitest.svg";

import type { SKILL } from "@/types/skills";

export const SKILLS: Array<SKILL> = [
  {
    key: "javascript",
    type: "frontend",
    svgSrc: javascriptLogo,
    href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    altText: "Logo du langage Javascript",
    name: "javascript"
  },
  {
    key: "typescript",
    type: "frontend",
    svgSrc: typescriptLogo,
    href: "https://www.typescriptlang.org/",
    altText: "Logo du langage Typescript",
    name: "typescript"
  },
  {
    key: "react",
    type: "frontend",
    svgSrc: reactLogo,
    href: "https://fr.react.dev/",
    altText: "Logo de la librairie React",
    name: "react"
  },
  {
    key: "python",
    type: "backend",
    svgSrc: pythonLogo,
    href: "https://www.python.org/",
    altText: "Logo du langage Python",
    name: "python"
  },
  {
    key: "django",
    type: "backend",
    svgSrc: djangoLogo,
    href: "https://www.djangoproject.com/",
    altText: "Logo du framework Django",
    name: "django"
  },
  {
    key: "postgresql",
    type: "backend",
    svgSrc: postgresqlLogo,
    href: "https://www.postgresql.org/",
    altText: "Logo du système de BDD relationnelle PostgreSQL",
    name: "PostgreSQL"
  },
  {
    key: "django-rest-framework",
    type: "backend",
    svgSrc: djangoRestFrameworkLogo,
    href: "https://www.django-rest-framework.org/",
    altText: "Logo du framework Django REST",
    name: "django REST"
  },
  {
    key: "factory-boy",
    type: "backend",
    svgSrc: factoryBoyLogo,
    href: "https://factoryboy.readthedocs.io/en/stable/",
    altText: "Logo de Factory Boy",
    name: "factory boy"
  },
  {
    key: "pytest",
    type: "backend",
    svgSrc: pytestLogo,
    href: "https://docs.pytest.org/en/stable/",
    altText: "Logo du framework de test Pytest",
    name: "pytest"
  },
  {
    key: "react-router",
    type: "frontend",
    svgSrc: reactRouterLogo,
    href: "https://reactrouter.com/",
    altText: "Logo de React Router",
    name: "react router"
  },
  {
    key: "github",
    type: "devops",
    svgSrc: githubLogo,
    href: "https://github.com/",
    altText: "Logo de Github",
    name: "github"
  },
  {
    key: "gitlab",
    type: "devops",
    svgSrc: gitlabLogo,
    href: "https://gitlab.com/",
    altText: "Logo de Gitlab",
    name: "gitlab"
  },
  {
    key: "tailwindcss",
    type: "frontend",
    svgSrc: tailwindCSSLogo,
    href: "https://tailwindcss.com/",
    altText: "Logo du framework CSS TailwindCSS",
    name: "tailwindcss"
  },
  {
    key: "radix-ui",
    type: "frontend",
    svgSrc: radixuiLogo,
    href: "https://www.radix-ui.com/",
    altText: "Logo de la librairie de composants Radix UI",
    name: "radix ui"
  },
  {
    key: "base-ui",
    type: "frontend",
    svgSrc: baseuiLogo,
    href: "https://base-ui.com/",
    altText: "Logo de la librairie de composants Base UI",
    name: "base ui"
  },
  {
    key: "storybook",
    type: "frontend",
    svgSrc: storybookLogo,
    href: "https://storybook.js.org/",
    altText: "Logo de Storybook",
    name: "storybook"
  },
  {
    key: "vite",
    type: "frontend",
    svgSrc: viteLogo,
    href: "https://vite.dev/",
    altText: "Logo de l'outil de build Vite",
    name: "vite"
  },
  {
    key: "vitest",
    type: "frontend",
    svgSrc: vitestLogo,
    href: "https://vitest.dev/",
    altText: "Logo du framework de test Vitest",
    name: "vitest"
  },
  {
    key: "testing-library",
    type: "frontend",
    svgSrc: testingLibraryLogo,
    href: "https://testing-library.com/",
    altText: "Logo de la librairie de test Testing Library",
    name: "testing library"
  },
  {
    key: "aws",
    type: "devops",
    svgSrc: awsLogo,
    href: "https://aws.amazon.com/",
    altText: "Logo de AWS",
    name: "aws"
  },
  {
    key: "docker",
    type: "devops",
    svgSrc: dockerLogo,
    href: "https://www.docker.com/",
    altText: "Logo de Docker",
    name: "docker"
  },
  {
    key: "kubernetes",
    type: "devops",
    svgSrc: kubernetesLogo,
    href: "https://kubernetes.io/",
    altText: "Logo de Kubernetes",
    name: "kubernetes"
  },
  {
    key: "terraform",
    type: "devops",
    svgSrc: terraformLogo,
    href: "https://developer.hashicorp.com/terraform",
    altText: "Logo de Terraform",
    name: "terraform"
  },
  {
    key: "ansible",
    type: "devops",
    svgSrc: ansibleLogo,
    href: "https://docs.ansible.com/",
    altText: "Logo de Ansible",
    name: "ansible"
  },
  {
    key: "prometheus",
    type: "devops",
    svgSrc: prometheusLogo,
    href: "https://prometheus.io/",
    altText: "Logo de Prometheus",
    name: "prometheus"
  },
  {
    key: "grafana",
    type: "devops",
    svgSrc: grafanaLogo,
    href: "https://grafana.com/",
    altText: "Logo de Grafana",
    name: "grafana"
  }
];
