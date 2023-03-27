export type Breadcrumb = IconCrumb | TextCrumb;

export interface IconCrumb {
  url: string;
  icon: string;
  classes?: string;
}

export interface TextCrumb {
  url: string;
  text: string;
  classes?: string;
}
