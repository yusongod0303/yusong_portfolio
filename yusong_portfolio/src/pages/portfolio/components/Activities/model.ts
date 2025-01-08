export interface ActivityContentItem {
  content: string;
  link: string;
}

export interface ActivityContent {
  idx?: number;
  datePeriod: string;
  title: string;
  subTitle: string;
  desc: ActivityContentItem[] | string;
}
