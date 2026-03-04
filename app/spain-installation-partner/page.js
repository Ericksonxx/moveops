"use client";
import { useState } from "react";
import Link from "next/link";
import { i18n } from "../../lib/i18n";
import Shell from "../../components/Shell";
import HowItWorks from "../../components/HowItWorks";
import CoverageMap from "../../components/CoverageMap";
import FAQ from "../../components/FAQ";

export default function SpainInstallationPartner() {
  const [lang, setLang] = useState("en");
  const t = i18n[lang];
  const page = t.install;

  return (
    <Shell lang={lang} setLang={setLang} t={t}>
      <section className="heroInstall">
        <div className="container heroGridInstall">
          <div>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: "0 0 18px", maxWidth: "20ch" }}>{page.h1}</h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 22px", maxWidth: "64ch" }}>{page.sub}</p>
            <div className="pillRow">
              {t.common.pills.map((p) => <span key={p} className="pill">{p}</span>)}
            </div>
            <div className="ctaRow">
              <Link className="btn" href="/contact">{lang === "es" ? "Pedir viabilidad" : "Check feasibility"}</Link>
            </div>
          </div>
          <div className="installBox">
            <div className="installBoxHead">
              <div className="installBoxTitle">{page.whoFor.title}</div>
              <div className="installBoxHint">{lang === "es" ? "Trabajamos como tu equipo local en España." : "We operate as your local Spain team."}</div>
            </div>
            <ul className="installList">
              {page.whoFor.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="installBoxCtas">
              <Link className="btn btnSmall" href="/contact">{lang === "es" ? "Hablar del proyecto" : "Talk about your project"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead"><h2 className="h2">{page.services.title}</h2></div>
          <div className="split2">
            {page.services.cards.map((c) => (
              <div className="infoCard" key={c.title}>
                <div className="infoHead">
                  <div className="infoIcon">→</div>
                  <div><div className="infoTitle">{c.title}</div></div>
                </div>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks t={t} lang={lang} />
      <CoverageMap t={t} lang={lang} />

      <section className="section">
        <div className="container">
          <div className="sectionHead"><h2 className="h2">{t.faq.title}</h2></div>
          <FAQ items={t.faq.items} />
        </div>
      </section>
    </Shell>
  );
}
