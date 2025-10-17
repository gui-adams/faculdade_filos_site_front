import Link from "next/link";
import Image from "next/image";
import s from "./style.module.scss";
import capa1 from "@/public/capa1.png";

export function Introduction() {
  return (
    <section className={s.hero} id="Introduction" aria-labelledby="hero-title">
      <div className={s.inner}>
        <div className={s.copy}>
          <h1 id="hero-title">Faculdade Filos</h1>

          <h2 className={s.lead}>Ensino de qualidade para o seu futuro!</h2>

          <div className={s.actions}>
            <Link href="/admissions" className={s.ctaPrimary}>
              Vem ser Filos
            </Link>
          </div>
        </div>

        <div className={s.media}>
          <Image
            src={capa1}
            alt="Campus da Faculdade Filos"
            width={560}
            height={420}
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className={s.capa1} // defina .capa1 no seu SCSS se quiser estilizar a imagem
          />
        </div>
      </div>
    </section>
  );
}
