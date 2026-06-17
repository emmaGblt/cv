import {
  ArrowRightLeft,
  BicepsFlexed,
  Blocks,
  BrickWall,
  GraduationCap,
  Hammer,
  Laptop,
  type LucideIcon,
  LucideInfinity,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { ReactNode } from "react";

import Bold from "@/components/ui/Typography/Bold";

type AboutMeList = Array<{ Icon: LucideIcon; content: ReactNode }>;

export const PROJECTS: AboutMeList = [
  {
    Icon: Hammer,
    content: (
      <>
        <Bold>Maintenir et développer les nouvelles fonctionnalités</Bold>{" "}
        d&apos;une application SaaS Django / React en autonomie
      </>
    )
  },
  {
    Icon: Blocks,
    content: (
      <>
        <Bold>Concevoir et créer une application</Bold> SaaS Django / React
      </>
    )
  },
  {
    Icon: Sparkles,
    content: (
      <>
        <Bold>Créer et maintenir un design system</Bold> et une{" "}
        <Bold>librairie de composants</Bold>
      </>
    )
  },
  {
    Icon: ArrowRightLeft,
    content: (
      <>
        <Bold>Migrer des interfaces</Bold> vers des technologies Javascript
        modernes
      </>
    )
  },
  {
    Icon: GraduationCap,
    content: (
      <>
        <Bold>Accompagner et conseiller</Bold> des développeurs moins
        expérimentés en Django et React
      </>
    )
  }
];

export const WHAT_I_BRING: AboutMeList = [
  {
    Icon: BicepsFlexed,
    content: "Mes 5 ans d'expérience en développement full stack"
  },
  {
    Icon: Laptop,
    content: "Mon expertise en développement backend et frontend"
  },
  {
    Icon: BrickWall,
    content: "Ma rigueur et mon souci de la qualité du code"
  },
  {
    Icon: UsersRound,
    content: "Mon esprit collaboratif et le partage des mes connaissances"
  },
  {
    Icon: LucideInfinity,
    content:
      "Ma connaissance des pratiques DevOps, de l'IAC, de la CI/CD, de la conteneurisation..."
  }
];

export const ABOUT_ME_TEXT = {
  presentation: {
    heading: "Présentation",
    intro: (
      <>
        Moi c&apos;est Emma, développeuse full stack française avec{" "}
        <Bold>5 ans d&apos;expérience</Bold> dans la création
        d&apos;applications web modernes ! J&apos;aime travailler sur des
        projets <Bold>impactants</Bold> et <Bold>engagés !</Bold>
      </>
    ),
    paragraph1: (
      <>
        Je conçois et développe des applications web{" "}
        <Bold>intuitives, maintenables et centrées sur leurs utilisateurs</Bold>{" "}
        en utilisant des technologies modernes et reconnues comme React,
        Typescript, Python, Django...
      </>
    ),
    paragraph2: (
      <>
        J&apos;interviens sur l&apos;ensemble du cycle de développement, de
        l&apos;interface utilisateur au backend, en privilégiant la{" "}
        <Bold>collaboration</Bold>, la <Bold>qualité du code</Bold>, la{" "}
        <Bold>performance</Bold> et <Bold>l&apos;expérience utilisateur</Bold>.
      </>
    )
  },
  projects: {
    heading: "Projets",
    intro: "Dans mon parcours, j'ai été amenée à :",
    paragraph1: (
      <>
        J&apos;ai travaillé au sein d&apos;équipes pluridisciplinaires, en{" "}
        <Bold>collaboration</Bold> avec des Product Manager, des Designer et
        d&apos;autres développeurs, sur des cycles de développement courts et
        itératifs.
      </>
    ),
    paragraph2: (
      <>
        J&apos;ai réalisé quotidiennement des <Bold>reviews de code</Bold> et
        participé à des sessions de <Bold>peer programming</Bold> et de{" "}
        <Bold>conception</Bold>, toujours avec le souci de mettre mon expérience
        et mes connaissances au service de l&apos;équipe.
      </>
    )
  },
  whatIBring: {
    heading: "Ce que j'apporte à mon équipe"
  },
  technologies: {
    heading: "Technologies",
    intro:
      "Au fil des années, j'ai travaillé avec différentes technologies. En voici quelques-unes !"
  }
};
