import type { TExperience } from "@/types";

export const PROFESSIONAL_EXPERIENCES: TExperience[] = [
  {
    title: "Développeuse front-end",
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
      "Réaliser des développements front-end sur l'application historique (Ruby on Rails)",
      "Réaliser des développements full-stack (Ruby on Rails / React)"
    ]
  },
  {
    title: "Développeuse full stack (Python / React)",
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
      "Intervenir pour identifier et corriger les bugs et apporter une solution rapide à nos utilisateurs"
    ]
  },
  {
    title: "Développeuse full stack (Python / React)",
    organization: "Doqboard",
    location: "Normandie (remote)",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2023-07-01"),
    descriptions: [
      "Outil d'import de données depuis un fichier .csv",
      "Fonctionnalité de suivi des données manquantes au sein d'un questionnaire",
      "Fonctionnalité de contrôle de la validité des données au sein d'un questionnaire",
      "Fonctionnalité de qualification des données manquantes au sein d'un questionnaire",
      "Espace de communauté permettant de mettre en avant certains types de compte"
    ]
  }
];

export const EDUCATION: TExperience[] = [
  {
    title: "Administrateur Système DevOps",
    organization: "La Capsule",
    location: "Paris",
    startDate: new Date("2026-02-23"),
    endDate: new Date("2026-05-04"),
    descriptions: [
      "Automatiser le déploiement d'une infrastructure dans le cloud  : IAC, Terraform, Ansible, AWS, réseau, sécurité...",
      "Déployer une application en continu : Gitlab CI/CD, Docker, Kubernetes, analyse statique et de qualité, tests de montée en charge, Hadolint, Trivy, Cosign...",
      "Superviser les services déployés : Grafana, Prometheus, AlertManager...",
      "Projet de fin de formation : déploiement automatisé d'une application conteneurisée (Kubernetes) dans les clouds AWS et Linode, avec sécurisation et monitoring"
    ]
  },
  {
    title: "Département Génie Mathématiques",
    organization: "INSA Rouen Normandie",
    location: "Saint-Étienne-du-Rouvray (Normandie)",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2020-09-01"),
    showOnlyDateYear: true,
    descriptions: [
      "Déléguée de promotion",
      "Bourse d'excellence de la Fondation Francis Bouygues"
    ]
  },
  {
    title: "Cycle préparatoire ingénieur",
    organization: "INSA Rouen Normandie",
    location: "Saint-Étienne-du-Rouvray (Normandie)",
    startDate: new Date("2017-09-01"),
    endDate: new Date("2019-09-01"),
    showOnlyDateYear: true,
    descriptions: [
      "Section Internationale Bilingue",
      "Section Théâtre-Études",
      "Bourse d'excellence de la Fondation Francis Bouygues",
      "Bourse Lumières des Cités du CRIJ Normandie Rouen",
      "Bourse au mérite du CROUS"
    ]
  },
  {
    title: "Baccalauréat SVT",
    organization: "Lycée Jehan Ango",
    location: "Dieppe (Normandie)",
    startDate: new Date("2014-09-01"),
    endDate: new Date("2027-09-01"),
    descriptions: [
      "Niveau : Mention Très Bien",
      "Spécialité Mathématiques",
      "Mention européenne en Espagnol"
    ],
    showOnlyDateYear: true
  },
  {
    title: "Diploma de español como lengua extranjera nivel B1",
    organization: "Instituto Cervantes",
    location: "Dieppe (Normandie)",
    startDate: new Date("2015-09-01"),
    showOnlyDateYear: true,
    descriptions: []
  }
];
