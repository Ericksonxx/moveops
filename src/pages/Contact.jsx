import { useOutletContext } from "react-router-dom";
import { useSeo } from "../seo/useSeo.js";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  const { lang, t } = useOutletContext();

  useSeo({
    title: t.contact.seoTitle,
    description: t.contact.seoDesc,
    canonical: "https://moveops.services/contact",
  });

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h1 className="h1">{t.contact.h1}</h1>
          <p className="lead">{t.contact.sub}</p>
        </div>

        <div className="contactGrid">
          <div className="card">
            <div className="cardTitle">{lang === "es" ? "Incluye (si puedes)" : "Include (if you can)"}</div>
            <ul className="check">
              <li>{lang === "es" ? "Ciudad/recinto" : "City/venue"}</li>
              <li>{lang === "es" ? "Fechas de montaje/desmontaje" : "Build/dismantle dates"}</li>
              <li>{lang === "es" ? "Alcance: retail / stand / multi-ciudad" : "Scope: retail / stand / multi-city"}</li>
              <li>{lang === "es" ? "Link a archivos" : "Link to files"}</li>
            </ul>
          </div>

          <div className="card">
            <ContactForm lang={lang} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
