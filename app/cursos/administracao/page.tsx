import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookCheck, Target, Users, Award, FileText } from "lucide-react";
import s from "./styles.module.scss";

// ✅ Premium: import estático (blur automático + build time)
import heroImg from "@/public/cursos/administracao.webp";

export const metadata: Metadata = {
  title: "Curso de Administração",
  description:
    "Formar profissionais capazes de atuar de maneira estratégica, ética e inovadora na gestão de organizações públicas e privadas.",
  alternates: { canonical: "/cursos/administracao" },
};

export default function AdministracaoPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <span className={s.kicker}>Graduação</span>

          <h1 className={s.title}>Administração</h1>

          <p className={s.lead}>
            Formação de profissionais capazes de atuar de maneira estratégica, ética e inovadora na gestão de
            organizações públicas e privadas.
          </p>

          <p className={s.coordinator}>
            Coordenação: <strong>Professora Patricia de Carvalho</strong>
          </p>

          <div className={s.actions}>
            <Link href="/admissions?curso=administracao" className={s.ctaPrimary}>
              Inscreva-se agora <ArrowRight size={20} />
            </Link>

            <Link href="/caminho/para/matriz-adm.pdf" className={s.ctaSecondary} target="_blank">
              Matriz Curricular <FileText size={20} />
            </Link>
          </div>
        </div>

        <div className={s.heroMedia} aria-hidden="true">
          <Image
            src={heroImg}
            alt="Curso de Administração"
            className={s.heroImg}
            priority
            placeholder="blur"
            quality={80}
            sizes="(max-width: 900px) 92vw, 520px"
          />
        </div>
      </section>

      <section className={s.details}>
        <div className={s.detailGrid}>
          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Target />
            </div>
            <h2 className={s.cardTitle}>Objetivos do Curso</h2>
            <ul className={s.list}>
              <li>Proporcionar uma formação sólida em gestão, liderança e tomada de decisão.</li>
              <li>Desenvolver competências para planejar, organizar, dirigir e controlar processos.</li>
              <li>Preparar profissionais para os desafios do mercado globalizado.</li>
              <li>Estimular o empreendedorismo, a pesquisa e a inovação.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <BookCheck />
            </div>
            <h2 className={s.cardTitle}>Estrutura Curricular</h2>
            <p className={s.cardText}>O curso é estruturado em 8 semestres (4 anos) e contempla:</p>
            <ul className={s.list}>
              <li>
                <strong>Formação Básica:</strong> Economia, Contabilidade, Matemática Financeira.
              </li>
              <li>
                <strong>Formação Profissional:</strong> Gestão de Pessoas, Marketing, Finanças, Logística.
              </li>
              <li>
                <strong>Gestão Pública e Social:</strong> Políticas Públicas e Sustentabilidade.
              </li>
              <li>
                <strong>Prática Profissional:</strong> Projetos, estágios e simulações de negócios.
              </li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Award />
            </div>
            <h2 className={s.cardTitle}>Diferenciais da Faculdade Filos</h2>
            <ul className={s.list}>
              <li>Coordenação dedicada e corpo docente altamente qualificado.</li>
              <li>Parcerias com empresas para estágios e projetos práticos.</li>
              <li>Incentivo ao empreendedorismo com laboratórios de inovação.</li>
              <li>Infraestrutura moderna com biblioteca atualizada e recursos tecnológicos.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Users />
            </div>
            <h2 className={s.cardTitle}>Perfil do Egresso</h2>
            <ul className={s.list}>
              <li>Capaz de atuar em diferentes áreas da gestão organizacional.</li>
              <li>Preparado para liderar equipes e tomar decisões estratégicas.</li>
              <li>Comprometido com a ética, a sustentabilidade e a responsabilidade social.</li>
              <li>Habilitado para empreender e contribuir para o desenvolvimento da sociedade.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
