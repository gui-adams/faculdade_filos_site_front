import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, BadgeCheck, Globe2, ArrowRight } from "lucide-react";
import s from "./styles.module.scss";

export default function MarketReady() {
  return (
    <section
      className={s.section}
      id="market-ready"
      aria-labelledby="market-ready-title"
    >
      {/* Coluna de mídia */}
      <div className={s.mediaCol}>
        <Image
          src="/mercado.webp"
          alt="Formação acadêmica preparada para o mercado de trabalho"
          width={720}
          height={520}
          className={s.image}
          priority
          sizes="(max-width: 1100px) 92vw, 720px"
        />
      </div>

      {/* Coluna de conteúdo */}
      <div className={s.contentCol}>
        <h2 id="market-ready-title" className={s.title}>
          Você já sai com todo o preparo <br /> para o mercado
        </h2>

        <p className={s.lead}>
          Aqui você encontra orientação profissional, programas de estágio
          e uma formação alinhada às reais demandas do mercado de trabalho.
        </p>

        <div className={s.stats}>
          <div className={s.card}>
            <Users className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>Diversos</p>
              <p className={s.desc}>
                Estudantes matriculados em todo o Brasil.
              </p>
            </div>
          </div>

          <div className={s.card}>
            <Briefcase className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>90%</p>
              <p className={s.desc}>
                Dos estudantes inseridos no mercado.
              </p>
            </div>
          </div>

          <div className={s.card}>
            <BadgeCheck className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>+5</p>
              <p className={s.desc}>
                Cursos com avaliação máxima no MEC.
              </p>
            </div>
          </div>

          <div className={s.card}>
            <Globe2 className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>Cursos atuais</p>
              <p className={s.desc}>
                Formação alinhada às exigências do mercado.
              </p>
            </div>
          </div>
        </div>

        <div className={s.ctaRow}>
          <Link href="/admissions" className={s.btnLight}>
            Inscreva-se agora <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
