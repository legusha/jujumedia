export interface ITab {
  title: string;
  url: string;
  active: boolean,
  loading: boolean,
  [key: string]: string | boolean
}
