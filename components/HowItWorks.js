"use client";
import { useState, useMemo } from "react";

export default function HowItWorks({ t, lang }) {
  const steps = t?.how?.steps ?? [];
  const [active, setActive] = useState(0);

  const details = useMemo(() => {
    if (lang === "es") return [
      { detailTitle: "Qué necesitamos", bullets: ["Ciudad/recinto + fechas de montaje/desmontaje", "Alcance (gráfica, mobiliario, lightboxes, rótulos, etc.)", "Slots, normativa, permisos y requisitos PRL", "Direcciones de entrega + contacto onsite"], note: "Resultado: plan simple + checklist alineado con el recinto/tienda." },
      { detailTitle: "Qué pasa onsite", bullets: ["Coordinación de equipo + supervisión", "Entregas dentro de slot (recinto/tienda)", "Montaje + retoques + resolución de incidencias", "Updates si el montaje dura varios días"], note: "Resultado: ejecución predecible, menos fricción y menos chasing de proveedores." },
      { detailTitle: "Qué recibes", bullets: ["Fotos (general + detalle) por zona/stand/tienda", "Notas: qué se hizo, incidencias y fixes aplicados", "Punch list de pendientes (si aplica)", "Formato de carpetas/nombres si tienes estándar"], note: "Resultado: handover claro para aprobación rápida (sign-off)." },
    ];
    return [
      { detailTitle: "What we need", bullets: ["City/venue + build & dismantle dates", "Scope (graphics, furniture, lightboxes, signage, etc.)", "Slots, rules, permits and H&S requirements", "Delivery addresses + onsite contact details"], note: "Outcome: a clear plan + a checklist aligned with venue/store rules." },
      { detailTitle: "What happens on-site", bullets: ["Crew coordination + supervision", "Slot-based deliveries (venue/store)", "Build + fix-ups + issue handling", "Status updates for multi-day builds"], note: "Outcome: predictable delivery, less friction, less vendor chasing." },
      { detailTitle: "What you receive", bullets: ["Photo set (wide + detail) per area/store/stand", "Notes: what was done, issues found, fixes applied", "Punch list for remaining items (if any)", "Optional: naming/folder structure to match your standard"], note: "Outcome: clean handover for fast sign-off." },
    ];
  }, [lang]);

  const a = details[Math.min(active, details.length - 1)];

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t?.how?.title ?? "How it works"}</h2>
        </div>
        <div className="hiwSplit">
          <div className="hiwList" role="tablist">
            {steps.map((s, idx) => {
              const n = String(idx + 1).padStart(2, "0");
              return (
                <button key={n} type="button" className={`hiwRow ${idx === active ? "active" : ""}`}
                  onClick={() => setActive(idx)} role="tab" aria-selected={idx === active}>
                  <div className="hiwBadge">{n}</div>
                  <div>
                    <div className="hiwTitle">{s.title}</div>
                    <div className="hiwText">{s.text}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <aside className="hiwPanel">
            <div className="hiwPanelTop">
              <div className="hiwPanelKicker">{(lang === "es" ? "Paso" : "Step") + " " + String(active + 1).padStart(2, "0")}</div>
              <div className="hiwPanelTitle">{a.detailTitle}</div>
            </div>
            <ul className="hiwBullets">{a.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="hiwNote">{a.note}</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
