import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Proof() {
  const { t, lang } = useOutletContext();
  const items = t?.proof?.items ?? [];
  const [active, setActive] = useState(0);
  const a = items[active] ?? { title: "", text: "" };

  const kicker =
    lang === "es"
      ? "Muestra al comprador qué recibe. Reduce fricción."
      : "Show buyers what they get. This reduces friction.";

  const panel = getPanel(active, lang);

  return (
    <section className="section" id="reporting">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t?.proof?.title ?? "Reporting"}</h2>
          <p className="subtle">{kicker}</p>
        </div>

        <div className="proofSplit">
          <div className="proofList" role="tablist" aria-label="Reporting items">
            {items.map((it, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={`${it.title}-${idx}`}
                  type="button"
                  className={`proofRow ${isActive ? "active" : ""}`}
                  onClick={() => setActive(idx)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="proofIcon" aria-hidden="true">
                    {idx === 0 ? "▣" : idx === 1 ? "≡" : "✓"}
                  </div>
                  <div className="proofCopy">
                    <div className="proofTitle">{it.title}</div>
                    <div className="proofText">{it.text}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="proofPanel" role="region" aria-label="Reporting preview">
            <div className="proofPanelTop">
              <div className="proofKicker">{lang === "es" ? "Vista previa" : "Preview"}</div>
              <div className="proofPanelTitle">{a.title}</div>
            </div>

            <div className="proofMock">
              <div className="mockHeader">
                <div className="mockDot" />
                <div className="mockDot" />
                <div className="mockDot" />
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

function getPanel(active, lang) {
  if (lang === "es") {
    if (active === 0) {
      return {
        header: "Before / After — Fotos por zona",
        blocks: [
          { h: "Zona / Tienda / Stand", p: "Fotos generales + detalle (acabados, uniones, iluminación)." },
          { h: "Estado final", p: "Qué quedó instalado y cómo se entrega." },
        ],
        note: "Útil para aprobar rápido y evitar “¿podéis mandar más fotos?”.",
      };
    }
    if (active === 1) {
      return {
        header: "Issues log — Incidencias",
        blocks: [
          { h: "Qué pasó", p: "Faltantes, daños, restricciones de acceso, cambios onsite." },
          { h: "Qué se hizo", p: "Fix aplicado, workaround, reimpresión solicitada, etc." },
          { h: "Qué queda", p: "Punch list claro, con prioridad." },
        ],
        note: "Reduce idas y vueltas y deja trazabilidad para cliente/recinto.",
      };
    }
    return {
      header: "Sign-off summary — Resumen",
      blocks: [
        { h: "Recap", p: "Alcance entregado vs planificado, en 5 líneas." },
        { h: "Pendientes", p: "Si hay, lista corta con siguiente acción." },
        { h: "OK para cierre", p: "Evidencia lista para aprobación." },
      ],
      note: "Perfecto para reenviar a cliente sin reescribir nada.",
    };
  }

  if (active === 0) {
    return {
      header: "Before / After — Photos by area",
      blocks: [
        { h: "Area / Store / Stand", p: "Wide + detail shots (finishes, joints, lighting)." },
        { h: "Final status", p: "What’s installed and how it was delivered." },
      ],
      note: "Speeds up approvals and avoids endless “can you send more photos?”.",
    };
  }
  if (active === 1) {
    return {
      header: "Issues log — Traceability",
      blocks: [
        { h: "What happened", p: "Missing items, damages, access constraints, onsite changes." },
        { h: "What we did", p: "Fix applied, workaround, reprint requested, etc." },
        { h: "What remains", p: "Clear punch list with priority." },
      ],
      note: "Reduces back-and-forth and keeps a clean audit trail.",
    };
  }
  return {
    header: "Sign-off summary — Recap",
    blocks: [
      { h: "Recap", p: "Delivered scope vs planned scope in a few lines." },
      { h: "Open items", p: "If any, short list with next action." },
      { h: "Ready to sign", p: "Evidence formatted for approval." },
    ],
    note: "Easy to forward to your client without rewriting anything.",
  };
}
