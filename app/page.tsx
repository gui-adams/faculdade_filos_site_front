// app/page.tsx
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { Introduction } from "@/components/introduction";
import Course from "@/components/courses";
import WhyCollege from "@/components/why-college";
import MarketReady from "@/components/market-ready";
import Testimonials from "@/components/testimonials";

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
      addressLocality: "Águas Lindas",
      addressRegion: "GO",
      postalCode: "73800-000",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <main>
        {/* O <h1> está dentro de <Plataforma /> */}
        <section id="introdução" aria-labelledby="sec-introduction">
          <Introduction />
        </section>

        <section id="cursos" aria-labelledby="sec-cursos">
            <Course />
        </section>

        <section id="sobre" aria-labelledby="sec-sobre">
          <WhyCollege />        
        </section>

        <section id="mercado" aria-labelledby="sec-mercado">
      <MarketReady />
        </section>

              <section id="depoimentos" aria-labelledby="sec-depoimentos">
      <Testimonials />

        </section>
        



      </main>

      <JsonLd json={org} />
    </>
  );
}
