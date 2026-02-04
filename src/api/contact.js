import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  const { name, email, company, role, message, lang } = req.body || {};

  if (!email || !message) return res.status(400).json({ ok: false });

  const subject = "MoveOps — Contact form";
  const text =
    `Language: ${lang}\n` +
    `Name: ${name || ""}\n` +
    `Email: ${email}\n` +
    `Company: ${company || ""}\n` +
    `Role: ${role || ""}\n\n` +
    `Message:\n${message}`;

  try {
    await resend.emails.send({
      from: "MoveOps <no-reply@moveops.services>", // necesitas dominio verificado en Resend
      to: ["hello@moveops.services"],
      reply_to: email,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false });
  }
}
