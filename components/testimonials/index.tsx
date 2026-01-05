import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import s from "./styles.module.scss";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className={s.section} id="testimonials" aria-labelledby="testimonials-title">
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

      <div className={s.cards}>
        {testimonials.map((t, idx) => (
          <article key={t.id} className={s.card}>
            <div className={s.gradient} aria-hidden="true" />

            {/* foto do aluno (crop padronizado, sem CLS) */}
            <div className={s.photoWrap}>
              <div className={s.photoBox}>
                <Image
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  fill
                  className={s.photo}
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 360px"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>

            <div className={s.quoteIcon} aria-hidden="true">
              <Quote />
            </div>

            <div className={s.content}>
              <p className={s.excerpt}>{t.excerpt}</p>


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
