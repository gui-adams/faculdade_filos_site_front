// CAMINHO DO ARQUIVO: app/loading.tsx
import s from "./loading.module.scss"; // Note que mudamos o import para o arquivo local

export default function Loading() {
  // Criamos 4 itens falsos para simular o carregamento
  const skeletons = Array.from({ length: 4 });

  return (
    <section className={s.section}>
      <div className={s.head}>
        <div className={s.titleBox}>
          {/* Título pulsando */}
          <div className={`${s.skeleton} ${s.skKicker}`} />
          <div className={`${s.skeleton} ${s.skTitle}`} />
          <div className={`${s.skeleton} ${s.skSubtitle}`} />
        </div>
        
        <div className={s.tabs}>
          <div className={`${s.skeleton} ${s.skTab}`} />
          <div className={`${s.skeleton} ${s.skTab}`} />
        </div>
      </div>

      <ul className={s.grid}>
        {skeletons.map((_, i) => (
          <li key={i} className={s.card}>
            {/* Imagem */}
            <div className={`${s.media} ${s.skeleton}`} />

            {/* Badges */}
            <div className={s.badges}>
              <div className={`${s.skeleton} ${s.skBadge}`} />
              <div className={`${s.skeleton} ${s.skBadge}`} />
            </div>

            {/* Título do Card */}
            <div className={`${s.skeleton} ${s.skCardTitle}`} />

            {/* Botões */}
            <div className={s.actions}>
              <div className={`${s.skeleton} ${s.skBtn}`} />
              <div className={`${s.skeleton} ${s.skLink}`} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}