// components/Header/index.tsx
import Link from "next/link";
import Image from "next/image";
import s from "./header.module.scss";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <>
      <div className={s.topBar} aria-hidden="true" />

      <header className={s.header}>
        <div className={s.inner}>
          {/* Logo (desktop) */}
          <Link href="/" className={s.brand} aria-label="Página inicial - Faculdade Filos">
            <Image src={logo} alt="Faculdade Filos" priority className={s.logo} />
          </Link>

          {/* Toggle drawer (CSS only) */}
          <input id="nav-toggle" type="checkbox" className={s.toggle} aria-hidden="true" />
          <label
            htmlFor="nav-toggle"
            className={s.burger}
            aria-label="Abrir menu"
            aria-controls="mobile-drawer"
          >
            <Menu className={s.iconMenu} aria-hidden="true" />
            <X className={s.iconClose} aria-hidden="true" />
          </label>

          {/* Desktop nav */}
          <nav className={s.navDesktop} aria-label="Menu principal">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/cursos" className={s.trigger} aria-haspopup="menu">
                  Cursos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/cursos/graduacao">Graduação</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/cursos/pos-graduacao">Pós-graduação</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/cursos/extensao">Extensão</Link>
                  </li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/about" className={s.trigger} aria-haspopup="menu">
                  A Filos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/about">Sobre</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/about/infraestrutura">Infraestrutura</Link>
                  </li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/institucional" className={s.trigger} aria-haspopup="menu">
                  Institucional <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/institucional/revista">Revista</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/editais">Editais</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/regulamentos">Regulamentos</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/cpa">CPA</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/ouvidoria">Ouvidoria</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/biblioteca">Biblioteca</Link>
                  </li>
                </ul>
              </li>

              <li className={s.hasDropdown}>
                <Link href="/grupo" className={s.trigger} aria-haspopup="menu">
                  Instituições do Grupo <span className={s.caret} aria-hidden="true">▾</span>
                </Link>
                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/grupo/colegio-x">Colégio Filos</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/grupo/fundacao-y">Fundação</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className={s.actions}>
            <Link
              href="https://faculdadefilos.jacad.com.br/academico/professor/login"
              className={s.btnOutline}
            >
              Portal
            </Link>
            <Link href="/admissions" className={s.btnPrimary}>
              Inscreva-se
            </Link>
          </div>

          {/* Mobile drawer */}
          <nav className={s.mobileNav} aria-label="Menu móvel">
            <label htmlFor="nav-toggle" className={s.backdrop} aria-hidden="true" />

            <aside
              id="mobile-drawer"
              className={s.drawer}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className={s.drawerHeader}>
                <Link href="/" className={s.brandMini} aria-label="Página inicial - Faculdade Filos">
                  <Image src={logo} alt="Faculdade Filos" className={s.logoMini} />
                </Link>

                <label htmlFor="nav-toggle" className={s.close} aria-label="Fechar menu" />
              </div>

              <ul className={s.menuList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/cursos">Cursos</Link>
                </li>
                <li>
                  <Link href="/about">A Filos</Link>
                </li>
                <li>
                  <Link href="/institucional">Institucional</Link>
                </li>
                <li>
                  <Link href="/grupo">Instituições do Grupo</Link>
                </li>
              </ul>

              <div className={s.mobileActions}>
                <Link href="/portal-aluno" className={s.btnOutline}>
                  Portal do Aluno
                </Link>
                <Link href="/admissions" className={s.btnPrimary}>
                  Inscreva-se
                </Link>
              </div>

              <div className={s.social}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                  <Twitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube />
                </a>
              </div>
            </aside>
          </nav>
        </div>
      </header>
    </>
  );
}
