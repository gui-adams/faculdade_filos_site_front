type Props = {
  /** Telefone no formato livre; eu limpo para dígitos (ex.: "+55 61 99999-9999") */
  phone: string;
  /** Mensagem inicial do WhatsApp */
  message?: string;
  /** Lado do botão */
  position?: "right" | "left";
  /** Distância da borda inferior (px) */
  bottom?: number;
  /** Rótulo acessível */
  label?: string;
};

import s from "./styles.module.scss";

export default function WhatsAppFab({
  phone,
  message = "Olá! Quero saber mais sobre os cursos da Faculdade Filos.",
  position = "right",
  bottom = 18,
  label = "Falar no WhatsApp",
}: Props) {
  const digits = phone.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  const href = `https://wa.me/${digits}?text=${text}`;

  const sideClass = position === "left" ? s.left : s.right;

  return (
    <a
      href={href}
      className={`${s.fab} ${sideClass}`}
      style={{ bottom }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {/* anel pulsante */}
      <span className={s.ping} aria-hidden="true" />
      {/* ícone (use seu /public/whatsapp.svg ou troque pelo SVG inline) */}
      <svg
        className={s.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        {/* glyph simples do WhatsApp (forma genérica) */}
        <path
          fill="currentColor"
          d="M12 2a9.9 9.9 0 0 0-8.46 15.08L2 22l4.99-1.47A9.9 9.9 0 1 0 12 2Zm0 18a8.02 8.02 0 0 1-4.07-1.12l-.29-.17-2.94.86.88-2.86-.19-.3A8 8 0 1 1 12 20Zm4.74-5.36c-.26-.13-1.53-.75-1.77-.83-.24-.09-.41-.13-.58.13-.17.26-.66.82-.81.99-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.43-.44-.58-.45h-.5c-.17 0-.45.06-.68.32-.23.26-.9.88-.9 2.14 0 1.26.93 2.48 1.06 2.65.13.17 1.82 2.78 4.42 3.9.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.53-.62 1.75-1.23.22-.61.22-1.13.15-1.23-.06-.1-.23-.16-.49-.29Z"
        />
      </svg>
    </a>
  );
}
