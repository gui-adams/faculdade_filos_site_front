import type { Course } from "./types";

export const courses: Course[] = [
  {
    id: "adm",
    title: "Administração",
    level: "graduacao",
    type: "Bacharelado",
    modality: "EAD",
    image: "/cursos/administracao.jpg",
    applyHref: "/admissions?curso=administracao",
    learnHref: "/cursos/administracao",
  },
  {
    id: "dir",
    title: "Direito",
    level: "graduacao",
    type: "Bacharelado",
    modality: "Presencial",
    image: "/cursos/direito.jpg",
    applyHref: "/admissions?curso=direito",
    learnHref: "/cursos/direito",
  },
  {
    id: "pos-gestao-projetos",
    title: "Gestão de Projetos",
    level: "pos",
    type: "Especialização",
    modality: "EAD",
    image: "/cursos/pos-gestao-projetos.jpg",
    applyHref: "/admissions?curso=pos-gestao-projetos",
    learnHref: "/cursos/pos-gestao-projetos",
  },
  {
    id: "mba-data",
    title: "MBA em Data Science",
    level: "mba",
    type: "MBA",
    modality: "EAD",
    image: "/cursos/mba-data.jpg",
    applyHref: "/admissions?curso=mba-data",
    learnHref: "/cursos/mba-data",
  },
];
