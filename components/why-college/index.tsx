import Image from "next/image";
import { PlayCircle, Sparkles, Users, Building2 } from "lucide-react";
import s from "./styles.module.scss";

export default function WhyCollege() {
  return (
    <section className={s.section} id="why-college" aria-labelledby="why-title">
      {/* Coluna de mídia (imagens) */}
      <div className={s.mediaCol}>
        <div className={s.sideImage}>
          <Image
            src="/why/side.jpg"
            alt="Estudante em aula online"
            width={280}
            height={360}
            className={s.img}
            sizes="(max-width: 1024px) 40vw, 280px"
          />
        </div>

        <div className={s.mainImage}>
          <Image
            src="/why/main.jpg"
            alt="Ambiente de estudo da Faculdade Filos"
            width={720}
            height={480}
            className={s.img}
            priority
            sizes="(max-width: 1024px) 90vw, 720px"
          />

          {/* Botão de play (link simples – sem JS) */}
          <a
            href="/video-institucional"
            className={s.playButton}
            aria-label="Assistir vídeo institucional"
          >
            <PlayCircle aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className={s.textCol}>
        <h2 id="why-title" className={s.title}>
          Por que escolher a Faculdade Filos?
        </h2>

        <p className={s.lead}>
          Desde 2018, a Faculdade Filos tem como propósito transformar vidas por meio da educação de qualidade. Ao longo de 7 anos de atuação, consolidamos nossa história oferecendo ensino superior que alia conhecimento, prática e valores humanos.<br/><br/>
          Com uma estrutura moderna, professores altamente qualificados e metodologias inovadoras, buscamos preparar nossos alunos para os desafios do mercado de trabalho e para o exercício da cidadania, formando profissionais capazes de fazer a diferença em suas áreas de atuação.<br/><br/>
          Na Filos, acreditamos que a educação é a chave para o crescimento pessoal e profissional, e é por isso que investimos diariamente em excelência acadêmica, inovação e acolhimento.
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
