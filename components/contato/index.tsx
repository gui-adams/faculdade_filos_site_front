"use client";

import { useEffect } from 'react';
import styles from './contato.module.scss';

export function Contato() {
   

    return (
        <div className={styles.contatodiv}>
            <h2>Simplifique a sua Proteção de Dados</h2>
            <p>
                <span>
                    Acompanhe uma demonstração prática da plataforma e teste a solução com a sua equipe gratuitamente.<br />
                </span>
                <span className={styles.centralizado}>
                    Conte com o suporte dos especialistas SimpleWay.
                </span>
                <span className={styles.centralizado}>
                    Tem interesse em parcerias? Contacte-nos!
                </span>
            </p>

            {/* Container onde o novo formulário do RD Station será inserido */}
            <div id="form-sw-inferior-b09f359bf3c7a9bce55f" className={styles.form}></div>
        </div>
    );
}
