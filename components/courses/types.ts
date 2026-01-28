import type { StaticImageData } from "next/image";

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
  image: StaticImageData | string; // ✅ permite import e string
  applyHref: string;
  learnHref: string;
};
