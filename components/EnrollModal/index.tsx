"use client";
import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import s from "./styles.module.scss";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export default function EnrollModal({ isOpen, onClose, courseTitle }: EnrollModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      course: courseTitle
    };

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={s.closeBtn}><X /></button>
        
        {success ? (
          <div className={s.successState}>
            <CheckCircle size={48} color="#22c55e" />
            <h3>Inscrição Recebida!</h3>
            <p>Em breve nossa equipe entrará em contato.</p>
          </div>
        ) : (
          <>
            <h3 className={s.title}>Inscreva-se em <br/><span>{courseTitle}</span></h3>
            <form onSubmit={handleSubmit} className={s.form}>
              <div className={s.field}>
                <label>Nome Completo</label>
                <input name="name" placeholder="Ex: João Silva" required />
              </div>
              <div className={s.field}>
                <label>E-mail</label>
                <input name="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className={s.field}>
                <label>WhatsApp</label>
                <input name="phone" placeholder="(00) 00000-0000" required />
              </div>
              <button type="submit" className={s.submitBtn} disabled={loading}>
                {loading ? "Enviando..." : "Confirmar Inscrição"} <Send size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}