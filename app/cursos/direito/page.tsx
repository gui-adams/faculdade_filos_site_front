import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookText, Scale, Target, Award, FileText } from "lucide-react";
import s from "./styles.module.scss";

// ✅ Premium: import estático (blur automático + build time)
import heroImg from "@/public/cursos/direito.webp";

export const metadata: Metadata = {
  title: "Curso de Direito",
  description:
    "Formar profissionais éticos, críticos e comprometidos com a promoção da justiça e da cidadania.",
  alternates: { canonical: "/cursos/direito" },
};

export default function DireitoPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <span className={s.kicker}>Graduação</span>

          <h1 className={s.title}>Direito</h1>

          <p className={s.lead}>
            Formar profissionais éticos, críticos e comprometidos com a promoção da justiça e da cidadania,
            preparados para atuar em diversas áreas jurídicas.
          </p>

          <p className={s.coordinator}>
            Coordenação: <strong>Professor Alef Guerra</strong>
          </p>

          <div className={s.actions}>
            <Link href="/admissions?curso=direito" className={s.ctaPrimary}>
              Inscreva-se agora <ArrowRight size={20} />
            </Link>

            <Link href="/caminho/para/matriz-direito.pdf" className={s.ctaSecondary} target="_blank">
              Matriz Curricular <FileText size={20} />
            </Link>
          </div>
        </div>

        <div className={s.heroMedia} aria-hidden="true">
          <Image
            src={heroImg}
            alt="Curso de Direito"
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
              <li>Proporcionar formação jurídica sólida, com princípios éticos e humanísticos.</li>
              <li>Desenvolver a capacidade de análise, interpretação e aplicação das normas.</li>
              <li>Estimular a pesquisa científica e a extensão como ferramentas de transformação social.</li>
              <li>Capacitar o estudante para os desafios do mercado com formação prática.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <BookText />
            </div>
            <h2 className={s.cardTitle}>Estrutura Curricular</h2>
            <p className={s.cardText}>O curso é estruturado em 10 semestres (5 anos) e contempla:</p>
            <ul className={s.list}>
              <li><strong>Formação Básica:</strong> Filosofia, Ética, Ciência Política e Sociologia.</li>
              <li><strong>Formação Profissional:</strong> Constitucional, Civil, Penal, Empresarial, etc.</li>
              <li><strong>Prática Jurídica:</strong> Estágios no Núcleo de Prática Jurídica (NPJ).</li>
              <li><strong>TCC:</strong> Aprofundamento acadêmico em temas jurídicos relevantes.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Award />
            </div>
            <h2 className={s.cardTitle}>Diferenciais da Faculdade Filos</h2>
            <ul className={s.list}>
              <li>Coordenação dedicada e corpo docente experiente.</li>
              <li>Núcleo de Prática Jurídica (NPJ) com atendimento à comunidade.</li>
              <li>Projetos de extensão e grupos de pesquisa ativos.</li>
              <li>Infraestrutura moderna com biblioteca, auditórios e laboratórios.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Scale />
            </div>
            <h2 className={s.cardTitle}>Perfil do Egresso</h2>
            <ul className={s.list}>
              <li>Sólida formação teórica e prática.</li>
              <li>Capaz de atuar de forma crítica, ética e reflexiva.</li>
              <li>Preparado para carreiras jurídicas públicas e privadas.</li>
              <li>Comprometido com a defesa da justiça e da cidadania.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
