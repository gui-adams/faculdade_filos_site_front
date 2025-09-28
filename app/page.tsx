import type { Metadata } from "next";

import { TicketItem } from "@/components/ticket";
import { Faq } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { Contato } from "@/components/contato";
import { Lgpd } from "@/components/lgpd";
import { Sobre } from "@/components/sobre";
import { Plataforma } from "@/components/plataforma";
import { Conteudo } from "@/components/conteudo";
import { Video } from "@/components/video";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Faculdade Filos — Ensino Superior de Excelência",
  description:
    "Graduação e pós-graduação com professores qualificados e infraestrutura moderna. Inscrições abertas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const org = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Faculdade Filos",
    url: "https://faculdadefilos.com.br",
    logo: "https://faculdadefilos.com.br/favicon-32.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Principal, 123",
      addressLocality: "Formosa",
      addressRegion: "GO",
      postalCode: "73800-000",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <main>
        <section id="plataforma">
          <h1>Faculdade Filos</h1>
          <Plataforma />
        </section>

        <section id="conteudo">
          <h2>Conteúdo</h2>
          <Conteudo />
        </section>

        <section id="lgpd">
          <h2>LGPD</h2>
          <Lgpd />
        </section>

        <section id="video">
          <h2>Vídeo</h2>
          <Video />
        </section>

        <section id="newsletter">
          <h2>Newsletter</h2>
          <Newsletter />
        </section>

        <section id="planos">
          <h2>Planos</h2>
          <TicketItem />
        </section>

        <section id="faq">
          <h2>Perguntas frequentes</h2>
          <Faq />
        </section>

        <section id="sobre">
          <h2>Sobre</h2>
          <Sobre />
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <Contato />
        </section>
      </main>

      <JsonLd json={org} />
    </>
  );
}
