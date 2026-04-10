import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

function escapeHtml(value: string = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name = '',
      email = '',
      phone = '',
      message = '',
    } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Champs obligatoires manquants.' },
        { status: 400 }
      )
    }

    const data = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      message: escapeHtml(message),
    }

    await transporter.sendMail({
      from: `SOREL Studio <${process.env.MAIL_FROM}>`,
      to: 'contact@sorelstudio.fr',
      replyTo: data.email,
      subject: `Nouveau message de contact - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Téléphone :</strong> ${data.phone || '-'}</p>
          <p><strong>Message :</strong><br>${data.message}</p>
        </div>
      `,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Message: ${message}
      `,
    })

    await transporter.sendMail({
      from: `SOREL Studio <${process.env.MAIL_FROM}>`,
      to: data.email,
      replyTo: 'contact@sorelstudio.fr',
      subject: 'Nous avons bien reçu votre message - SOREL Studio',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <p>Bonjour ${data.name},</p>
          <p>Nous avons bien reçu votre message.</p>
          <p>Notre équipe reviendra vers vous très prochainement afin d’échanger sur votre demande.</p>
          <p>Nous pouvons également vous appeler à partir de ce numéro <strong>01 88 84 22 22</strong>.</p>
          <p>Si vous avez une préférence de disponibilité, vous pouvez répondre directement à cet email.</p>
          <p>Bien cordialement,<br>L’équipe SOREL Studio</p>
        </div>
      `,
      text: `
Bonjour ${name},

Nous avons bien reçu votre message.

Notre équipe reviendra vers vous très prochainement afin d’échanger sur votre demande.

Nous pouvons également vous appeler à partir de ce numéro 01 88 84 22 22.

Si vous avez une préférence de disponibilité, vous pouvez répondre directement à cet email.

Bien cordialement,
L’équipe SOREL Studio
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('CONTACT_EMAIL_ERROR', error)
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    )
  }
}
