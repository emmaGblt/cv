import Experiences from "./Experiences";

function CurriculumVitaeCard() {
  return (
    <div>
      <Experiences
        title="Expériences"
        experiences={[
          {
            job: "Développeuse font-end",
            organization: "Carbo",
            location: "Normandie (remote)",
            startDate: new Date("2024-08-01"),
            endDate: new Date("2025-11-18"),
            descriptions: [
              "Participer à la mise en place d'un Design System afin d'harmoniser nos expériences, de faciliter la collaboration et de documenter et tester nos composants",
              "Participer au développement, à la conception et à la maintenance de notre librairie de composants",
              "Participer avec le Produit et le Design aux réflexions et aux choix concernant les refontes et migrations de pages",
              "Migrer les interfaces historiques en utilisant notre Design System, notre librairie de composants et les technologies React / Typescript / React router",
              "Assurer la stabilité de ces nouvelles pages par l'écriture de tests systématiques",
              "Travailler en collaboration avec un.e développeur.se back-end",
              "Réaliser des développements front-end sur l'application historique (Ruby on Rails)",
              "Réaliser des développements full-stack (Ruby on Rails / React)",
            ],
          },
          {
            job: "Développeuse full-stack (Python / React)",
            organization: "Carbo",
            location: "Normandie (remote)",
            startDate: new Date("2023-07-10"),
            endDate: new Date("2024-08-01"),
            descriptions: [
              "Participer à la conception du modèle de données et des fonctionnalités ainsi qu'au choix des technologies utilisées",
              "Travailler conjointement avec le Produit et le Design pour concevoir les interfaces, les fonctionnalités et définir le parcours utilisateur",
              "Développer les fonctionnalités front-end et back-end",
              "Assurer la stabilité de l'application par l'écriture de tests systématiques",
              "Assurer la maintenance de l'application",
              "Intervenir pour identifier et corriger les bugs et apporter une solution rapide à nos utilisateurs",
            ],
          },
          {
            job: "Développeuse full-stack (Python / React)",
            organization: "Doqboard",
            location: "Normandie (remote)",
            startDate: new Date("2021-02-01"),
            endDate: new Date("2023-07-01"),
          },
        ]}
      />
    </div>
  );
}

export default CurriculumVitaeCard;
