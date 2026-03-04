"use client";
import { useState } from "react";
import Link from "next/link";
import { i18n } from "../lib/i18n";
import Shell from "./Shell";
import HowItWorks from "./HowItWorks";
import Proof from "./Proof";
import CoverageMap from "./CoverageMap";
import FAQ from "./FAQ";

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const t = i18n[lang];

  return (
    <Shell lang={lang} setLang={setLang} t={t}>
      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <h1 className="h1">{t.home.h1}</h1>
            <p className="lead">{t.home.sub}</p>
            <div className="pillRow">
              {t.common.pills.slice(0, 3).map((p) => <span key={p} className="pill">{p}</span>)}
            </div>
            <div className="statsRow">
              {t.common.stats.map((s) => (
                <div key={s.k} className="stat">
                  <div className="statV">{s.v}</div>
                  <div className="statK">{s.k}</div>
                </div>
              ))}
            </div>
            <div className="ctaRow">
              <Link className="btn" href="/contact">{t.home.primaryCta}</Link>
              <Link className="btn btnGhost" href="/spain-installation-partner">{t.home.secondaryCta}</Link>
            </div>
          </div>
          <div className="heroRight">
            <div className="heroMedia">
              <img src="/hero-snipes.jpg" alt="Retail façade installation example" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section" id="services">
        <div className="container">
          <div className="sectionHead"><h2 className="h2">Services</h2></div>
          <div className="svcGrid">
            {t.home.blocks.map((it, idx) => {
              const imgs = ["/services/retail.jpg", "/services/stand.jpeg", "/services/rollouts.jpeg"];
              const alts = ["Retail installs", "Stand build support", "Multi-city rollouts"];
              return (
                <article className="svcCard" key={it.title}>
                  <div className="svcMedia">
                    <img src={imgs[idx]} alt={alts[idx]} loading="lazy" />
                  </div>
                  <div className="svcBody">
                    <div className="svcTitle">{it.title}</div>
                    <div className="svcText">{it.text}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks t={t} lang={lang} />
      <Proof t={t} lang={lang} />
      <CoverageMap t={t} lang={lang} />

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="sectionHead"><h2 className="h2">{t.faq.title}</h2></div>
          <FAQ items={t.faq.items} />
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <div className="ctaBandTitle">{lang === "es" ? "¿Tienes fechas y ciudad?" : "Have dates and city?"}</div>
              <div className="ctaBandText">{lang === "es" ? "Respondo en 24h con viabilidad." : "Reply within 24h with feasibility."}</div>
            </div>
            <Link className="btn" href="/contact">{lang === "es" ? "Enviar solicitud" : "Send request"}</Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
