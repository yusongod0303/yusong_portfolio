export interface EducationContentItem {
  content: string;
  link: string;
}

export interface EducationContent {
  idx?: number;
  datePeriod: string;
  title: string;
  subTitle: string;
  desc: EducationContentItem[] | string;
}
