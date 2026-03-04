"use client";
import { useState, useMemo } from "react";

export default function CoverageMap({ t, lang }) {
  const [active, setActive] = useState(null);

  const pins = useMemo(() => [
    { key: "madrid",    x: 55,   y: 46.5, label: "Madrid / IFEMA" },
    { key: "barcelona", x: 85.0, y: 39.0, label: "Barcelona" },
    { key: "valencia",  x: 69,   y: 53.0, label: "Valencia" },
    { key: "seville",   x: 40,   y: 68,   label: lang === "es" ? "Sevilla" : "Seville" },
    { key: "malaga",    x: 49,   y: 72,   label: "Málaga" },
  ], [lang]);

  const chipMap = useMemo(() => lang === "es"
    ? { "Madrid / IFEMA": "madrid", "Barcelona / Fira": "barcelona", Valencia: "valencia", Sevilla: "seville", Málaga: "malaga", Nacional: "nationwide" }
    : { "Madrid / IFEMA": "madrid", "Barcelona / Fira": "barcelona", Valencia: "valencia", Seville: "seville", Málaga: "malaga", Nationwide: "nationwide" }
  , [lang]);

  function toggle(k) { setActive((prev) => (prev === k ? null : k)); }

  return (
    <section className="section" id="coverage">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t?.coverage?.title ?? "Coverage"}</h2>
          <p className="subtle">{t?.coverage?.subtitle ?? ""}</p>
        </div>
        <div className="covGrid">
          <div className="covChips">
            <div className="chipRow">
              {(t?.coverage?.chips ?? []).map((c) => {
                const k = chipMap[c] ?? c;
                return (
                  <button key={c} type="button" className={`chipBtn ${active === k ? "active" : ""}`} onClick={() => toggle(k)}>{c}</button>
                );
              })}
            </div>
            <div className="covNote">{lang === "es" ? "Haz click para resaltar en el mapa." : "Click to highlight on the map."}</div>
          </div>
          <div className="covMapStage">
            <img className="covMapImg" src="/spain.svg" alt="Map of Spain" />
            <div className="covPins">
              {pins.map((p) => (
                <button key={p.key} type="button" className={`covPinBtn ${active === p.key ? "active" : ""}`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }} onClick={() => toggle(p.key)} aria-label={p.label}>
                  <span className="covHalo" aria-hidden="true" />
                  <span className="covDot" aria-hidden="true" />
                  <span className="covLbl">{p.label}</span>
                </button>
              ))}
            </div>
            <div className="covStamp">{lang === "es" ? "Nacional" : "Nationwide"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
