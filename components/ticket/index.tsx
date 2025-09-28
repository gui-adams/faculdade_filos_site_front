"use client"; // Isso indica que o componente será renderizado no lado do cliente
import { useState } from 'react';
import ticket from './ticket.module.scss';
import Image from 'next/image';
import tickets from '@/public/ticket.svg';

export function TicketItem() {
    // Lista completa de itens
    const items: string[] = [
        "Mapeamento das operações de tratamento",
        "Mapeamento de repositórios físicos",
        "Mapeamento de fornecedores",
        "Mapeamento de sistemas",
        "Mapeamento de infraestrutura de TI",
        "Mapeamento de contratos",
        "Dicionário de Dados Pessoais com centenas de itens",  // Último item a ser mostrado inicialmente
        "Visão de múltiplas organizações (ideal para DPO as a Service ou DPO para grupos empresariais)",
        "Estrutura organizacional com visão por organograma",
        "Estrutura organizacional com visão por processo de negócio",
        "Registro das estratégias de Continuidade de Negócio por Sistema",
        "Gestão de Continuidade | R.T.O. & R.P.O.",
        "Dashboard básico",
        "Medidas técnicas e organizacionais",
        "Template de Assessment 27.001",
        "Template de Assessment 27.701",
        "Template de Assessment CIS Controls",
        "Template de Assessment LGPD",
        "Customização de questionários para avaliações",
        "Workflow com segregação de função para assessment (respondedor / aprovador)",
        "Avaliação de risco por operação de tratamento",
        "Gestão de tratamento dos riscos",
        "Gestão do plano de ação",
        "Gestão de prazos das ações",
        "Planejamento de orçamento da Implementação da ação",
        "Gestão de Programas de Compliance",
        "Logs por usuário",
        "Tracking das ações para múltiplos Programas de Conformidade",
        "Registro do DPO interno e de Fornecedores",
        "Suporte por e-mail",
        "Suporte por telefone",  // Exemplo de item que terá exceção
        "Relatórios Avançados",
        "Dashboard com customizações básicas",
        "Relatórios customizáveis",
        "Dashboard customizáveis",
        "Security – Restrição de Acesso por IP",
        "Security – Restrição de Acesso com base no tempo",
        "Security – Alertas de segurança por comportamento suspeito do usuário",
        "AD Integration",
        "Integrações com outros sistemas (API)",
    ];

    // Definindo o limite dos itens iniciais que serão exibidos
    const initialItemsLimit = 7; // Mostra os primeiros 7 itens (até "Dicionário de Dados Pessoais com centenas de itens")

    // Estado para controlar a exibição do conteúdo oculto
    const [showMore, setShowMore] = useState(false);

    // Função para alternar o estado
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    // Função para determinar se a imagem deve aparecer ou não para o plano Essentials
    const shouldDisplayImageForEssentials = (item: string): boolean => {
        const noImageForEssentials: string[] = [
            "Suporte por telefone",  // Exemplo de item que terá exceção
            "Relatórios Avançados",
            "Dashboard com customizações básicas",
            "Relatórios customizáveis",
            "Dashboard customizáveis",
            "Security – Restrição de Acesso por IP",
            "Security – Restrição de Acesso com base no tempo",
            "Security – Alertas de segurança por comportamento suspeito do usuário",
            "AD Integration",
            "Integrações com outros sistemas (API)",
        ];

        return !noImageForEssentials.includes(item);
    };

    // Função para determinar se a imagem deve aparecer ou não para o plano Advanced
    const shouldDisplayImageForAdvanced = (item: string): boolean => {
        const noImageForAdvanced: string[] = [
            "Relatórios customizáveis",
            "Dashboard customizáveis",
            "Security – Restrição de Acesso por IP",
            "Security – Restrição de Acesso com base no tempo",
            "Security – Alertas de segurança por comportamento suspeito do usuário",
            "AD Integration",
            "Integrações com outros sistemas (API)",
        ];

        return !noImageForAdvanced.includes(item);
    };

    return (
        <div className={ticket.planos}>
            <div className={ticket.planos2}>
                <h2>Nossos Planos</h2>
                <p>
                    <span>Confira os principais recursos do SimpleWay e escolha o que mais atende as necessidades<br />
                    da sua empresa.
                    </span>
                </p>
            </div>
            <div className={ticket.style}>
                <div className={ticket.tabeladiv}>
                    <table className={ticket.table}>
                        <thead>
                            <tr>
                                <th className={ticket.th}>
                                    <h3>Compare os planos</h3>
                                    <div className={ticket.spanText}>
                                        <span>Escolha o melhor plano para as necessidades da sua empresa.</span>
                                    </div>
                                </th>
                                <th className={ticket.th}>
                                    <h2>Essentials</h2>
                                </th>
                                <th className={ticket.th}>
                                    <h2>Advanced</h2>
                                </th>
                                <th className={ticket.th}>
                                    <h2>Enterprise</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Exibir apenas os primeiros itens até o limite definido */}
                            {items.slice(0, initialItemsLimit).map((item) => (
                                <tr key={item} className={ticket.tr}>
                                    <td className={ticket.td}><span>{item}</span></td>
                                    
                                    {/* Exibição condicional para o plano Essentials */}
                                    <td className={ticket.td}>
                                        {shouldDisplayImageForEssentials(item) && (
                                            <Image src={tickets} alt="ticket" width={200} height={160} />
                                        )}
                                    </td>

                                    {/* Exibição condicional para o plano Advanced */}
                                    <td className={ticket.td}>
                                        {shouldDisplayImageForAdvanced(item) && (
                                            <Image src={tickets} alt="ticket" width={200} height={160} />
                                        )}
                                    </td>

                                    {/* Sempre exibir imagem para Enterprise */}
                                    <td className={ticket.td}>
                                        <Image src={tickets} alt="ticket" width={200} height={160} />
                                    </td>
                                </tr>
                            ))}

                            {/* Mostrar os itens ocultos após o botão "Saiba mais" ser clicado */}
                            {showMore && (
                                items.slice(initialItemsLimit).map((item) => (
                                    <tr key={item} className={ticket.tr}>
                                        <td className={ticket.td}><span>{item}</span></td>

                                        {/* Exibição condicional para o plano Essentials */}
                                        <td className={ticket.td}>
                                            {shouldDisplayImageForEssentials(item) && (
                                                <Image src={tickets} alt="ticket" width={200} height={160} />
                                            )}
                                        </td>

                                        {/* Exibição condicional para o plano Advanced */}
                                        <td className={ticket.td}>
                                            {shouldDisplayImageForAdvanced(item) && (
                                                <Image src={tickets} alt="ticket" width={200} height={160} />
                                            )}
                                        </td>

                                        {/* Sempre exibir imagem para Enterprise */}
                                        <td className={ticket.td}>
                                            <Image src={tickets} alt="ticket" width={200} height={160} />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Botão "Saiba mais" */}
                    {!showMore && (
                        <div className={ticket.saibaMaisContainer}>
                            <button onClick={toggleShowMore} className={ticket.saibaMaisButton}>
                                Veja mais sobre os planos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
