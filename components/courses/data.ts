import type { Course } from "./types";

export const courses: Course[] = [
  {
    id: "adm",
    title: "Administração",
    level: "graduacao",
    type: "Bacharelado",
    modality: "EAD",
    // Corrigido: o arquivo na pasta public é .webp e possui acento
    image: "/administração.webp", 
    applyHref: "/admissions?curso=administracao",
    learnHref: "/cursos/administracao",
  },
  {
    id: "dir",
    title: "Direito",
    level: "graduacao",
    type: "Bacharelado",
    modality: "Presencial",
    // Corrigido: o arquivo real é .webp
    image: "/direito.webp",
    applyHref: "/admissions?curso=direito",
    learnHref: "/cursos/direito",
  },
  {
    id: "ped",
    title: "Pedagogia",
    level: "graduacao",
    type: "Licenciatura",
    modality: "Presencial",
    // Corrigido: o arquivo real é .webp
    image: "/pedagogia.webp",
    applyHref: "/admissions?curso=pedagogia",
    learnHref: "/cursos/pedagogia",
  },
  {
    id: "rad",
    title: "Radiologia",
    level: "graduacao",
    type: "Tecnólogo",
    modality: "Presencial",
    // Corrigido: o arquivo real é .webp
    image: "/radiologia.webp",
    applyHref: "/admissions?curso=radiologia",
    learnHref: "/cursos/radiologia",
  },
  {
    id: "pos-gestao-projetos",
    title: "Gestão de Projetos",
    level: "pos",
    type: "Especialização",
    modality: "EAD",
    // Nota: Verifique se estes arquivos existem em public/cursos/ 
    // ou se deseja usar uma imagem genérica como "/mercado.webp"
    image: "/mercado.webp", 
    applyHref: "/admissions?curso=pos-gestao-projetos",
    learnHref: "/cursos/pos-gestao-projetos",
  },
  {
    id: "mba-data",
    title: "MBA em Data Science",
    level: "mba",
    type: "MBA",
    modality: "EAD",
    // Nota: Verifique se estes arquivos existem ou use uma alternativa
    image: "/porque.webp",
    applyHref: "/admissions?curso=mba-data",
    learnHref: "/cursos/mba-data",
  },
];