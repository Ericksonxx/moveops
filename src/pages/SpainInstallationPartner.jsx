import { useOutletContext, Link } from "react-router-dom";
import { useSeo } from "../seo/useSeo.js";
import ServiceCards from "../components/ServiceCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Proof from "../components/Proof.jsx";
import Coverage from "../components/CoverageMap.jsx";
import FAQ from "../components/FAQ.jsx";



import retailImg from "../assets/services/retail.jpg";
import standsImg from "../assets/services/stand.jpeg";
import rolloutsImg from "../assets/services/rollouts.jpeg";



export default function SpainInstallationPartner() {
  const { lang, t } = useOutletContext();

  useSeo({
    title: t.install.seoTitle,
    description: t.install.seoDesc,
    canonical: "https://moveops.services/spain-installation-partner",
  });

  return (
    <>
      {/* HERO */}
      <section className="hero heroInstall">
        <div className="container heroGridInstall">
          <div className="heroLeft">
            <h1 className="h1 heroInstallTitle">{t.install.h1}</h1>

            <p className="lead heroInstallLead">{t.install.sub}</p>

            <div className="pillRow">
              {t.common.pills.map((p) => (
                <span className="pill" key={p}>
                  {p}
                </span>
              ))}
            </div>

            <div className="heroDivider" />

            <div className="statsRow heroStatsLarge">
              {t.common.stats.map((s) => (
                <div key={s.k}>
                  <div className="statV">{s.v}</div>
                  <div className="statK">{s.k}</div>
                </div>
              ))}
            </div>

            <div className="heroCtas">
              <Link className="btn" to="/contact">
                {lang === "es" ? "Pedir viabilidad" : "Check feasibility"}
              </Link>
              <Link className="btn btnGhost" to="/exhibition-stand-installation-spain">
                {lang === "es" ? "Soporte stands" : "Stand build support"}
              </Link>
            </div>
          </div>

          <div className="heroRight">
            <div className="installBox">
              <div className="installBoxHead">
                <div className="installBoxTitle">{lang === "es" ? "Deliverable estándar" : "Standard deliverable"}</div>
                <div className="installBoxHint">
                  {lang === "es"
                    ? "White-label / NDA. Pensado para agencias UK/NL/DE con proyectos en Iberia."
                    : "White-label / NDA. Built for UK/NL/DE agencies delivering in Iberia."}
                </div>
              </div>

              <ul className="installList">
                <li>{lang === "es" ? "Checks de accesos y slots" : "Access & slot checks"}</li>
                <li>{lang === "es" ? "Supervisión onsite" : "On-site supervision"}</li>
                <li>{lang === "es" ? "Fotos + notas + punch list" : "Photos + notes + punch list"}</li>
                <li>{lang === "es" ? "Cierre en 24–48h" : "Close-out in 24–48h"}</li>
              </ul>

              <div className="installBoxCtas">
                <Link className="btn btnGhost btnSmall" to="/contact">
                  {lang === "es" ? "Enviar detalles" : "Send details"}
                </Link>
                <Link className="btn btnSmall" to="/contact">
                  {lang === "es" ? "Respuesta en 24h" : "Reply in 24h"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split2">
            <div className="infoCard">
              <div className="infoHead">
                <div className="infoIcon" aria-hidden="true">
                  ◎
                </div>
                <div>
                  <div className="infoTitle">{t.install.whoFor.title}</div>
                  <div className="infoSub">
                    {lang === "es"
                      ? "Para equipos que necesitan ejecución local sin fricción."
                      : "For teams needing local delivery without friction."}
                  </div>
                </div>
              </div>

              <ul className="infoList">
                {t.install.whoFor.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tagRow">
                <span className="tag">{lang === "es" ? "Agencias" : "Agencies"}</span>
                <span className="tag">Trade-only</span>
                <span className="tag">{lang === "es" ? "Marcas" : "Brands"}</span>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoHead">
                <div className="infoIcon" aria-hidden="true">
                  ◈
                </div>
                <div>
                  <div className="infoTitle">{lang === "es" ? "Alcance típico" : "Typical scope"}</div>
                  <div className="infoSub">
                    {lang === "es"
                      ? "Elementos y coordinación que solemos cubrir."
                      : "Typical elements and coordination we cover."}
                  </div>
                </div>
              </div>

              <ul className="infoList">
                <li>{lang === "es" ? "PLV / vinilos / señalética / lightboxes" : "POS / vinyls / signage / lightboxes"}</li>
                <li>{lang === "es" ? "Scheduling + accesos + entregas" : "Scheduling + access + deliveries"}</li>
                <li>{lang === "es" ? "Reporte de cierre para sign-off" : "Close-out report for sign-off"}</li>
              </ul>

              <div className="tagRow">
                <span className="tag">{lang === "es" ? "Instalación" : "Install"}</span>
                <span className="tag">{lang === "es" ? "Coordinación" : "Coordination"}</span>
                <span className="tag">Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

 <ServiceCards
  title="Services"
  images={[
    { src: retailImg, alt: "Retail installs" },
    { src: standsImg, alt: "Stand build support" },
    { src: rolloutsImg, alt: "Multi-city rollouts" },
  ]}
/>
      <HowItWorks title={t.how.title} steps={t.how.steps} />
      <Proof title={t.proof.title} items={t.proof.items} />
      <Coverage title={t.coverage.title} subtitle={t.coverage.subtitle} chips={t.coverage.chips} />
      <FAQ title={t.faq.title} items={t.faq.items} />

      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <div className="ctaBandTitle">{lang === "es" ? "Cuéntame ciudad + fechas" : "Share city + dates"}</div>
              <div className="ctaBandText">
                {lang === "es" ? "Respondo con viabilidad y siguientes pasos." : "I’ll reply with feasibility and next steps."}
              </div>
            </div>
            <Link className="btn" to="/contact">
              {lang === "es" ? "Respuesta en 24h" : "Reply in 24h"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}