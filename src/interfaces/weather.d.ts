export interface ITab {
  title: string;
  id: number;
  loading: boolean;
  [key: string]: string | boolean | number
}
export interface ITemperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface IWind {
  speed: number;
  deg: number;
}
