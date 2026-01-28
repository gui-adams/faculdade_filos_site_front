import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookHeart, Target, Award, School, FileText } from "lucide-react";
import s from "./styles.module.scss";

// ✅ Premium: import estático (blur automático + build time)
import heroImg from "@/public/cursos/pedagogia.webp";

export const metadata: Metadata = {
  title: "Curso de Pedagogia",
  description:
    "Formar educadores comprometidos com a transformação social, a valorização da educação e a promoção da cidadania.",
  alternates: { canonical: "/cursos/pedagogia" },
};

export default function PedagogiaPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <span className={s.kicker}>Graduação</span>

          <h1 className={s.title}>Pedagogia</h1>

          <p className={s.lead}>
            Formar educadores comprometidos com a transformação social, a valorização da educação e a promoção da
            cidadania.
          </p>

          <p className={s.coordinator}>
            Coordenação: <strong>Professora Janes Carlas</strong>
          </p>

          <div className={s.actions}>
            <Link href="/admissions?curso=pedagogia" className={s.ctaPrimary}>
              Inscreva-se agora <ArrowRight size={20} />
            </Link>

            <Link href="/caminho/para/matriz-pedagogia.pdf" className={s.ctaSecondary} target="_blank">
              Matriz Curricular <FileText size={20} />
            </Link>
          </div>
        </div>

        <div className={s.heroMedia} aria-hidden="true">
          <Image
            src={heroImg}
            alt="Curso de Pedagogia"
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
              <li>Oferecer sólida formação teórica e prática em educação.</li>
              <li>Desenvolver competências para a docência, gestão e coordenação pedagógica.</li>
              <li>Estimular a pesquisa e a extensão como práticas de inovação.</li>
              <li>Formar profissionais comprometidos com a diversidade, a ética e a inclusão.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <BookHeart />
            </div>
            <h2 className={s.cardTitle}>Estrutura Curricular</h2>
            <p className={s.cardText}>O curso possui duração de 8 semestres (4 anos) e contempla:</p>
            <ul className={s.list}>
              <li><strong>Fundamentos da Educação:</strong> História, Filosofia, Psicologia e Sociologia.</li>
              <li><strong>Práticas de Ensino:</strong> Didática e metodologias de diversas áreas.</li>
              <li><strong>Gestão Escolar:</strong> Coordenação Pedagógica e Políticas Públicas.</li>
              <li><strong>Pesquisa e Estágio:</strong> Iniciação científica, projetos e vivências em sala de aula.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Award />
            </div>
            <h2 className={s.cardTitle}>Diferenciais da Faculdade Filos</h2>
            <ul className={s.list}>
              <li>Coordenação dedicada e corpo docente experiente.</li>
              <li>Projetos de extensão que integram teoria e prática.</li>
              <li>Biblioteca atualizada e ambientes pedagógicos adequados.</li>
              <li>Incentivo ao uso de metodologias ativas e inovadoras.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <School />
            </div>
            <h2 className={s.cardTitle}>Perfil do Egresso</h2>
            <ul className={s.list}>
              <li>Capaz de atuar com excelência na educação infantil e anos iniciais.</li>
              <li>Preparado para funções de gestão, coordenação e supervisão.</li>
              <li>Comprometido com a inclusão, a diversidade e a justiça social.</li>
              <li>Habilitado a desenvolver pesquisas para a melhoria da educação.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
