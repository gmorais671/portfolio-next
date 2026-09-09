import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Preencha nome, e-mail e mensagem." },
        { status: 400 },
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "E-mail de destino não configurado." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfólio Gabriel <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Novo contato pelo portfólio — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Não foi possível processar sua mensagem." },
      { status: 500 },
    );
  }
}