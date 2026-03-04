"use client";
import { useState } from "react";
import { i18n } from "../../lib/i18n";
import Shell from "../../components/Shell";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  const [lang, setLang] = useState("en");
  const t = i18n[lang];

  return (
    <Shell lang={lang} setLang={setLang} t={t}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="sectionHead">
            <h1 className="h2">{t.contact.h1}</h1>
            <p className="subtle">{t.contact.sub}</p>
          </div>
          <div className="emailBox" style={{ marginBottom: 24 }}>
            <div className="emailKicker">Email</div>
            <div className="emailBig">hello@moveops.services</div>
            <div className="emailSub">{lang === "es" ? "Respuesta en 24h." : "Reply within 24h."}</div>
          </div>
          <ContactForm t={t} />
        </div>
      </section>
    </Shell>
  );
}
