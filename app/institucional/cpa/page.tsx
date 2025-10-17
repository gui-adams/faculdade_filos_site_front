// app/institucional/cpa/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, Users, Building2, Lightbulb, FileText } from "lucide-react";
import s from "./styles.module.scss";

export const metadata: Metadata = {
  title: "CPA - Comissão Própria de Avaliação",
  description: "Conheça a Comissão Própria de Avaliação (CPA) da Faculdade Filos, responsável por coordenar os processos de avaliação institucional.",
  alternates: { canonical: "/institucional/cpa" },
};

export default function CpaPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <span className={s.kicker}>Institucional</span>
          <h1 className={s.title}>Comissão Própria de Avaliação (CPA)</h1>
          <p className={s.lead}>
            Analisando e aprimorando a qualidade do ensino, da infraestrutura e dos serviços oferecidos pela Faculdade Filos.
          </p>
        </div>
      </section>

      <section className={s.contentSection}>
        <div className={s.contentGrid}>
          <div className={s.mediaColumn}>
            <Image
              src="/nos.png" 
              alt="Equipe reunida em uma mesa de trabalho"
              width={500}
              height={350}
              className={s.image}
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>

          <div className={s.textColumn}>
            <div className={s.card}>
              <div className={s.iconWrapper}>
                <CheckSquare />
              </div>
              <div>
                <h2 className={s.cardTitle}>O que é a CPA?</h2>
                <p>
                  A Comissão Própria de Avaliação (CPA) é um órgão independente responsável por coordenar os processos de avaliação institucional. Sua principal missão é analisar e aprimorar a qualidade do ensino, da infraestrutura e dos serviços oferecidos.
                </p>
              </div>
            </div>

            <div className={s.card}>
              <div className={s.iconWrapper}>
                <Users />
              </div>
              <div>
                <h2 className={s.cardTitle}>Quem participa?</h2>
                <p>
                  A CPA é formada por representantes de todos os segmentos da comunidade acadêmica (docentes, discentes, técnicos-administrativos) e da sociedade civil, garantindo uma avaliação transparente e participativa.
                </p>
              </div>
            </div>

             <div className={s.card}>
              <div className={s.iconWrapper}>
                <Lightbulb />
              </div>
              <div>
                <h2 className={s.cardTitle}>Como a CPA atua?</h2>
                <p>
                  Na Faculdade Filos, a CPA trabalha para que os cursos de Administração, Direito, Pedagogia e Radiologia estejam sempre alinhados com as necessidades dos alunos e com as exigências do mercado, assegurando a excelência no ensino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.reportsSection}>
        <h2 className={s.reportsTitle}>Relatórios da CPA</h2>
        <div className={s.reportsGrid}>
          <Link href="/caminho/para/relatorio-2022.pdf" className={s.reportCard} target="_blank">
            <FileText />
            <span>Relatório CPA 2022</span>
          </Link>
          <Link href="/caminho/para/relatorio-2023.pdf" className={s.reportCard} target="_blank">
            <FileText />
            <span>Relatório CPA 2023</span>
          </Link>
          <Link href="/caminho/para/relatorio-2024.pdf" className={s.reportCard} target="_blank">
            <FileText />
            <span>Relatório CPA 2024</span>
          </Link>
        </div>
      </section>
    </>
  );
}