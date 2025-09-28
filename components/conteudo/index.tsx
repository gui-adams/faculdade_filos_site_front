import Image from 'next/image';
import security from '@/public/ic_security.svg';
import dados from '@/public/mask.svg';
import mao from '@/public/bxs.svg';
import styles from '@/components/conteudo/styles.module.scss'; // Renomeei o arquivo para um nome mais descritivo

export const Conteudo = () => {
  return (
    <>
      <div className={styles.servicesSection}>
        <section>
          <div className={styles.sectionContent}>
            <h2>Serviços</h2>
            <p>
              <span>
                SimpleWay é uma solução acessível para garantir a conformidade com a LGPD
                e simplificar a gestão de proteção e privacidade de dados.
              </span>
            </p>
          </div>
        </section>
      </div>
      <div className={styles.iconSection}>
        <div className={styles.iconItem}>
          <Image src={security} alt="Segurança" />
          <h3>Auxílio na conformidade<br />com a LGPD</h3>
          <p>
            <span>
              Ferramentas para a sua<br /> empresa cumprir os<br /> requisitos da lei de proteção de dados.
            </span>
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src={dados} alt="Dados" />
          <h3>Mapeamento de<br />dados pessoais</h3>
          <p>
            <span>
              Ajudamos a sua empresa a<br /> compreender como os dados são usados nas atividades do seu negócio.
            </span>
          </p>
        </div>
        <div className={styles.iconItem}>
          <Image src={mao} alt="Gestão" />
          <h3>Gerenciamento<br />das ações</h3>
          <p>
            <span>
              Gerencie as ações de<br /> conformidade à LGPD mantendo as atividades em um único local.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
