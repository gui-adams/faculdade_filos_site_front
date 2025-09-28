import React from 'react'; // Adicione esta linha
import Image from 'next/image';
import nos from '@/public/nos.png';
import sobre from './sobre.module.scss'; // Certifique-se de que o caminho está correto

export function Sobre() {
  return (
    <>
      <div className={sobre.sobreContainer}>
        <div className={sobre.texto}>
          <h2>Sobre Nós</h2>
          <p>
            <span>
              Conheça a SimpleWay e nossos resultados
            </span>
            <br />

          </p>
          <p>
            Com sede no Brasil, a SimpleWay é resultado da experiência de uma equipe com atuação no mercado de Proteção de Dados desde 1997.
            Nossa plataforma foi pensada para atender as necessidades de empresas de pequeno, médio e grande porte.
            </p>
            <br />
            <p>
            Com uma visão prática da realidade nas empresas, facilita o dia-a-dia das áreas responsáveis pela Segurança da Informação e Privacidade.
            Oferecemos simplicidade e economia para as empresas que precisam adequar-se às novas legislações de Proteção e 
            Privacidade de Dados (LGPD, GDPR e outras), mas possuem limitações orçamentárias e equipes enxutas.
          </p>
        </div>
        <div className={sobre.imagem}>
        <Image src={nos} alt="sobrenos" />
        </div>
      </div>
    </>
  );
}
