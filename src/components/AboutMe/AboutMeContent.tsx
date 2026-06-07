import "./index.css";

import Bold from "@ui/Typography/Bold";
import Heading from "@ui/Typography/Heading";
import {
  ArrowRightLeft,
  BicepsFlexed,
  Blocks,
  BrickWall,
  GraduationCap,
  Hammer,
  Infinity as LucideInfinity,
  Laptop,
  type LucideIcon,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { PropsWithChildren } from "react";

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
  return (
    <div>
      <Heading level="3">Présentation</Heading>
      <div className="flex flex-col gap-y-4 text-justify">
        <p className="mb-2 text-lg font-semibold italic">
          Moi c&apos;est Emma, développeuse full stack française avec{" "}
          <Bold>5 ans d&apos;expérience</Bold> dans la création
          d&apos;applications web modernes ! J&apos;aime travailler sur des
          projets <Bold>impactants</Bold> et <Bold>engagés !</Bold>
        </p>
        <p>
          Je conçois et développe des applications web{" "}
          <Bold>
            intuitives, maintenables et centrées sur leurs utilisateurs
          </Bold>{" "}
          en utilisant des technologies modernes et reconnues comme React,
          Typescript, Python, Django...
        </p>
        <p>
          J&apos;interviens sur l&apos;ensemble du cycle de développement, de
          l&apos;interface utilisateur au backend, en privilégiant la{" "}
          <Bold>collaboration</Bold>, la <Bold>qualité du code</Bold>, la{" "}
          <Bold>performance</Bold> et <Bold>l&apos;expérience utilisateur</Bold>
          .
        </p>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">Projets</Heading>
        <div className="flex flex-col gap-y-4 text-justify">
          <div>
            <p className="mb-3">Dans mon parcours, j&apos;ai été amenée à :</p>
            <List>
              <ListItem>
                <ListIcon Icon={Hammer} />
                <p>
                  <Bold>
                    Maintenir et développer les nouvelles fonctionnalités
                  </Bold>{" "}
                  d&apos;une application SaaS Django / React en autonomie
                </p>
              </ListItem>
              <ListItem>
                <ListIcon Icon={Blocks} />
                <p>
                  <Bold>Concevoir et créer une application</Bold> SaaS Django /
                  React
                </p>
              </ListItem>
              <ListItem>
                <ListIcon Icon={Sparkles} />
                <p>
                  <Bold>Créer et maintenir un design system</Bold> et une{" "}
                  <Bold>librairie de composants</Bold>
                </p>
              </ListItem>
              <ListItem>
                <ListIcon Icon={ArrowRightLeft} />
                <p>
                  <Bold>Migrer des interfaces</Bold> vers des technologies
                  Javascript modernes
                </p>
              </ListItem>
              <ListItem>
                <ListIcon Icon={GraduationCap} />
                <p>
                  <Bold>Accompagner et conseiller</Bold> des développeurs moins
                  expérimentés en Django et React
                </p>
              </ListItem>
            </List>
          </div>
          <p>
            J’ai travaillé au sein d’équipes pluridisciplinaires, en{" "}
            <Bold>collaboration</Bold> avec des Product Manager, des Designer et
            d’autres développeurs, sur des cycles de développement courts et
            itératifs.
          </p>
          <p>
            J’ai réalisé quotidiennement des <Bold>reviews de code</Bold> et
            participé à des sessions de <Bold>peer programming</Bold> et de{" "}
            <Bold>conception</Bold>, toujours avec le souci de mettre mon
            expérience et mes connaissances au service de l’équipe.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">Ce que j&apos;apporte à mon équipe</Heading>
        <List>
          <ListItem>
            <ListIcon Icon={BicepsFlexed} />
            <p>Mes 5 ans d&apos;expérience en développement full stack</p>
          </ListItem>
          <ListItem>
            <ListIcon Icon={Laptop} />
            <p>Mon expertise en développement backend et frontend</p>
          </ListItem>
          <ListItem>
            <ListIcon Icon={BrickWall} />
            <p>Ma rigueur et mon souci de la qualité du code</p>
          </ListItem>
          <ListItem>
            <ListIcon Icon={UsersRound} />
            <p>Mon esprit collaboratif et le partage des mes connaissances</p>
          </ListItem>
          <ListItem>
            <ListIcon Icon={LucideInfinity} />
            <p>
              Ma connaissance des pratiques DevOps, de l&apos;IAC, de la CI/CD,
              de la conteneurisation...
            </p>
          </ListItem>
        </List>
      </div>
      <div className="holographic-cards-scrollbar mt-5 md:mt-8">
        <Heading level="3">Technologies</Heading>
        <p>
          Au fil des années, j&apos;ai travaillé avec différentes technologies.
          En voici quelques-unes !
        </p>
        <SkillsList />
      </div>
    </div>
  );
}

export default AboutMeContent;
