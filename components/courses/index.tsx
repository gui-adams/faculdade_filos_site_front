"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import s from "./styles.module.scss";
import { courses } from "./data";
import EnrollModal from "../EnrollModal";

export default function Course() {
  // Declaração do estado para controlar qual curso foi clicado
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <section className={s.section} id="cursos" aria-labelledby="cursos-title">
      <input id="tab-graduacao" type="radio" name="tab-cursos" className={s.tabInput} defaultChecked />
      
      <div className={s.head}>
        <div className={s.titleBox}>
          <p className={s.kicker}>
            <GraduationCap aria-hidden="true" /> Cursos
          </p>
          <h2 id="cursos-title" className={s.title}>
            O que você deseja estudar?
          </h2>
          <p className={s.subtitle}>
            A escolha da sua carreira é o primeiro passo para o seu futuro!
          </p>
        </div>
        <div className={s.tabs} role="tablist" aria-label="Categorias de cursos">
          <label htmlFor="tab-graduacao" role="tab" aria-controls="cursos-grid">
            Graduação
          </label>
        </div>
      </div>

      {/* Grid de cursos */}
      <ul id="cursos-grid" className={s.grid}>
        {courses.map((c) => (
          <li key={c.id} className={s.card} data-level={c.level}>
            <div className={s.media}>
              <Image
                src={c.image}
                alt={c.title}
                width={520}
                height={320}
                className={s.image}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
              />
            </div>
            <div className={s.badges}>
              <span className={s.badgeMuted}>{c.type}</span>
              <span className={s.badgeMuted}>{c.modality}</span>
            </div>
            <h3 className={s.cardTitle}>{c.title}</h3>
            <div className={s.actions}>
              {/* Botão que dispara a abertura do modal definindo o título do curso */}
              <button 
                className={s.btnPrimary} 
                onClick={() => setSelectedCourse(c.title)}
                type="button"
              >
                Inscreva-se <ArrowRight aria-hidden="true" />
              </button>
              <Link className={s.linkMore} href={c.learnHref}>
                Saiba mais
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Renderiza o modal e gerencia sua visibilidade através do estado */}
      <EnrollModal 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        courseTitle={selectedCourse || ""} 
      />
    </section>
  );
}