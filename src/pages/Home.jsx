import { useOutletContext, Link } from "react-router-dom";
import { useSeo } from "../seo/useSeo.js";
import Hero from "../components/Hero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Proof from "../components/Proof.jsx";
import CoverageMap from "../components/CoverageMap.jsx";
import heroImg from "../assets/hero-snipes.jpg";


import retailImg from "../assets/services/retail.jpg";
import standsImg from "../assets/services/stand.jpeg";
import rolloutsImg from "../assets/services/rollouts.jpeg";



export default function Home() {
  const { lang, t } = useOutletContext();

  useSeo({
    title: t.home.seoTitle,
    description: t.home.seoDesc,
    canonical: "https://moveops.services/",
  });

  return (
    <>
<Hero
  title={t.home.h1}
  sub={t.home.sub}
  pills={t.common.pills}
  stats={t.common.stats}
  primaryCta={t.home.primaryCta}
  primaryHref="/contact"
  secondaryCta={t.home.secondaryCta}
  secondaryHref="/spain-installation-partner"
  imageSrc={heroImg}
  imageAlt="Retail façade installation example"
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
      <Proof />
      <CoverageMap />
      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <div>
              <div className="ctaBandTitle">{lang === "es" ? "¿Tienes fechas y ciudad?" : "Have dates and city?"}</div>
              <div className="ctaBandText">{lang === "es" ? "Respondo en 24h con viabilidad." : "Reply within 24h with feasibility."}</div>
            </div>
            <Link className="btn" to="/contact">{lang === "es" ? "Enviar solicitud" : "Send request"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
