import Image from "next/image";
import { Sparkles, Users, Building2 } from "lucide-react";
import s from "./styles.module.scss";

export default function WhyCollege() {
  return (
    <section className={s.section} id="why-college" aria-labelledby="why-title">
      {/* Coluna de mídia */}
      <div className={s.mediaCol}>
        <div className={s.mainImage}>
          <Image
            src="/porque.webp"
            alt="Ambiente acadêmico da Faculdade Filos"
            width={720}
            height={480}
            className={s.img}
            priority
            sizes="(max-width: 1024px) 90vw, 720px"
          />
        </div>
      </div>

      {/* Coluna de texto */}
      <div className={s.textCol}>
        <h2 id="why-title" className={s.title}>
          Por que escolher a Faculdade Filos?
        </h2>

        <p className={s.lead}>
          Desde 2018, a Faculdade Filos tem como propósito transformar vidas por
          meio da educação de qualidade. Ao longo de 7 anos de atuação,
          consolidamos nossa história oferecendo ensino superior que alia
          conhecimento, prática e valores humanos.
          <br /><br />
          Com uma estrutura moderna, professores altamente qualificados e
          metodologias inovadoras, buscamos preparar nossos alunos para os
          desafios do mercado de trabalho e para o exercício da cidadania.
          <br /><br />
          Acreditamos que a educação é a chave para o crescimento pessoal e
          profissional.
        </p>

        <div className={s.features}>
          <div className={s.feature}>
            <Sparkles className={s.icon} aria-hidden="true" />
            <div>
              <h3 className={s.featureTitle}>Metodologia Inovadora</h3>
              <p className={s.featureText}>
                Aprenda de forma prática, dinâmica e conectada com o mercado.
              </p>
            </div>
          </div>

          <div className={s.feature}>
            <Users className={s.icon} aria-hidden="true" />
            <div>
              <h3 className={s.featureTitle}>Equipe Multidisciplinar</h3>
              <p className={s.featureText}>
                Professores experientes de diversas áreas, prontos para te guiar.
              </p>
            </div>
          </div>

          <div className={s.feature}>
            <Building2 className={s.icon} aria-hidden="true" />
            <div>
              <h3 className={s.featureTitle}>Infraestrutura Completa</h3>
              <p className={s.featureText}>
                Bibliotecas, laboratórios e suporte acadêmico para o seu sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
