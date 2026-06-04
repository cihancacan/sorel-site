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
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function formatService(service: string = '') {
  switch (service) {
    case 'photo-video-mariage':
      return 'Photo & Vidéo Mariage'
    case 'photographe-mariage':
      return 'Photographe Mariage'
    case 'videaste-mariage':
      return 'Vidéaste Mariage'
    case 'photo-video-evenement-prive':
      return 'Photo & Vidéo Événement Privé'
    case 'photo-video-evenement-entreprise':
      return 'Photo & Vidéo Événement Entreprise'
    case 'studio-production':
      return 'Studio & Production'
    default:
      return service || '-'
  }
}

function formatMediaType(mediaType: string = '') {
  switch (mediaType) {
    case 'photo':
      return 'Photo'
    case 'video':
      return 'Vidéo'
    case 'both':
      return 'Photo + Vidéo'
    default:
      return mediaType || '-'
  }
}

function formatEventType(eventType: string = '') {
  switch (eventType) {
    case 'wedding':
      return 'Mariage'
    case 'civil-ceremony':
      return 'Mairie / cérémonie civile'
    case 'religious-ceremony':
      return 'Église / cérémonie religieuse'
    case 'proposal':
      return 'Demande en mariage'
    case 'private-event':
      return 'Événement privé'
    case 'corporate-event':
      return 'Événement entreprise'
    case 'other':
      return 'Autre'
    default:
      return eventType || '-'
  }
}

function formatPack(pack: string = '') {
  switch (pack) {
    case 'essentielle':
    case 'essential':
      return 'Collection Essentielle'
    case 'signature':
      return 'Collection Signature'
    case 'maison':
      return 'Collection Maison'
    case 'ceremonie':
    case 'ceremony':
      return 'Formule Cérémonie / Événement précis'
    default:
      return pack || '-'
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      service = '',
      eventDate = '',
      city = '',
      mediaType = '',
      eventType = '',
      pack = '',
      name = '',
      email = '',
      phone = '',
      message = '',
    } = body

    if (!name || !email || !phone || !eventDate || !city || !eventType) {
      return NextResponse.json(
        { success: false, error: 'Champs obligatoires manquants.' },
        { status: 400 }
      )
    }

    const formatted = {
      service: formatService(service),
      eventDate: eventDate || '-',
      city: city || '-',
      mediaType: formatMediaType(mediaType),
      eventType: formatEventType(eventType),
      pack: formatPack(pack),
      name: name || '-',
      email: email || '-',
      phone: phone || '-',
      message: message || '-',
    }

    const data = {
      service: escapeHtml(formatted.service),
      eventDate: escapeHtml(formatted.eventDate),
      city: escapeHtml(formatted.city),
      mediaType: escapeHtml(formatted.mediaType),
      eventType: escapeHtml(formatted.eventType),
      pack: escapeHtml(formatted.pack),
      name: escapeHtml(formatted.name),
      email: escapeHtml(formatted.email),
      phone: escapeHtml(formatted.phone),
      message: escapeHtml(formatted.message),
    }

    await transporter.sendMail({
      from: `SOREL Studio <${process.env.MAIL_FROM}>`,
      to: 'contact@sorelstudio.fr',
      replyTo: data.email,
      subject: `Nouvelle demande - ${data.eventDate} - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouvelle demande de disponibilité</h2>
          <p><strong>Date :</strong> ${data.eventDate}</p>
          <p><strong>Ville / lieu :</strong> ${data.city}</p>
          <p><strong>Type d'événement :</strong> ${data.eventType}</p>
          <p><strong>Service :</strong> ${data.service}</p>
          <p><strong>Type :</strong> ${data.mediaType}</p>
          <p><strong>Formule choisie :</strong> ${data.pack}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Prénom / nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Téléphone :</strong> ${data.phone}</p>
          <p><strong>Message :</strong><br>${data.message}</p>
        </div>
      `,
      text: `
Nouvelle demande de disponibilité

Date: ${formatted.eventDate}
Ville / lieu: ${formatted.city}
Type d'événement: ${formatted.eventType}
Service: ${formatted.service}
Type: ${formatted.mediaType}
Formule choisie: ${formatted.pack}

Prénom / nom: ${formatted.name}
Email: ${formatted.email}
Téléphone: ${formatted.phone}
Message: ${formatted.message}
      `,
    })

    await transporter.sendMail({
      from: `SOREL Studio <${process.env.MAIL_FROM}>`,
      to: data.email,
      replyTo: 'contact@sorelstudio.fr',
      subject: 'Nous avons bien reçu votre demande - SOREL Studio',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <p>Bonjour ${data.name},</p>
          <p>Nous vous remercions pour votre demande.</p>
          <p>Notre équipe a bien reçu votre demande de disponibilité pour le <strong>${data.eventDate}</strong> à <strong>${data.city}</strong>.</p>
          <p>Nous revenons vers vous rapidement afin de confirmer la disponibilité et d’échanger sur votre projet.</p>
          <p>Nous vous appellerons à partir de ce numéro <strong>01 88 84 22 22</strong>.</p>
          <p>Si vous avez une préférence de disponibilité, vous pouvez répondre directement à cet email en nous indiquant les créneaux qui vous conviennent.</p>
          <p>Bien cordialement,<br>L’équipe SOREL Studio</p>
        </div>
      `,
      text: `
Bonjour ${name},

Nous vous remercions pour votre demande.

Notre équipe a bien reçu votre demande de disponibilité pour le ${formatted.eventDate} à ${formatted.city}.

Nous revenons vers vous rapidement afin de confirmer la disponibilité et d’échanger sur votre projet.

Nous vous appellerons à partir du numéro 01 88 84 22 22.

Si vous avez une préférence de disponibilité, vous pouvez répondre directement à cet email en nous indiquant les créneaux qui vous conviennent.

Bien cordialement,
L’équipe SOREL Studio
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('BOOKING_EMAIL_ERROR', error)
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    )
  }
}
