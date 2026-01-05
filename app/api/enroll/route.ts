import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Sua API Key do Resend
const resend = new Resend('re_G4nqtQat_EmZhmMsiaemUuuioRDJEVcuT');

export async function POST(req: Request) {
  try {
    const { name, email, phone, course } = await req.json();

    // Envio do e-mail
    const { data, error } = await resend.emails.send({
      from: 'Faculdade Filos <onboarding@resend.dev>', // No início, use este remetente padrão do Resend para testes
      to: 'adams.unb@gmail.com', // <--- COLOQUE AQUI O E-MAIL QUE VAI RECEBER AS INSCRIÇÕES
      subject: `Nova Inscrição: ${course}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0c2d62;">Nova solicitação de inscrição recebida pelo site</h2>
          <p><strong>Curso de interesse:</strong> ${course}</p>
          <hr />
          <p><strong>Dados do Aluno:</strong></p>
          <ul>
            <li><strong>Nome:</strong> ${name}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>WhatsApp/Telefone:</strong> ${phone}</li>
          </ul>
          <br />
          <p style="font-size: 12px; color: #666;">Este é um e-mail automático enviado pelo formulário de cursos do site.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro no Resend:", error);
      return NextResponse.json({ error: 'Falha ao enviar e-mail' }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Erro na API de inscrição:", error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}