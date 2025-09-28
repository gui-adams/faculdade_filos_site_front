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
          Na Faculdade Filos, a melhor de Águas Lindas, sua carreira de sucesso começa agora, com a excelência que você merece, aqui mesmo.          </p>

          <div className={s.actions}>
            <Link href="/admissions" className={s.ctaPrimary}>
              Inscreva-se
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
