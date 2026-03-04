"use client";
import { useState } from "react";

function getPanel(active, lang) {
  if (lang === "es") {
    if (active === 0) return { header: "Before / After — Fotos por zona", blocks: [{ h: "Zona / Tienda / Stand", p: "Fotos generales + detalle (acabados, uniones, iluminación)." }, { h: "Estado final", p: "Qué quedó instalado y cómo se entrega." }], note: "Útil para aprobar rápido y evitar \"¿podéis mandar más fotos?\"." };
    if (active === 1) return { header: "Issues log — Incidencias", blocks: [{ h: "Qué pasó", p: "Faltantes, daños, restricciones de acceso, cambios onsite." }, { h: "Qué se hizo", p: "Fix aplicado, workaround, reimpresión solicitada, etc." }, { h: "Qué queda", p: "Punch list claro, con prioridad." }], note: "Reduce idas y vueltas y deja trazabilidad para cliente/recinto." };
    return { header: "Sign-off summary — Resumen", blocks: [{ h: "Recap", p: "Alcance entregado vs planificado, en 5 líneas." }, { h: "Pendientes", p: "Si hay, lista corta con siguiente acción." }, { h: "OK para cierre", p: "Evidencia lista para aprobación." }], note: "Perfecto para reenviar a cliente sin reescribir nada." };
  }
  if (active === 0) return { header: "Before / After — Photos by area", blocks: [{ h: "Area / Store / Stand", p: "Wide + detail shots (finishes, joints, lighting)." }, { h: "Final status", p: "What's installed and how it was delivered." }], note: "Speeds up approvals and avoids endless \"can you send more photos?\"." };
  if (active === 1) return { header: "Issues log — Traceability", blocks: [{ h: "What happened", p: "Missing items, damages, access constraints, onsite changes." }, { h: "What we did", p: "Fix applied, workaround, reprint requested, etc." }, { h: "What remains", p: "Clear punch list with priority." }], note: "Reduces back-and-forth and keeps a clean audit trail." };
  return { header: "Sign-off summary — Recap", blocks: [{ h: "Recap", p: "Delivered scope vs planned scope in a few lines." }, { h: "Open items", p: "If any, short list with next action." }, { h: "Ready to sign", p: "Evidence formatted for approval." }], note: "Easy to forward to your client without rewriting anything." };
}

export default function Proof({ t, lang }) {
  const items = t?.proof?.items ?? [];
  const [active, setActive] = useState(0);
  const a = items[active] ?? { title: "", text: "" };
  const panel = getPanel(active, lang);
  const kicker = lang === "es" ? "Muestra al comprador qué recibe. Reduce fricción." : "Show buyers what they get. This reduces friction.";

  return (
    <section className="section" id="reporting">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t?.proof?.title ?? "Reporting"}</h2>
          <p className="subtle">{kicker}</p>
        </div>
        <div className="proofSplit">
          <div className="proofList" role="tablist">
            {items.map((it, idx) => (
              <button key={it.title} type="button" className={`proofRow ${idx === active ? "active" : ""}`}
                onClick={() => setActive(idx)} role="tab" aria-selected={idx === active}>
                <div className="proofIcon">{idx === 0 ? "▣" : idx === 1 ? "≡" : "✓"}</div>
                <div>
                  <div className="proofTitle">{it.title}</div>
                  <div className="proofText">{it.text}</div>
                </div>
              </button>
            ))}
          </div>
          <aside className="proofPanel">
            <div className="proofKicker">{lang === "es" ? "Vista previa" : "Preview"}</div>
            <div className="proofPanelTitle">{a.title}</div>
            <div className="proofMock">
              <div className="mockHeader">
                <div className="mockDot" /><div className="mockDot" /><div className="mockDot" />
                <div className="mockTitle">{panel.header}</div>
              </div>
              <div className="mockBody">
                {panel.blocks.map((b) => (
                  <div className="mockBlock" key={b.h}>
                    <div className="mockH">{b.h}</div>
                    <div className="mockP">{b.p}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="proofNote">{panel.note}</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
