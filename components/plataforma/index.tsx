"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import plataforma2 from '@/public/plataforma2.svg';
import styles from '@/components/plataforma/style.module.scss';

export const Plataforma = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Função para abrir o pop-up
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevenir comportamento padrão
    setShowPopup(true);
  };

  // Função para fechar o pop-up
  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault(); // Prevenir comportamento padrão
    setShowPopup(false);
  };

  // Insere o script do RD Station quando o pop-up é aberto
  

  return (
    <>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>
            Plataforma de{' '}
            <span className={styles.textoDestacado}>Governança de<br />Privacidade</span> &{' '}
            <span className={styles.textoDestacado}>Proteção de Dados</span>
          </h1>
          <p>
            <span>
              Automatize e otimize seu Programa de Governança<br />
              e Privacidade com a plataforma de{' '}
              <span className={styles.subtextoDestacado}>melhor relação<br />custo x benefício do mercado brasileiro.</span>
            </span>
          </p>
          <br />
          <button onClick={handleButtonClick} className={styles.ctaButton}>Garanta seu Teste Gratuito</button>
        </section>
        <div className={styles.imageContainer}>
          <Image src={plataforma2} alt="Plataforma de Governança e Proteção de Dados" className={styles.image} />
        </div>
      </div>

      {/* Renderiza o pop-up se showPopup for true */}
      {showPopup && (
        <div className={styles.modalOverlay} onClick={handleClosePopup}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botão de fechar (X) */}
            <button onClick={handleClosePopup} className={styles.closeButton}>×</button>
            {/* Formulário do RD Station */}
            <div role="main" id="form-sw-superior-376ea9fca7ce1c245ff3"></div>
          </div>
        </div>
      )}
    </>
  );
};
