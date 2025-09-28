import Image from 'next/image';
import styles from '@/components/lgpd/styles.module.scss'; // Certifique-se de que esse caminho esteja correto
import gerenciamento from '@/public/gerenciamento.svg'; // Ajuste o caminho das imagens
import visao from '@/public/visao.svg';
import mapeamento from '@/public/mapeamento.svg';
import iso from '@/public/iso.svg';
import data from '@/public/data.svg';
import relatorios from '@/public/relatorios.svg';
import programa from '@/public/programa.svg';
import titulares from '@/public/titulares.svg';

export function Lgpd() {
  return (
    <>
      <div className={styles.lgpd}>
        <div className={styles.lgpd2}>
          <h2>LGPD</h2>
          <p>
            <span>
              SimpleWay simplifica a jornada de conformidade com a Lei Geral de Proteção de Dados,
              <br /> empregando tecnologia para aprimorar ações, como:
            </span>
          </p>
        </div>
      </div>

      <section className={styles.icones2}>
        <div className={styles.iconesContainer}>
          <div className={styles.icone}>
            <Image src={gerenciamento} alt="Gerenciamento" />
            <p>
              <span>
                Gerenciamento do<br />Programa de Proteção<br />e Privacidade de Dados
              </span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={visao} alt="Visão" />
            <p>
              <span>
                Visão da estrutura<br /> organizacional por organograma<br /> e processo de negócios
              </span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={mapeamento} alt="Mapeamento" />
            <p>
              <span>
                Mapeamento de operações<br /> de tratamento, fornecedores,<br /> repositórios e mais
              </span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={iso} alt="ISO 27001" />
            <p>
              <span>
                Avaliação de privacidade<br />(ISO 27001) e questionários<br /> específicos
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.icones3}>
        <div className={styles.iconesContainer}>
          <div className={styles.icone}>
            <Image src={data} alt="Gestão de Dados" />
            <p>
              <span>
                Gestão do dicionário de dados<br />com mais de 600 itens inclusos
              </span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={relatorios} alt="Relatórios" />
            <p>
              <span>Relatórios</span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={programa} alt="Programas de Compliance" />
            <p>
              <span>Programas de Compliance</span>
            </p>
          </div>
          <div className={styles.icone}>
            <Image src={titulares} alt="Titulares" />
            <p>
              <span>Titulares</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
