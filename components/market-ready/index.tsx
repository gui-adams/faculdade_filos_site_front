import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, BadgeCheck, Globe2, ArrowRight } from "lucide-react";
import s from "./styles.module.scss";

export default function MarketReady() {
  return (
    <section className={s.section} id="market-ready" aria-labelledby="market-ready-title">
      {/* Coluna de mídia */}
      <div className={s.mediaCol}>
        <div className={s.portrait}>
          <Image
            src="/market/graduate.jpg"
            alt="Formanda com diploma"
            width={360}
            height={480}
            className={s.img}
            sizes="(max-width: 1024px) 60vw, 360px"
            priority
          />
        </div>

        <div className={s.landscapeWrap}>
          <div className={s.landscape}>
            <Image
              src="/market/online-class.jpg"
              alt="Aula online"
              width={720}
              height={420}
              className={s.img}
              sizes="(max-width: 1024px) 90vw, 720px"
            />
          </div>
        </div>
      </div>

      {/* Coluna de conteúdo */}
      <div className={s.contentCol}>
        <h2 id="market-ready-title" className={s.title}>
          Você já sai com todo o preparo <br /> para o mercado
        </h2>

        <p className={s.lead}>
          Aqui você tem programas de estágio e orientações para conquistar sua vaga.
        </p>

        <div className={s.stats}>
          <div className={s.card}>
            <Users className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>+10mil</p>
              <p className={s.desc}>Estudantes matriculados em todo o Brasil.</p>
            </div>
          </div>

          <div className={s.card}>
            <Briefcase className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>90%</p>
              <p className={s.desc}>De estudantes empregados.</p>
            </div>
          </div>

          <div className={s.card}>
            <BadgeCheck className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>+5</p>
              <p className={s.desc}>Cursos avaliados com nota máxima no MEC.</p>
            </div>
          </div>

          <div className={s.card}>
            <Globe2 className={s.icon} aria-hidden="true" />
            <div>
              <p className={s.kpi}>+5mil</p>
              <p className={s.desc}>
                Cursos com formação compatível com demandas do mercado.
              </p>
            </div>
          </div>
        </div>

        <div className={s.ctaRow}>
          <Link href="/admissions" className={s.btnLight}>
            Inscreva-se <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
