export type TPostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type TRouteStackParams = {
  Inicio: undefined;
  Detalle: TPostImage;
};
