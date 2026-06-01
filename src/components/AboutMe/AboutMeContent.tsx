import "./index.css";

import SkillsList from "./SkillsList";

function AboutMeContent() {
  return (
    <div>
      <h3 className="cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold mb-2 max-w-fit text-lg md:mb-4 md:text-2xl">
        Présentation
      </h3>
      <div className="flex flex-col gap-y-4 text-justify">
        <p>
          Développeuse full stack avec{" "}
          <strong className="font-bold">5 ans d&lsquo;expérience</strong> dans
          la création d&lsquo;applications web{" "}
          <strong className="font-bold">
            scalables et centrées sur l&lsquo;utilisateur
          </strong>
          .
        </p>
        <p>
          Je conçois et développe des applications robustes, de
          l&lsquo;interface utilisateur à l&lsquo;architecture backend, en
          privilégiant la <strong className="font-bold">collaboration</strong>,
          la <strong className="font-bold">qualité du code</strong>, la{" "}
          <strong className="font-bold">maintenabilité</strong>, la{" "}
          <strong className="font-bold">perfomance</strong> et une{" "}
          <strong className="font-bold">expérience utilisateur optimale</strong>
          .
        </p>
      </div>
      <div className="mt-5 md:mt-8">
        <h3 className="cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold mb-2 max-w-fit text-lg md:mb-4 md:text-2xl">
          Projets
        </h3>
        <div className="flex flex-col gap-y-4 text-justify">
          <p>
            Dans mon parcours, j'ai été amenée à :
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">
              maintenir et développer les nouvelles fonctionnalités
            </strong>{" "}
            d'une application SaaS Djando / React en autonomie
            <br />
            &nbsp;-{" "}
            <strong className="font-bold">
              concevoir et créer une application
            </strong>{" "}
            SaaS Djando / React
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
            <strong className="font-bold">peer programming</strong> et de
            conception, toujours avec le souci de mettre mon expérience et mes
            connaissances au service de l’équipe.
          </p>
        </div>
      </div>
      <div className="holographic-cards-scrollbar mt-5 md:mt-8">
        <h3 className="cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold mb-2 max-w-fit text-lg md:mb-4 md:text-2xl">
          Technologies
        </h3>
        <p>
          Au fil des années, j&lsquo;ai travaillé avec différentes technologies.
          En voici quelques-unes !
        </p>

        <SkillsList />
      </div>
    </div>
  );
}

export default AboutMeContent;
