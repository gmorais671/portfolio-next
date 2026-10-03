import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let english = false;
  try {
    const body = await request.json();
    english = body.locale === "en";

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: english ? "Please fill in your name, email and message." : "Preencha nome, e-mail e mensagem." },
        { status: 400 },
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: english ? "The contact service is unavailable. Please reach out on LinkedIn." : "O serviço de contato está indisponível. Entre em contato pelo LinkedIn." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
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
        { error: english ? "Your message could not be sent. Please try again." : "Não foi possível enviar a mensagem." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: english ? "Your message could not be processed." : "Não foi possível processar sua mensagem." },
      { status: 500 },
    );
  }
}
