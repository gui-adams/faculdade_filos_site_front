"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./header.module.scss";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import EnrollModal from "../EnrollModal";

export default function Header() {
  // Estado para controlar a abertura do modal de inscrição geral
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const handleOpenEnroll = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita a navegação do link
    setIsEnrollOpen(true);
  };

  return (
    <>
      <div className={s.topBar} aria-hidden="true" />

      <header className={s.header}>
        <div className={s.inner}>
          <Link href="/" className={s.brand} aria-label="Página inicial - Faculdade Filos">
            {/* Corrigido para /logo.svg conforme estrutura do projeto */}
            <Image src="/logo.svg" alt="Faculdade Filos" width={150} height={34} priority />
          </Link>

          <input id="nav-toggle" type="checkbox" className={s.toggle} aria-hidden="true" />
          <label htmlFor="nav-toggle" className={s.burger} aria-label="Abrir menu" aria-controls="mobile-drawer">
            <Menu className={s.iconMenu} aria-hidden="true" />
            <X className={s.iconClose} aria-hidden="true" />
          </label>

          <nav className={s.navDesktop} aria-label="Menu principal">
            <ul>
              <li><Link href="/">Home</Link></li>

              <li className={s.hasDropdown}>
                <Link href="/cursos" className={s.trigger} aria-haspopup="menu">
                  Cursos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none"><Link role="menuitem" href="/cursos/graduacao">Graduação</Link></li>
                  <li role="none"><Link role="menuitem" href="/cursos/pos-graduacao">Pós-graduação</Link></li>
                  <li role="none"><Link role="menuitem" href="/cursos/extensao">Extensão</Link></li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/about" className={s.trigger} aria-haspopup="menu">
                  A Filos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none"><Link role="menuitem" href="/about">Sobre</Link></li>
                  <li role="none"><Link role="menuitem" href="/about/infraestrutura">Infraestrutura</Link></li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/institucional" className={s.trigger} aria-haspopup="menu">
                  Institucional <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none"><Link role="menuitem" href="/institucional/revista">Revista</Link></li>
                  <li role="none"><Link role="menuitem" href="/institucional/editais">Editais</Link></li>
                  <li role="none"><Link role="menuitem" href="/institucional/regulamentos">Regulamentos</Link></li>
                  <li role="none"><Link role="menuitem" href="/institucional/cpa">CPA</Link></li>
                  <li role="none"><Link role="menuitem" href="/institucional/ouvidoria">Ouvidoria</Link></li>
                  <li role="none"><Link role="menuitem" href="/institucional/biblioteca">Biblioteca</Link></li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/grupo" className={s.trigger} aria-haspopup="menu">
                  Instituições do Grupo <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none"><Link role="menuitem" href="/grupo/colegio-x">Colégio Filos</Link></li>
                  <li role="none"><Link role="menuitem" href="/grupo/fundacao-y">Fundação </Link></li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className={s.actions}>
            <Link href="https://faculdadefilos.jacad.com.br/academico/professor/login" className={s.btnOutline}>Portal</Link>
            {/* Link alterado para disparar o Modal */}
            <button onClick={handleOpenEnroll} className={s.btnPrimary} style={{ border: 'none', cursor: 'pointer' }}>
              Inscreva-se
            </button>
          </div>

          <nav className={s.mobileNav} aria-label="Menu móvel">
            <label htmlFor="nav-toggle" className={s.backdrop} aria-hidden="true" />
            <aside id="mobile-drawer" className={s.drawer} role="dialog" aria-modal="true" aria-label="Menu">
              <div className={s.drawerHeader}>
                <Link href="/" className={s.brandMini} aria-label="Página inicial - Faculdade Filos">
                  {/* Corrigido para /logo.svg */}
                  <Image src="/logo.svg" alt="Faculdade Filos" width={120} height={28} />
                </Link>
                <label htmlFor="nav-toggle" className={s.close} aria-label="Fechar menu"></label>
              </div>

              <ul className={s.menuList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cursos">Cursos</Link></li>
                <li><Link href="/about">O Filos</Link></li>
                <li><Link href="/institucional">Institucional</Link></li>
                <li><Link href="/grupo">Instituições do Grupo</Link></li>
              </ul>

              <div className={s.mobileActions}>
                <Link href="https://faculdadefilos.jacad.com.br/academico/aluno/login" className={s.btnOutline}>Portal do Aluno</Link>
                <button onClick={handleOpenEnroll} className={s.btnPrimary} style={{ border: 'none', cursor: 'pointer', width: '100%' }}>
                  Inscreva-se
                </button>
              </div>

              <div className={s.social}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X"><Twitter /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube /></a>
              </div>
            </aside>
          </nav>
        </div>
      </header>

      {/* Modal de Inscrição Geral */}
      <EnrollModal 
        isOpen={isEnrollOpen} 
        onClose={() => setIsEnrollOpen(false)} 
        courseTitle="" 
      />
    </>
  );
}