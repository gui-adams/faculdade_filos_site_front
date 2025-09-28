import Link from "next/link";
import Image from "next/image";
import s from "./style.module.scss";

export function Introduction() {
  return (
    <section className={s.hero} id="Introduction" aria-labelledby="hero-title">
      <div className={s.inner}>
        <div className={s.copy}>
          {/* H1 único da página */}
          <h1 id="hero-title">
            Faculdade Filos: Ensino superior de excelência
          </h1>

          <p className={s.lead}>
            Graduação e pós-graduação com professores qualificados, infraestrutura moderna
            e apoio completo ao estudante. Inscrições abertas para o próximo semestre.
          </p>

          <div className={s.actions}>
            <Link href="/admissions" className={s.ctaPrimary}>
              Inscreva-se
            </Link>
            <Link href="/about" className={s.ctaSecondary}>
              Conheça a instituição
            </Link>
          </div>
        </div>

        <div className={s.media}>
          {/* Coloque a imagem em /public/hero-campus.svg (ou troque o nome abaixo) */}
          <Image
            src="/hero-campus.svg"
            alt="Campus da Faculdade Filos"
            width={560}
            height={420}
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className={s.image}
          />
        </div>
      </div>
    </section>
  );
}
