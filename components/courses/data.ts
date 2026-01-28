import type { Course } from "./types";

import administracao from "@/public/cursos/administracao.webp";
import direito from "@/public/cursos/direito.webp";
import pedagogia from "@/public/cursos/pedagogia.webp";
import radiologia from "@/public/cursos/radiologia.webp";

// ⚠️ Estes dois estão faltando / nome diferente em public/cursos
// import posGestaoProjetos from "@/public/cursos/pos-gestao-projetos.webp";
// import mbaDataScience from "@/public/cursos/mba-data.webp";

export const courses: Course[] = [
  {
    id: "adm",
    title: "Administração",
    level: "graduacao",
    type: "Bacharelado",
    modality: "EAD",
    image: administracao,
    applyHref: "/admissions?curso=administracao",
    learnHref: "/cursos/administracao",
  },
  {
    id: "dir",
    title: "Direito",
    level: "graduacao",
    type: "Bacharelado",
    modality: "Presencial",
    image: direito,
    applyHref: "/admissions?curso=direito",
    learnHref: "/cursos/direito",
  },
  {
    id: "ped",
    title: "Pedagogia",
    level: "graduacao",
    type: "Licenciatura",
    modality: "Presencial",
    image: pedagogia,
    applyHref: "/admissions?curso=pedagogia",
    learnHref: "/cursos/pedagogia",
  },
  {
    id: "rad",
    title: "Radiologia",
    level: "graduacao",
    type: "Tecnólogo",
    modality: "Presencial",
    image: radiologia,
    applyHref: "/admissions?curso=radiologia",
    learnHref: "/cursos/radiologia",
  },
  {
    id: "pos-gestao-projetos",
    title: "Gestão de Projetos",
    level: "pos",
    type: "Especialização",
    modality: "EAD",
    image: "/cursos/pos-gestao-projetos.webp", // ✅ fallback (não quebra build)
    applyHref: "/admissions?curso=pos-gestao-projetos",
    learnHref: "/cursos/pos-gestao-projetos",
  },
  {
    id: "mba-data",
    title: "MBA em Data Science",
    level: "mba",
    type: "MBA",
    modality: "EAD",
    image: "/cursos/mba-data.webp", // ✅ fallback (não quebra build)
    applyHref: "/admissions?curso=mba-data",
    learnHref: "/cursos/mba-data",
  },
];
