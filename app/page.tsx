// app/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";

import JsonLd from "@/components/JsonLd";
import { Introduction } from "@/components/introduction";
import Course from "@/components/courses";
import WhyCollege from "@/components/why-college";
import MarketReady from "@/components/market-ready";
import Testimonials from "@/components/testimonials";

export const dynamic = "force-static";

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
        <Introduction />

        <div className="belowFold">
          <Suspense fallback={null}>
            <Course />
          </Suspense>
        </div>

        <div className="belowFold">
          <Suspense fallback={null}>
            <WhyCollege />
          </Suspense>
        </div>

        <div className="belowFold">
          <Suspense fallback={null}>
            <MarketReady />
          </Suspense>
        </div>

        <div className="belowFold">
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>
        </div>
      </main>

      <JsonLd json={org} />
    </>
  );
}
