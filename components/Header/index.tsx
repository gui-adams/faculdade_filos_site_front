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
                {/* Home geralmente é leve, pode deixar o prefetch padrão ou false se quiser garantir */}
                <Link href="/">Home</Link>
              </li>

              {/* === MENU CURSOS === */}
              <li className={s.hasDropdown}>
                <Link href="/cursos" prefetch={false} className={s.trigger} aria-haspopup="menu">
                  Cursos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>

                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/cursos/graduacao" prefetch={false}>
                      Graduação
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/cursos/pos-graduacao" prefetch={false}>
                      Pós-graduação
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/cursos/extensao" prefetch={false}>
                      Extensão
                    </Link>
                  </li>
                </ul>
              </li>

              {/* === MENU A FILOS (SOBRE) === */}
              <li className={s.hasDropdown}>
                <Link href="/about" prefetch={false} className={s.trigger} aria-haspopup="menu">
                  A Filos <span className={s.caret} aria-hidden="true">▾</span>
                </Link>

                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/about" prefetch={false}>
                      Sobre
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/about/infraestrutura" prefetch={false}>
                      Infraestrutura
                    </Link>
                  </li>
                </ul>
              </li>

              {/* === MENU INSTITUCIONAL === */}
              <li className={s.hasDropdown}>
                <Link href="/institucional" prefetch={false} className={s.trigger} aria-haspopup="menu">
                  Institucional <span className={s.caret} aria-hidden="true">▾</span>
                </Link>

                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/institucional/revista" prefetch={false}>
                      Revista
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/editais" prefetch={false}>
                      Editais
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/regulamentos" prefetch={false}>
                      Regulamentos
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/cpa" prefetch={false}>
                      CPA
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/ouvidoria" prefetch={false}>
                      Ouvidoria
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/institucional/biblioteca" prefetch={false}>
                      Biblioteca
                    </Link>
                  </li>
                </ul>
              </li>

              {/* === MENU GRUPO === */}
              <li className={s.hasDropdown}>
                <Link href="/grupo" prefetch={false} className={s.trigger} aria-haspopup="menu">
                  Instituições do Grupo <span className={s.caret} aria-hidden="true">▾</span>
                </Link>

                <ul className={s.dropdown} role="menu">
                  <li role="none">
                    <Link role="menuitem" href="/grupo/colegio-x" prefetch={false}>
                      Colégio Filos
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" href="/grupo/fundacao-y" prefetch={false}>
                      Fundação
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className={s.actions}>
            {/* Link externo: NÃO use next/link */}
            <a
              href="https://faculdadefilos.jacad.com.br/academico/professor/login"
              className={s.btnOutline}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal
            </a>

            <Link href="/admissions" prefetch={false} className={s.btnPrimary}>
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
                  <Link href="/cursos" prefetch={false}>Cursos</Link>
                </li>
                <li>
                  <Link href="/about" prefetch={false}>A Filos</Link>
                </li>
                <li>
                  <Link href="/institucional" prefetch={false}>Institucional</Link>
                </li>
                <li>
                  <Link href="/grupo" prefetch={false}>Instituições do Grupo</Link>
                </li>
              </ul>

              <div className={s.mobileActions}>
                <Link href="/portal-aluno" prefetch={false} className={s.btnOutline}>
                  Portal do Aluno
                </Link>

                <Link href="/admissions" prefetch={false} className={s.btnPrimary}>
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