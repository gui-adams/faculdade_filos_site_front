// components/Footer/index.tsx
import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer} role="contentinfo">
      <div className={s.top}>
        {/* Brand / social */}
        <div className={s.brandBox}>
          <Link href="/" className={s.logoLink} aria-label="Página inicial - Faculdade Filos">
            <Image
              src="/logo_branca.svg"
              alt="Faculdade Filos"
              width={170}
              height={40}
              className={s.logo}
              sizes="170px"
              priority={false}
            />
          </Link>

          <p className={s.tagline}>Ensino superior de excelência em Águas Lindas e região.</p>

          <div className={s.social} aria-label="Redes sociais">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook aria-hidden="true" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram aria-hidden="true" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Links */}
        <nav className={s.cols} aria-label="Rodapé">
          <div className={s.col}>
            <p className={s.title}>Cursos</p>
            <ul className={s.list}>
              {/* Se estas rotas EXISTIREM, pode remover prefetch={false} */}
              <li>
                <Link href="/cursos/graduacao" prefetch={false}>
                  Graduação
                </Link>
              </li>
              <li>
                <Link href="/cursos/pos-graduacao" prefetch={false}>
                  Pós-graduação
                </Link>
              </li>
              <li>
                <Link href="/cursos/mba" prefetch={false}>
                  MBA
                </Link>
              </li>
              <li>
                <Link href="/cursos/bolsas" prefetch={false}>
                  Bolsas e descontos
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.col}>
            <p className={s.title}>Institucional</p>
            <ul className={s.list}>
              {/* /about existe (você usa no Header), pode manter prefetch normal */}
              <li>
                <Link href="/about">Sobre</Link>
              </li>

              {/* Estas rotas podem não existir => sem prefetch */}
              <li>
                <Link href="/institucional/editais" prefetch={false}>
                  Editais
                </Link>
              </li>
              <li>
                <Link href="/institucional/regulamentos" prefetch={false}>
                  Regulamentos
                </Link>
              </li>
              <li>
                <Link href="/contato" prefetch={false}>
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.col}>
            <p className={s.title}>Contato</p>

            <ul className={s.contact}>
              <li>
                <MapPin aria-hidden="true" />
                <span>Av. Principal, 123 — Águas Lindas/GO</span>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <a href="tel:+5561999999999">(61) 99999-9999</a>
              </li>
              <li>
                <Mail aria-hidden="true" />
                <a href="mailto:contato@faculdadefilos.com.br">contato@faculdadefilos.com.br</a>
              </li>
            </ul>

            <div className={s.ctaRow}>
              {/* /admissions pode não existir => sem prefetch */}
              <Link href="/admissions" prefetch={false} className={s.btnPrimary}>
                Inscreva-se
              </Link>

              {/* ✅ link externo correto */}
              <a
                href="https://faculdadefilos.jacad.com.br/academico/professor/login"
                className={s.btnOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portal do Aluno
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className={s.bottom}>
        <p className={s.copy}>
          © {year} Faculdade Filos. Todos os direitos reservados.
          <span className={s.sep}>•</span>
          <span className={s.creditLine}>
            Desenvolvido por{" "}
            <a
              className={s.creditLink}
              href="https://www.instagram.com/gui.adams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guilherme Adams
            </a>
          </span>
        </p>

        <ul className={s.legal}>
          <li>
            <Link href="/privacidade" prefetch={false}>
              Privacidade
            </Link>
          </li>
          <li>
            <Link href="/termos" prefetch={false}>
              Termos
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
