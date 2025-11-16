import Divider from "../ui/Divider";
import SkillsList from "./SkillsList";
import "./index.css";

function AboutMeContent() {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-4 cartoon-title text-light text-shadow-md text-shadow-primary max-w-fit">
        À propos de moi
      </h2>
      <Divider className="w-1/8 mb-8" type="thick" />
      <div className="flex flex-col gap-y-4 text-justify font-semibold">
        <p>
          Développeuse full stack depuis 5 ans, je travaille sur des{" "}
          <strong className="font-bold">projets à impact et engagés</strong> !
        </p>
        <p>
          Dans mon parcours, j'ai été amenée à travailler sur des applications
          Saas avec Django, Ruby on Rails et React (React Router / Remix et
          Typescript). J'ai également participé à la création et à la
          maintenance d'un Design System et d'une librairie de composants
          (Storybook).
        </p>
        <p>
          J'aime collaborer, partager mes connaissances et le{" "}
          <strong className="font-bold">travail d'équipe</strong>.
        </p>
        <p>
          J'ai à cœur de fournir un code de qualité, robuste et rigoureusement
          testé.
        </p>
        <p>
          J’ai travaillé au sein d’équipes pluridisciplinaires, en{" "}
          <strong className="font-bold">collaboration</strong> avec des Product
          Manager, des Designer et d’autres développeurs, sur des cycles de
          développement courts et itératifs. J’ai réalisé quotidiennement des{" "}
          <strong className="font-bold">reviews de code</strong> et participé à
          des sessions de{" "}
          <strong className="font-bold">peer programming</strong> et de
          conception, toujours avec le souci de mettre mon expérience et mes
          connaissances au service de l’équipe.
        </p>
      </div>
      <div className="mt-8 holographic-cards-scrollbar">
        <h3 className="max-w-fit font-bold text-3xl cartoon-title text-shadow-md text-shadow-primary text-light mb-4">
          Compétences
        </h3>
        <p>
          Au fil des années, j'ai travaillé avec différentes technologies. En
          voici quelques-unes !
        </p>
        <div className="relative h-56 overflow-x-auto">
          <SkillsList />
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;
