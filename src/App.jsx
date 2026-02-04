// App.jsx
import { useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/moveops-logo.png";
import { Analytics } from "@vercel/analytics/next"

/* ---------- Small UI ---------- */
function LangToggle({ lang, onToggle }) {
  return (
    <button className="langBtn" type="button" onClick={onToggle} aria-label="Change language">
      <span className="langPill">{lang === "es" ? "ES" : "EN"}</span>
      <span className="langArrow">↔</span>
      <span className="langPill">{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="sh">
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <h2 className="h2">{title}</h2>
      {subtitle ? <p className="sub">{subtitle}</p> : null}
    </div>
  );
}

function ValueCard({ n, title, text }) {
  return (
    <div className="vCard">
      <div className="vN">{n}</div>
      <div className="vBody">
        <div className="vTitle">{title}</div>
        <div className="vText">{text}</div>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, text }) {
  return (
    <div className="tItem">
      <div className="tLeft">
        <div className="tYear">{year}</div>
      </div>
      <div className="tRight">
        <div className="tTitle">{title}</div>
        <div className="tText">{text}</div>
      </div>
    </div>
  );
}

function LocationCard({ city, desc, bullets }) {
  return (
    <div className="locCard">
      <div className="locCity">{city}</div>
      <div className="locDesc">{desc}</div>
      <ul className="locList">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button className={`faqItem ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} type="button">
      <div className="faqQ">
        <span>{q}</span>
        <span className="faqPlus" aria-hidden="true">
          {open ? "–" : "+"}
        </span>
      </div>
      <div className="faqA" role="region">
        {a}
      </div>
    </button>
  );
}

/* ---------- Copy ES/EN ---------- */

const i18n = {
  es: {
    nav: {
      who: "Quiénes somos",
      story: "Cómo trabajamos",
      values: "Valores",
      where: "Cobertura",
      faq: "FAQ",
      contact: "Contacto",
    },
    hero: {
      kicker: "Ejecución en España • Stands • Branding • Retail",
      h1: "Ejecución real en España para stands, branding y tiendas.",
      p: (
        <>
          Planificamos, coordinamos y montamos. <strong>Un responsable</strong>.{" "}
          <strong>Plazos claros</strong>. <strong>Evidencia</strong> con fotos y notas.
          <br />
          <span className="mutedInline">Empieza con un piloto y escala cuando el flujo está validado.</span>
        </>
      ),
      pills: ["Piloto primero", "Un responsable", "Fotos + notas", "NDA / white-label", "Cobertura nacional"],
      cta1: "Pedir viabilidad",
      cta2: "Ver el proceso",
      snapTitle: "Resumen operativo",
      snap: [
        ["Piloto", "1–3 stands / sedes"],
        ["Plazo típico", "7–15 días"],
        ["Reporte", "24–48h"],
        ["Modelo", "Un único contacto"],
      ],
    },
    who: {
      kicker: "¿Quiénes somos?",
      title: "Montajes que se entregan: a tiempo, sin sorpresas y con cierre documentado.",
      subtitle:
        "Para organizadores de ferias/eventos y empresas expositoras. Centralizamos coordinación y cerramos cada trabajo con un reporte claro (fotos + notas).",
      bulletsTitle: "Qué asumimos nosotros",
      bullets: [
        "Planificación y checklist (accesos, normativa, slots, riesgos)",
        "Producción/impresión cuando aplica (coordinación y control previo)",
        "Logística y entregas en recinto o tienda (ventanas y condiciones)",
        "Montaje, retoques y resolución de incidencias onsite",
        "Cierre estructurado: fotos + notas para tu equipo/cliente",
      ],
    },
    story: {
      kicker: "Cómo trabajamos",
      title: "Piloto primero. Luego escala (un método repetible).",
      subtitle:
        "Estandarizamos la ejecución para que no dependas de improvisación en cada feria o instalación.",
      items: [
        {
          year: "01",
          title: "Piloto (1–3 stands / sedes)",
          text: "Validamos tiempos, coordinación con el recinto, calidad y formato de reporte. Detectamos mejoras para escalar.",
        },
        {
          year: "02",
          title: "Entrega de evento / instalación",
          text: "Un calendario, un responsable y un reporte estándar. Menos coordinación para tu equipo y menos fricción onsite.",
        },
        {
          year: "03",
          title: "Cobertura continua (si encaja)",
          text: "Después de varias entregas, operamos de forma recurrente bajo NDA y, si lo necesitas, en white-label.",
        },
      ],
    },
    values: {
      kicker: "Nuestros valores",
      title: "Orientados a resultado",
      subtitle: "Sin humo: planificación, control previo y cierre con evidencia para reducir retrabajo.",
      items: [
        { n: "01", title: "Propiedad", text: "Un responsable de principio a fin." },
        { n: "02", title: "Claridad", text: "Fechas, alcance y responsabilidades por escrito." },
        { n: "03", title: "Control previo", text: "Validamos accesos, normativa y materiales antes del montaje." },
        { n: "04", title: "Resolución", text: "Incidencias onsite: se documentan y se resuelven." },
        { n: "05", title: "Reporting", text: "Fotos + notas útiles para tu equipo/cliente." },
        { n: "06", title: "Escalabilidad", text: "Mismo flujo para una sede o multi-ciudad." },
      ],
    },
    where: {
      kicker: "Cobertura",
      title: "Ejecución en España (escalable por regiones)",
      subtitle: "Podemos arrancar en una ciudad/recinto y escalar a cobertura nacional manteniendo el mismo formato de trabajo y reporte.",
      cards: [
        {
          city: "Madrid",
          desc: "Soporte para IFEMA y recintos/eventos en la Comunidad de Madrid.",
          bullets: ["Entregas por slot", "Montaje y fix-ups", "Reporte 24–48h"],
        },
        {
          city: "Barcelona",
          desc: "Soporte para Fira Barcelona y eventos corporativos en Cataluña.",
          bullets: ["Montaje de stand + gráfica", "Validación de accesos y normativa", "Cierre con fotos"],
        },
        {
          city: "España (multi-ciudad)",
          desc: "Ferias, campañas y proyectos en varias ciudades con un flujo estándar.",
          bullets: ["Un único formato de reporte", "Un responsable de ejecución", "Escalado por fases"],
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Trabajáis con organizadores de ferias?",
          a: <p>Sí. Damos soporte de ejecución a expositores, con coordinación onsite y cierre con reporte.</p>,
        },
        {
          q: "¿También hacéis tiendas (retail) además de ferias?",
          a: <p>Sí. Ejecutamos instalaciones en tienda y cambios de branding con el mismo enfoque: planificación + montaje + evidencia.</p>,
        },
        {
          q: "¿Podéis gestionar producción/impresión?",
          a: <p>Sí, cuando aplica. Coordinamos fabricación y verificamos que el material llegue listo para montar.</p>,
        },
        { q: "¿Operáis en white-label y bajo NDA?", a: <p>Sí. No publicamos marcas ni proyectos.</p> },
        { q: "¿Qué entregáis al final?", a: <p>Fotos + notas: estado final, incidencias y acciones realizadas.</p> },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Cuéntanos tu stand, branding o instalación en tienda",
      subtitle: "Rellena el formulario y te respondemos con viabilidad, timing y un plan simple (piloto si encaja).",
      form: {
        name: "Nombre",
        email: "Email *",
        company: "Empresa",
        role: "Soy…",
        roles: ["Organizador de feria/evento", "Empresa expositora", "Agencia", "Otro"],
        message: "Mensaje *",
        send: "Enviar solicitud",
        ok: "Enviando…",
        err: "Añade tu email y un mensaje breve.",
        fine: "NDA / white-label disponible. No publicamos proyectos.",
      },
      side: {
        title: "Incluye (si puedes)",
        bullets: [
          "Feria/recinto o tienda + ciudad",
          "Fechas de montaje/desmontaje",
          "Tamaño del stand / alcance del branding",
          "Qué está producido vs por producir",
          "Restricciones de acceso/horarios",
        ],
        email: "hello@moveops.services",
      },
    },
    footer: "MoveOps — Ejecución real en España para stands, branding y retail",
  },

  en: {
    nav: {
      who: "About",
      story: "How we work",
      values: "Values",
      where: "Coverage",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      kicker: "Spain execution • Stands • Branding • Retail",
      h1: "Real execution in Spain for stands, branding and retail.",
      p: (
        <>
          We plan, coordinate and build. <strong>One accountable owner</strong>.{" "}
          <strong>Clear timelines</strong>. <strong>Proof</strong> with photos and notes.
          <br />
          <span className="mutedInline">Start with a pilot and scale once the workflow is proven.</span>
        </>
      ),
      pills: ["Pilot first", "One accountable owner", "Photos + notes", "NDA / white-label", "Nationwide"],
      cta1: "Check feasibility",
      cta2: "See the process",
      snapTitle: "Operational snapshot",
      snap: [
        ["Pilot", "1–3 stands / sites"],
        ["Typical lead time", "7–15 days"],
        ["Reporting", "24–48h"],
        ["Model", "One point of contact"],
      ],
    },
    who: {
      kicker: "About us",
      title: "Builds that get delivered: on time, no surprises, documented close-out.",
      subtitle:
        "For event organizers and exhibiting companies across sectors. We centralize coordination and close each job with a clear report (photos + notes).",
      bulletsTitle: "What we take on",
      bullets: [
        "Planning & checklist (access, venue rules, time slots, risks)",
        "Production/printing when needed (coordination and pre-checks)",
        "Venue/store deliveries (slots and requirements)",
        "Build, finishing and onsite issue handling",
        "Structured close-out: photos + notes for your team/client",
      ],
    },
    story: {
      kicker: "How we work",
      title: "Pilot first. Then scale (repeatable method).",
      subtitle:
        "We standardize delivery so you don’t rely on improvisation at each fair or install.",
      items: [
        {
          year: "01",
          title: "Pilot (1–3 stands / sites)",
          text: "Validate timing, venue coordination, quality and reporting format. Capture improvements for scaling.",
        },
        {
          year: "02",
          title: "Event / installation delivery",
          text: "One schedule, one owner, one standard report. Less coordination for your team and less onsite friction.",
        },
        {
          year: "03",
          title: "Ongoing coverage (if it fits)",
          text: "After successful deliveries, we can operate under NDA and, if needed, white-label.",
        },
      ],
    },
    values: {
      kicker: "Values",
      title: "Delivery-first",
      subtitle: "No fluff: planning, pre-checks, and evidence-based close-out to reduce rework.",
      items: [
        { n: "01", title: "Ownership", text: "One owner end-to-end." },
        { n: "02", title: "Clarity", text: "Dates, scope and responsibilities in writing." },
        { n: "03", title: "Pre-checks", text: "We validate access, rules and materials before build day." },
        { n: "04", title: "Resolution", text: "Onsite issues are documented and resolved." },
        { n: "05", title: "Reporting", text: "Photos + notes your team/client can use." },
        { n: "06", title: "Scalability", text: "Same workflow for one site or multi-city." },
      ],
    },
    where: {
      kicker: "Coverage",
      title: "Execution across Spain (scalable by region)",
      subtitle: "Start in one city/venue and scale to nationwide coverage while keeping the same workflow and reporting.",
      cards: [
        { city: "Madrid", desc: "Support for IFEMA and Madrid-region venues.", bullets: ["Time-slot deliveries", "Build & fix-ups", "24–48h reporting"] },
        { city: "Barcelona", desc: "Support for Fira Barcelona and corporate events in Catalonia.", bullets: ["Stand build + graphics", "Access & rules validation", "Photo close-out"] },
        { city: "Spain (multi-city)", desc: "Multi-city fairs/rollouts with a standard workflow.", bullets: ["One reporting format", "One execution owner", "Phase-based scaling"] },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently asked",
      items: [
        { q: "Do you work with event organizers?", a: <p>Yes. We support exhibitors with onsite coordination and documented close-out reporting.</p> },
        { q: "Do you cover retail installs as well?", a: <p>Yes. Store installs and branding updates with the same approach: planning + build + proof.</p> },
        { q: "Can you manage production/printing?", a: <p>Yes when required. We coordinate fabrication and ensure it arrives install-ready.</p> },
        { q: "White-label and NDA?", a: <p>Yes. We don’t publish brands or projects.</p> },
        { q: "What do you deliver after the build?", a: <p>Photos + notes: final status, issues, and actions taken.</p> },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Tell us about your stand, branding or retail installation",
      subtitle: "Send details. We reply with feasibility, timing and a simple plan (pilot if it fits).",
      form: {
        name: "Name",
        email: "Email *",
        company: "Company",
        role: "I am…",
        roles: ["Organizer", "Exhibiting company", "Agency", "Other"],
        message: "Message *",
        send: "Send request",
        ok: "Sending…",
        err: "Please add your email and a short message.",
        fine: "NDA / white-label available. We don’t publish projects.",
      },
      side: {
        title: "Include (if you can)",
        bullets: ["Fair/venue or store + city", "Build/dismantle dates", "Stand size / branding scope", "Produced vs to be produced", "Access/time slot constraints"],
        email: "hello@moveops.services",
      },
    },
    footer: "MoveOps — Real execution in Spain for stands, branding and retail",
  },
};


export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [lang, setLang] = useState("es");
  const t = i18n[lang];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: t.contact.form.roles[0],
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function toggleLang() {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    setForm((f) => ({ ...f, role: i18n[next].contact.form.roles[0] }));
    setStatus({ type: "idle", msg: "" });
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

async function onSubmit(e) {
  e.preventDefault();
  setStatus({ type: "idle", msg: "" });

  if (!form.email || !form.message) {
    setStatus({ type: "error", msg: lang === "es" ? "Añade tu email y un mensaje." : "Add your email and a message." });
    return;
  }

  try {
    setStatus({ type: "success", msg: lang === "es" ? "Enviando…" : "Sending…" });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, lang }),
    });

    if (!res.ok) throw new Error("Request failed");

    setStatus({ type: "success", msg: lang === "es" ? "Mensaje enviado. Te responderemos pronto." : "Sent. We’ll reply soon." });
    setForm((f) => ({ ...f, message: "" }));
  } catch {
    setStatus({ type: "error", msg: lang === "es" ? "No se pudo enviar. Prueba de nuevo o escribe a hello@moveops.services" : "Send failed. Try again or email hello@moveops.services" });
  }
}


  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <a className="brand" href="#top" aria-label="Home">
            <img className="brandLogo" src={logo} alt="MOVE OPS. SERVICES" />
          </a>

          <nav className="navLinks" aria-label="Primary">
            <a href="#who">{t.nav.who}</a>
            <a href="#story">{t.nav.story}</a>
            <a href="#values">{t.nav.values}</a>
            <a href="#where">{t.nav.where}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a className="navCta" href="#contact">
              {t.nav.contact}
            </a>
            <LangToggle lang={lang} onToggle={toggleLang} />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO (similar vibe: big title + visual panel + quick stats) */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="heroKicker">{t.hero.kicker}</div>
              <h1 className="h1">{t.hero.h1}</h1>
              <p className="p">{t.hero.p}</p>

              <div className="pillRow">
                {t.hero.pills.map((x) => (
                  <span className="pill" key={x}>
                    {x}
                  </span>
                ))}
              </div>

              <div className="ctaRow">
                <a className="btn" href="#contact">
                  {t.hero.cta1}
                </a>
                <a className="btn btnGhost" href="#story">
                  {t.hero.cta2}
                </a>
              </div>
            </div>

            <div className="heroRight">
              <div className="snap">
                <div className="snapHd">{t.hero.snapTitle}</div>
                <div className="snapGrid">
                  {t.hero.snap.map(([k, v]) => (
                    <div className="snapCell" key={k}>
                      <div className="snapV">{v}</div>
                      <div className="snapK">{k}</div>
                    </div>
                  ))}
                </div>

                <div className="snapHint">
                  {lang === "es"
                    ? "Ideal para organizadores que necesitan ejecución fiable y expositores que no quieren coordinar varios proveedores."
                    : "Ideal for organizers needing reliable execution and exhibitors who don’t want to manage multiple vendors."}
                </div>
              </div>

              <div className="heroVisual" aria-hidden="true">
                <div className="visBox">
                  <div className="visTitle">{lang === "es" ? "De brief a stand listo" : "From brief to ready stand"}</div>
                  <div className="visSteps">
                    <div className="visStep">
                      <span className="dot" /> {lang === "es" ? "Brief + requisitos del recinto" : "Brief + venue requirements"}
                    </div>
                    <div className="visStep">
                      <span className="dot" /> {lang === "es" ? "Producción / logística" : "Production / logistics"}
                    </div>
                    <div className="visStep">
                      <span className="dot" /> {lang === "es" ? "Montaje + retoques" : "Build + fix-ups"}
                    </div>
                    <div className="visStep">
                      <span className="dot" /> {lang === "es" ? "Fotos + cierre" : "Photos + close-out"}
                    </div>
                  </div>
                </div>
                <div className="visAccent" />
              </div>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section id="who" className="section">
          <div className="container">
            <SectionHeader kicker={t.who.kicker} title={t.who.title} subtitle={t.who.subtitle} />
            <div className="whoGrid">
              <div className="whoCard">
                <div className="whoCardTitle">{t.who.bulletsTitle}</div>
                <ul className="ul">
                  {t.who.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="whoAside">
                <div className="asideBox">
                  <div className="asideStrong">{lang === "es" ? "Modelo de trabajo" : "Working model"}</div>
                  <div className="asideText">
                    {lang === "es"
                      ? "White-label y NDA: operamos como tu equipo local en España, sin publicar marcas ni proyectos."
                      : "White-label and NDA: we operate as your Spain team without publishing brands or projects."}
                  </div>
                </div>
                <div className="asideBox">
                  <div className="asideStrong">{lang === "es" ? "Cómo empezamos" : "How we start"}</div>
                  <div className="asideText">
                    {lang === "es"
                      ? "Piloto (1–3). Si encaja, escalamos a eventos recurrentes o multi-ciudad."
                      : "Pilot (1–3). If it fits, we scale to recurring events or multi-city delivery."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY / TIMELINE */}
        <section id="story" className="section sectionAlt">
          <div className="container">
            <SectionHeader kicker={t.story.kicker} title={t.story.title} subtitle={t.story.subtitle} />
            <div className="timeline">
              {t.story.items.map((it) => (
                <TimelineItem key={it.year} year={it.year} title={it.title} text={it.text} />
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" className="section">
          <div className="container">
            <SectionHeader kicker={t.values.kicker} title={t.values.title} subtitle={t.values.subtitle} />
            <div className="valuesGrid">
              {t.values.items.map((x) => (
                <ValueCard key={x.n} n={x.n} title={x.title} text={x.text} />
              ))}
            </div>
          </div>
        </section>

        {/* WHERE */}
        <section id="where" className="section sectionAlt">
          <div className="container">
            <SectionHeader kicker={t.where.kicker} title={t.where.title} subtitle={t.where.subtitle} />
            <div className="locGrid">
              {t.where.cards.map((c) => (
                <LocationCard key={c.city} city={c.city} desc={c.desc} bullets={c.bullets} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container">
            <SectionHeader kicker={t.faq.kicker} title={t.faq.title} />
            <div className="faq">
              {t.faq.items.map((it) => (
                <FAQItem key={it.q} q={it.q} a={it.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section sectionAlt">
          <div className="container">
            <SectionHeader kicker={t.contact.kicker} title={t.contact.title} subtitle={t.contact.subtitle} />

            <div className="contactGrid">
              <div className="contactSide">
                <div className="sideCard">
                  <div className="sideTitle">{t.contact.side.title}</div>
                  <ul className="ul">
                    {t.contact.side.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="sideEmail">
                    <div className="sideLabel">Email</div>
                    <div className="sideValue">{t.contact.side.email}</div>
                  </div>
                </div>
              </div>

              <form className="form" onSubmit={onSubmit}>
                <div className="row2">
                  <label className="field">
                    <span>{t.contact.form.name}</span>
                    <input name="name" value={form.name} onChange={onChange} placeholder={t.contact.form.name} autoComplete="name" />
                  </label>
                  <label className="field">
                    <span>{t.contact.form.email}</span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="row2">
                  <label className="field">
                    <span>{t.contact.form.company}</span>
                    <input name="company" value={form.company} onChange={onChange} placeholder={t.contact.form.company} autoComplete="organization" />
                  </label>
                  <label className="field">
                    <span>{t.contact.form.role}</span>
                    <select name="role" value={form.role} onChange={onChange}>
                      {t.contact.form.roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>{t.contact.form.message}</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={7}
                    required
                    placeholder={
                      lang === "es"
                        ? "Ejemplo: Feria/recinto, ciudad. Stand 6x3. Montaje día X, desmontaje Y. Elementos (gráfica, mobiliario, iluminación). ¿Podéis coordinar entrega y montaje?"
                        : "Example: Venue/city. 6x3 stand. Build date X, dismantle Y. Elements (graphics, furniture, lighting). Can you coordinate delivery and build?"
                    }
                  />
                </label>

                <button className="btn" type="submit">
                  {t.contact.form.send}
                </button>

                {status.type !== "idle" ? (
                  <div className={`status ${status.type === "error" ? "err" : "ok"}`} role="status">
                    {status.msg}
                  </div>
                ) : null}

                <div className="fine">{t.contact.form.fine}</div>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footInner">
            <div className="footLeft">
              <img className="footLogo" src={logo} alt="MOVE OPS. SERVICES" />
              <div className="footText">
                <div className="footTitle">{t.footer}</div>
                <div className="footSub">© {year}</div>
              </div>
            </div>
            <div className="footLinks">
              <a href="#who">{t.nav.who}</a>
              <a href="#where">{t.nav.where}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
