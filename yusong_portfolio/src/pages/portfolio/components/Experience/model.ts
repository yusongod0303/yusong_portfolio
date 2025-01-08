export interface ExperienceSubProject {
  title: string;
}

export interface ExperienceContent {
  idx?: number;
  datePeriod: string;
  title: string;
  subTitle: string;
  desc: string;
  projects?: ExperienceSubProject[];
}
