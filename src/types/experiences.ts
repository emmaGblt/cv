type TExperience = {
  title: string;
  organization: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  descriptions?: Array<string>;
  showOnlyDateYear?: boolean;
};

export type { TExperience };
