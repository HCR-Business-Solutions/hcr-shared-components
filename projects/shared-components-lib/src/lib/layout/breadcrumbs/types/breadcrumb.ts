export type Breadcrumb = IconCrumb | TextCrumb;

export interface IconCrumb {
  url: string;
  icon: string;
}

export interface TextCrumb {
  url: string;
  text: string;
}
