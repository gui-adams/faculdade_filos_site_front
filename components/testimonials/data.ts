import type { Testimonial } from "./types";

import israelPhoto from "@/public/depoimentos/israel.webp";
import leticiaPhoto from "@/public/depoimentos/leticia.webp";
import ashPhoto from "@/public/depoimentos/ash.webp";

export const testimonials: Testimonial[] = [
  {
    id: "israel",
    name: "Israel",
    program: "Filosofia",
    photo: israelPhoto,
    excerpt:
      "Foi uma grande jornada na minha vida, fazer parte de uma das melhores universidades do Brasil...",
    href: "/depoimentos/israel",
  },
  {
    id: "leticia",
    name: "Letícia Naome",
    program: "Ciências Econômicas",
    photo: leticiaPhoto,
    excerpt:
      "Entrei na Faculdade Filos em 2016 para fazer Ciências Econômicas com bolsa e desde então...",
    href: "/depoimentos/leticia",
  },
  {
    id: "ash",
    name: "Ash",
    program: "Administração",
    photo: ashPhoto,
    excerpt:
      "A experiência acadêmica foi completa e transformadora. Tive apoio para estágio e pesquisa...",
    href: "/depoimentos/ash",
  },
];
