import "./index.css";

import Heading from "@ui/Typography/Heading";

import SkillsList from "./SkillsList";

function AboutMeContent() {
  return (
    <div>
      <Heading level="3">Présentation</Heading>
      <div className="flex flex-col gap-y-4 text-justify">
        <p className="mb-2 text-lg font-semibold italic">
          Moi c&apos;est Emma, développeuse full stack française avec{" "}
          <strong className="font-bold">5 ans d&apos;expérience</strong> dans la
          création d&apos;applications web modernes ! J&apos;aime travailler sur
          des projets <strong className="font-bold">impactants</strong> et{" "}
          <strong className="font-bold">engagés !</strong>
        </p>
        <p>
          Je conçois et développe des applications web{" "}
          <strong className="font-bold">
            intuitives, maintenables et centrées sur leurs utilisateurs
          </strong>{" "}
          en utilisant des technologies modernes et reconnues comme React,
          Typescript, Python, Django...
        </p>
        <p>
          J&apos;interviens sur l&apos;ensemble du cycle de développement, de
          l&apos;interface utilisateur au backend, en privilégiant la{" "}
          <strong className="font-bold">collaboration</strong>, la{" "}
          <strong className="font-bold">qualité du code</strong>, la{" "}
          <strong className="font-bold">performance</strong> et{" "}
          <strong className="font-bold">l&apos;expérience utilisateur</strong>.
        </p>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">Projets</Heading>
        <div className="flex flex-col gap-y-4 text-justify">
          <p>
            Dans mon parcours, j&apos;ai été amenée à :
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">
              maintenir et développer les nouvelles fonctionnalités
            </strong>{" "}
            d&apos;une application SaaS Django / React en autonomie
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">
              concevoir et créer une application
            </strong>{" "}
            SaaS Django / React
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">
              créer et maintenir un design system
            </strong>{" "}
            et une{" "}
            <strong className="font-bold">librairie de composants</strong>
            <br />
            &nbsp;- <strong className="font-bold">
              migrer des interfaces
            </strong>{" "}
            vers des technologies Javascript modernes
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">accompagner et conseiller</strong> des
            développeurs moins expérimentés en Django et React
          </p>
          <p>
            J’ai travaillé au sein d’équipes pluridisciplinaires, en{" "}
            <strong className="font-bold">collaboration</strong> avec des
            Product Manager, des Designer et d’autres développeurs, sur des
            cycles de développement courts et itératifs.
          </p>
          <p>
            J’ai réalisé quotidiennement des{" "}
            <strong className="font-bold">reviews de code</strong> et participé
            à des sessions de{" "}
            <strong className="font-bold">peer programming</strong> et de{" "}
            <strong className="font-bold">conception</strong>, toujours avec le
            souci de mettre mon expérience et mes connaissances au service de
            l’équipe.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-8">
        <Heading level="3">Ce que j&apos;apporte à mon équipe</Heading>
        <div className="flex flex-col gap-y-4 text-justify">
          <p>
            💪 Mes 5 ans d&apos;expérience en développement full stack
            <br />
            💻 Mon expertise en développement backend et frontend
            <br />
            🧱 Ma rigueur et mon souci de la qualité du code
            <br />
            👥 Mon esprit collaboratif et le partage des mes connaissances
            <br />
            ♾️ Ma connaissance des pratiques DevOps, de l&apos;infrastructure as
            code, du déploiement continu, de la conteneurisation...
          </p>
        </div>
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
