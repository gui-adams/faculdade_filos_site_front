"use client"; // Adicione esta linha para marcar o componente como um Componente de Cliente

import Image from 'next/image';
import politica_new from '@/public/politica_new.svg';
import styles from './newsletter.module.scss'; // Ajuste o caminho se necessário
import { useState, FormEvent } from 'react';

export function Newsletter() {
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState(''); // Estado para o nome
    const [email, setEmail] = useState(''); // Estado para o email
    const [message, setMessage] = useState(''); // Estado para a resposta da API
    const [submitted, setSubmitted] = useState(false); // Estado para controlar se o formulário foi enviado

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validação simples
        if (!name || !email || !isChecked) {
            setMessage('Preencha todos os campos e aceite a política de privacidade.');
            return;
        }

        try {
            // Faz a requisição para a API RD
            const response = await fetch('/api/rd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message); // Exibe a mensagem de sucesso
                setSubmitted(true); // Define o estado como enviado para esconder o formulário
            } else {
                setMessage('Erro ao se inscrever. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            setMessage('Erro ao se inscrever. Tente novamente.');
        }
    };

    return (
        <div className={styles.newsletter}>
            {!submitted ? (
                <>
                    <div className={styles.carta}>
                        <Image src={politica_new} alt="politica_new" width={180} height={250} />
                    </div>
                    <form className={styles.formnew} onSubmit={handleSubmit}>
                        <div className={styles.rd}>
                            <h3>Se inscreva na nossa newsletter.</h3>
                            <p>
                                <span>
                                    Venha se atualizar sobre Privacidade e Proteção de Dados.
                                </span>
                            </p>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Digite seu nome aqui" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Digite seu e-mail aqui" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                            />
                        </div>
                        <div className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="privacyPolicy">
                                Eu concordo e aceito a <strong><u>Política de Privacidade</u></strong>
                            </label>
                        </div>
                        <button type="submit" disabled={!isChecked}>
                            Se inscrever
                        </button>
                    </form>
                    {message && <p>{message}</p>} {/* Exibe mensagem de feedback */}
                </>
            ) : (
                <div className={styles.thankYouMessage}>
                    <h2>Obrigado!</h2>
                    <p>Você se inscreveu com sucesso na nossa newsletter.</p>
                </div>
            )}
        </div>
    );
}
