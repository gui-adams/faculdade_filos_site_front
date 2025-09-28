import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import s from "./styles.module.scss";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className={s.section} id="testimonials" aria-labelledby="testimonials-title">
      {/* Painel de introdução (esquerda) */}
      <div className={s.introPanel}>
        <h2 id="testimonials-title" className={s.title}>
          Quem escolheu a <br />
          Faculdade Filos, amou <br />
          sua experiência <br />
          universitária.
        </h2>

        <span className={s.titleBar} aria-hidden="true" />

        <p className={s.lead}>
          Aqui na Faculdade Filos a jornada acadêmica é completa e repleta de experiências.
          Nossos alunos são motivo de orgulho e satisfação, pois eles são espelhos
          da excelência de nossos cursos.
        </p>
      </div>

      {/* Lista de depoimentos (direita) */}
      <div className={s.cards}>
        {testimonials.map((t) => (
          <article key={t.id} className={s.card}>
            {/* faixa de gradiente superior */}
            <div className={s.gradient} aria-hidden="true" />

            {/* foto do aluno */}
            <div className={s.photoWrap}>
              <Image
                src={t.photo}
                alt={`Foto de ${t.name}`}
                width={560}
                height={280}
                className={s.photo}
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>

            {/* ícone de aspas */}
            <div className={s.quoteIcon} aria-hidden="true">
              <Quote />
            </div>

            {/* conteúdo */}
            <div className={s.content}>
              <p className={s.excerpt}>{t.excerpt}</p>

              <Link className={s.readMore} href={t.href}>
                continuar lendo +
              </Link>

              <div className={s.person}>
                <p className={s.name}>{t.name}</p>
                <p className={s.meta}>
                  Egresso em <strong>{t.program}</strong>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
