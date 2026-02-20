import { useOutletContext, Link } from "react-router-dom";
import { useSeo } from "../seo/useSeo.js";
import Hero from "../components/Hero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Proof from "../components/Proof.jsx";
import Coverage from "../components/CoverageMap.jsx";
import FAQ from "../components/FAQ.jsx";


import retailImg from "../assets/services/retail.jpg";
import standsImg from "../assets/services/stand.jpeg";
import rolloutsImg from "../assets/services/rollouts.jpeg";




export default function StandInstallationSpain() {
  const { lang, t } = useOutletContext();

  useSeo({
    title: t.stands.seoTitle,
    description: t.stands.seoDesc,
    canonical: "https://moveops.services/exhibition-stand-installation-spain",
  });

  return (
    <>
      <Hero
        title={t.stands.h1}
        sub={t.stands.sub}
        pills={t.common.pills}
        stats={t.common.stats}
        primaryCta={lang === "es" ? "Pedir viabilidad" : "Check feasibility"}
        primaryHref="/contact"
        secondaryCta={lang === "es" ? "Partner instalación" : "Install partner"}
        secondaryHref="/spain-installation-partner"
      />

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
              <div className="ctaBandTitle">{lang === "es" ? "IFEMA o Fira: build support" : "IFEMA or Fira: build support"}</div>
              <div className="ctaBandText">{lang === "es" ? "Envíame plano, fechas y horarios de acceso." : "Send plan, dates and access slots."}</div>
            </div>
            <Link className="btn" to="/contact">{lang === "es" ? "Solicitar" : "Request"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
