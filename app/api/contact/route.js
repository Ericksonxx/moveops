import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, role, projectType, city, dates, files, message } = body;

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "MoveOps Web <web@moveops.services>",
      to: "hello@moveops.services",
      reply_to: email,
      subject: `New inquiry: ${name || email}${city ? ` — ${city}` : ""}`,
      text: [
        `Name: ${name || "—"}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Role: ${role || "—"}`,
        `Project type: ${projectType || "—"}`,
        `City / venue: ${city || "—"}`,
        `Dates: ${dates || "—"}`,
        `Files: ${files || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
