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
      <p>
        <Bold>Maintenir et développer les nouvelles fonctionnalités</Bold>{" "}
        d&apos;une application SaaS Django / React en autonomie
      </p>
    )
  },
  {
    Icon: Blocks,
    content: (
      <p>
        <Bold>Concevoir et créer une application</Bold> SaaS Django / React
      </p>
    )
  },
  {
    Icon: Sparkles,
    content: (
      <p>
        <Bold>Créer et maintenir un design system</Bold> et une{" "}
        <Bold>librairie de composants</Bold>
      </p>
    )
  },
  {
    Icon: ArrowRightLeft,
    content: (
      <p>
        <Bold>Migrer des interfaces</Bold> vers des technologies Javascript
        modernes
      </p>
    )
  },
  {
    Icon: GraduationCap,
    content: (
      <p>
        <Bold>Accompagner et conseiller</Bold> des développeurs moins
        expérimentés en Django et React
      </p>
    )
  }
];

export const WHAT_I_BRING: AboutMeList = [
  {
    Icon: BicepsFlexed,
    content: <p>Mes 5 ans d&apos;expérience en développement full stack</p>
  },
  {
    Icon: Laptop,
    content: <p>Mon expertise en développement backend et frontend</p>
  },
  {
    Icon: BrickWall,
    content: <p>Ma rigueur et mon souci de la qualité du code</p>
  },
  {
    Icon: UsersRound,
    content: <p>Mon esprit collaboratif et le partage des mes connaissances</p>
  },
  {
    Icon: LucideInfinity,
    content: (
      <p>
        Ma connaissance des pratiques DevOps, de l&apos;IAC, de la CI/CD, de la
        conteneurisation...
      </p>
    )
  }
];
