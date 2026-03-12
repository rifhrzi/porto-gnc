import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INVALID_ENV_PATTERNS = [
  /your[-_]?smtp[-_]?(user|pass|host)?/i,
  /smtp\.example\.com/i,
  /your[-_]?destination/i,
  /example\.com/i,
  /example@email\.com/i,
]

const hasValue = (value) => typeof value === 'string' && value.trim().length > 0

const isLikelyPlaceholder = (value) =>
  !value || INVALID_ENV_PATTERNS.some((pattern) => pattern.test(value))

const parseJsonBody = async (req) => {
  if (!req.body) return null
  if (typeof req.body === 'object') return req.body

  if (typeof req.body !== 'string') return null

  try {
    return JSON.parse(req.body)
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const body = await parseJsonBody(req)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const company = typeof body?.company === 'string' ? body.company.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''
  const hp = typeof body?.hp === 'string' ? body.hp.trim() : ''

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Nama, email, dan pesan wajib diisi.' })
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ ok: false, error: 'Format email tidak valid.' })
  }

  try {
    const smtpHost = process.env.SMTP_HOST?.trim()
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpSecure = process.env.SMTP_SECURE === 'true'
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.trim()
    const realSmtpConfigured = (
      hasValue(smtpHost) &&
      hasValue(process.env.SMTP_PORT) &&
      hasValue(smtpUser) &&
      hasValue(smtpPass) &&
      !isLikelyPlaceholder(smtpHost) &&
      !isLikelyPlaceholder(smtpUser) &&
      !isLikelyPlaceholder(smtpPass)
    )

    let transporter = null
    let testAccount = null

    if (!realSmtpConfigured) {
      if (process.env.NODE_ENV === 'production') {
        return res.status(500).json({
          ok: false,
          error: 'SMTP tidak dikonfigurasi. Atur SMTP_HOST, SMTP_USER, SMTP_PORT, dan SMTP_PASS di lingkungan produksi.',
        })
      }

      if (process.env.USE_ETHEREAL_TRANSPORT === 'false') {
        return res.status(500).json({
          ok: false,
          error: 'SMTP tidak valid dan fallback Ethereal dinonaktifkan. Isi kredensial SMTP atau atur USE_ETHEREAL_TRANSPORT=true.',
        })
      }

      testAccount = await nodemailer.createTestAccount()
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      })
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    }

    const from = process.env.MAIL_FROM?.trim()
      || (realSmtpConfigured ? smtpUser : undefined)
      || 'Portfolio Contact <noreply@localhost.test>'
    const recipient = process.env.MAIL_TO?.trim() || smtpUser || 'test-recipient@localhost.test'

    if (isLikelyPlaceholder(recipient) && process.env.NODE_ENV === 'production') {
      return res.status(500).json({
        ok: false,
        error: 'MAIL_TO tidak valid di lingkungan produksi. Gunakan alamat email yang benar.',
      })
    }

    const info = await transporter.sendMail({
      from,
      to: recipient,
      replyTo: email,
      subject: `Pesan Kontak dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\nNomor HP: ${hp || '-'}\nPerusahaan: ${company || '-'}\n\nPesan:\n${message}`,
      html: `
        <div>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Nomor HP:</strong> ${hp || '-'}</p>
          <p><strong>Perusahaan:</strong> ${company || '-'}</p>
          <p><strong>Pesan:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    const previewUrl = testAccount && nodemailer.getTestMessageUrl(info)

    if (process.env.NODE_ENV !== 'production' && previewUrl) {
      console.log(`Ethereal preview URL (${testAccount.user}): ${previewUrl}`)
    }

    const response = { ok: true }
    if (previewUrl) response.previewUrl = previewUrl
    return res.status(201).json(response)
  } catch (error) {
    const message = process.env.NODE_ENV !== 'production' && error instanceof Error
      ? error.message
      : 'Failed to send email.'

    return res.status(500).json({ ok: false, error: message })
  }
}
