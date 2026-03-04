"use client";
import { useState } from "react";

export default function ContactForm({ t }) {
  const f = t.contact.form;
  const [form, setForm] = useState({ name: "", email: "", company: "", role: f.roles[0], projectType: f.projectTypes[0], city: "", dates: "", files: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function onChange(e) { setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) { setStatus({ type: "err", msg: f.err }); return; }
    setStatus({ type: "ok", msg: "Sending…" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus({ type: "ok", msg: "Sent ✓ We'll reply within 24h." });
      setForm((prev) => ({ ...prev, message: "" }));
    } catch {
      setStatus({ type: "err", msg: "Failed to send. Email us directly at hello@moveops.services" });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        <label className="field"><span>{f.name}</span><input name="name" value={form.name} onChange={onChange} autoComplete="name" /></label>
        <label className="field"><span>{f.email}</span><input name="email" value={form.email} onChange={onChange} autoComplete="email" required /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        <label className="field"><span>{f.company}</span><input name="company" value={form.company} onChange={onChange} autoComplete="organization" /></label>
        <label className="field"><span>{f.role}</span>
          <select name="role" value={form.role} onChange={onChange}>
            {f.roles.map((r) => <option key={r}>{r}</option>)}
          </select>
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        <label className="field"><span>{f.projectType}</span>
          <select name="projectType" value={form.projectType} onChange={onChange}>
            {f.projectTypes.map((r) => <option key={r}>{r}</option>)}
          </select>
        </label>
        <label className="field"><span>{f.city}</span><input name="city" value={form.city} onChange={onChange} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        <label className="field"><span>{f.dates}</span><input name="dates" value={form.dates} onChange={onChange} /></label>
        <label className="field"><span>{f.files}</span><input name="files" value={form.files} onChange={onChange} /></label>
      </div>
      <label className="field" style={{ marginBottom: 14 }}>
        <span>{f.message}</span>
        <textarea name="message" value={form.message} onChange={onChange} rows={6} required />
      </label>
      <button className="btn" type="submit">{f.send}</button>
      {status.type !== "idle" && <div className={`status ${status.type}`}>{status.msg}</div>}
      <div className="fine">{f.fine}</div>
    </form>
  );
}
