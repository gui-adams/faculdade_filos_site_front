export type CourseLevel = "graduacao" | "pos" | "mba";
export type CourseType =
  | "Bacharelado"
  | "Tecnólogo"
  | "Licenciatura"
  | "Especialização"
  | "MBA";

export type Course = {
  id: string;
  title: string;
  level: CourseLevel;
  type: CourseType;
  modality: "EAD" | "Presencial";
  image: string;     // caminho em /public
  applyHref: string; // link de inscrição
  learnHref: string; // link de saiba mais
};
