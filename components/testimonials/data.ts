import type { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "israel",
    name: "Israel",
    program: "Filosofia",
    photo: "/israel-depoimentos.webp",
    excerpt:
      "Foi uma grande jornada na minha vida, fazer parte de uma das melhores universidades do Brasil...",
    href: "/depoimentos/israel",
  },
  {
    id: "leticia",
    name: "Letícia Naome",
    program: "Ciências Econômicas",
    photo: "/letícia-depoimento.webp", // <-- com acento (igual ao arquivo)
    excerpt:
      "Entrei na Faculdade Filos em 2016 para fazer ciências econômicas com bolsa e desde então...",
    href: "/depoimentos/leticia",
  },
  {
    id: "asn",
    name: "ASN",
    program: "Administração",
    photo: "/asn-depoimentos.webp", // <-- era ash, mas o arquivo é asn
    excerpt:
      "A experiência acadêmica foi completa e transformadora. Tive apoio para estágio e pesquisa...",
    href: "/depoimentos/asn",
  },
];
