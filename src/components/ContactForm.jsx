import { useMemo, useState } from "react";

export default function ContactForm({ lang, t }) {
  const contactEmail = t?.contact?.email || "hello@moveops.services";

  const roles = useMemo(() => t.contact.form.roles, [t]);
  const projectTypes = useMemo(() => t.contact.form.projectTypes, [t]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus({ type: "success", msg: lang === "es" ? "Email copiado." : "Email copied." });
      setTimeout(() => setStatus({ type: "idle", msg: "" }), 2000);
    } catch {
      // no-op
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "idle", msg: "" });

    if (!form.email || !form.message) {
      setStatus({ type: "error", msg: t.contact.form.err });
      return;
    }

    try {
      setStatus({ type: "loading", msg: lang === "es" ? "Enviando…" : "Sending…" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "success", msg: lang === "es" ? "Enviado. Respondo en 24h." : "Sent. Reply within 24h." });
      setForm((f) => ({ ...f, message: "" }));
    } catch {
      setStatus({
        type: "error",
        msg:
          lang === "es"
            ? `No se pudo enviar. Escríbenos a ${contactEmail}`
            : `Send failed. Email us at ${contactEmail}`,
      });
    }
  }

  return (
    <div className="contactWrap">
      <div className="emailBox">
        <div className="emailBoxTop">
          <div>
            <div className="emailKicker">{lang === "es" ? "¿Prefieres email?" : "Prefer email?"}</div>
            <div className="emailBig">{contactEmail}</div>
            <div className="emailSub">
              {lang === "es" ? "Respondo en menos de 24h laborables." : "Reply within 24 business hours."}
            </div>
          </div>

          <div className="emailActions">
            <a className="btn btnGhost btnSmall" href={`mailto:${contactEmail}`}>
              {lang === "es" ? "Abrir email" : "Open email"}
            </a>
            <button className="btn btnSmall" type="button" onClick={copyEmail}>
              {lang === "es" ? "Copiar" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="row2">
          <label className="field">
            <span>{t.contact.form.name}</span>
            <input name="name" value={form.name} onChange={onChange} autoComplete="name" />
          </label>
          <label className="field">
            <span>{t.contact.form.email}</span>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className="row2">
          <label className="field">
            <span>{t.contact.form.company}</span>
            <input name="company" value={form.company} onChange={onChange} autoComplete="organization" />
          </label>
        </div>

        <label className="field">
          <span>{t.contact.form.message}</span>
          <textarea name="message" value={form.message} onChange={onChange} rows={7} required />
        </label>

        <button className="btn" type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? (lang === "es" ? "Enviando…" : "Sending…") : t.contact.form.send}
        </button>

        {status.type !== "idle" ? (
          <div className={`status ${status.type === "error" ? "err" : "ok"}`} role="status">
            {status.msg}
          </div>
        ) : null}

        <div className="fine">{t.contact.form.fine}</div>
      </form>
    </div>
  );
}