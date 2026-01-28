import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookText, HeartPulse, Target, Award, FileText } from "lucide-react";
import s from "./styles.module.scss";

// ✅ Premium: import estático (blur automático + build time)
import heroImg from "@/public/cursos/radiologia.webp";

export const metadata: Metadata = {
  title: "Curso de Tecnólogo em Radiologia",
  description:
    "Formar profissionais capacitados para atuar de maneira ética e segura na realização de exames e procedimentos radiológicos.",
  alternates: { canonical: "/cursos/radiologia" },
};

export default function RadiologiaPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <span className={s.kicker}>Graduação</span>

          <h1 className={s.title}>Tecnólogo em Radiologia</h1>

          <p className={s.lead}>
            Formar profissionais capacitados para atuar de maneira ética e segura na realização de exames e procedimentos
            radiológicos, contribuindo para a promoção da saúde.
          </p>

          <p className={s.coordinator}>
            Coordenação: <strong>Professora Amariles Procopio</strong>
          </p>

          <div className={s.actions}>
            <Link href="/admissions?curso=radiologia" className={s.ctaPrimary}>
              Inscreva-se agora <ArrowRight size={20} />
            </Link>

            <Link href="/caminho/para/matriz-radiologia.pdf" className={s.ctaSecondary} target="_blank">
              Matriz Curricular <FileText size={20} />
            </Link>
          </div>
        </div>

        <div className={s.heroMedia} aria-hidden="true">
          <Image
            src={heroImg}
            alt="Curso de Tecnólogo em Radiologia"
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
              <li>Oferecer uma formação técnica e científica sólida na área da radiologia.</li>
              <li>Preparar profissionais para operar equipamentos de diagnóstico por imagem.</li>
              <li>Desenvolver competências voltadas para a segurança radiológica do paciente.</li>
              <li>Estimular a pesquisa, a extensão e a atualização constante no campo da saúde.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <BookText />
            </div>
            <h2 className={s.cardTitle}>Estrutura Curricular</h2>
            <p className={s.cardText}>O curso é estruturado em 6 semestres (3 anos) e contempla:</p>
            <ul className={s.list}>
              <li><strong>Fundamentos da Saúde:</strong> Anatomia, Fisiologia, Biofísica e Biossegurança.</li>
              <li><strong>Formação Profissional:</strong> Radiologia, Tomografia, Ressonância, Radioterapia.</li>
              <li><strong>Gestão e Legislação:</strong> Ética Profissional e Gestão em Serviços de Saúde.</li>
              <li><strong>Prática Profissional:</strong> Laboratórios e estágios supervisionados.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <Award />
            </div>
            <h2 className={s.cardTitle}>Diferenciais da Faculdade Filos</h2>
            <ul className={s.list}>
              <li>Coordenação dedicada e corpo docente com vasta experiência na saúde.</li>
              <li>Laboratórios modernos e equipados para práticas em radiologia.</li>
              <li>Convênios com hospitais e clínicas para estágios supervisionados.</li>
              <li>Incentivo à participação em projetos de pesquisa e extensão.</li>
            </ul>
          </div>

          <div className={s.detailCard}>
            <div className={s.iconWrapper}>
              <HeartPulse />
            </div>
            <h2 className={s.cardTitle}>Perfil do Egresso</h2>
            <ul className={s.list}>
              <li>Capacitado a atuar em serviços de diagnóstico por imagem e terapia.</li>
              <li>Preparado para operar diferentes modalidades de equipamentos.</li>
              <li>Comprometido com a segurança do paciente e a ética profissional.</li>
              <li>Habilitado a acompanhar a evolução tecnológica da área.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
