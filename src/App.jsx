import { useMemo, useState } from "react";
import "./App.css";
import logo from "./assets/moveops-logo.png";


function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Card({ title, children, footer }) {
  return (
    <div className="card">
      <div className="cardHd">
        <h3>{title}</h3>
      </div>
      <div className="cardBd">{children}</div>
      {footer ? <div className="cardFt">{footer}</div> : null}
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="sectionHd">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className={`faqItem ${open ? "open" : ""}`}
      onClick={() => setOpen((v) => !v)}
      type="button"
      aria-expanded={open}
    >
      <div className="faqQ">
        <span>{q}</span>
        <span className="faqIcon" aria-hidden="true">
          {open ? "–" : "+"}
        </span>
      </div>
      <div className="faqA" role="region">
        {a}
      </div>
    </button>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "Agency / Operations",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.message) {
      setStatus({
        type: "error",
        msg: "Please add your email and a short message.",
      });
      return;
    }

    const subject = encodeURIComponent("MoveOps — Spain execution enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nRole: ${form.role}\n\nMessage:\n${form.message}`
    );

    setStatus({ type: "success", msg: "Opening your email client…" });
    window.location.href = `mailto:hello@moveops.services?subject=${subject}&body=${body}`;
  }

  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
<a className="brand" href="#top" aria-label="Home">
  <img className="brandLogo" src={logo} alt="MOVE OPS. SERVICES" />
  <span className="brandTag">Spain rollout execution</span>
</a>



          <nav className="navLinks" aria-label="Primary">
            <a href="#services">What we do</a>
            <a href="#approach">How it starts</a>
            <a href="#work">Examples</a>
            <a href="#faq">FAQ</a>
            <a className="btn btnSmall" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="kicker">
                <Badge>Spain-based</Badge>
                <span className="kickerDot" aria-hidden="true">
                  •
                </span>
                <Badge>White-label</Badge>
                <span className="kickerDot" aria-hidden="true">
                  •
                </span>
                <Badge>Pilot first</Badge>
              </div>

              <h1 className="h1">
                 We execute in-store rollouts and exhibition builds in Spain — starting with a small pilot.
              </h1>

              <p className="sub">
                Agencies and brands use us as their local Spain partner for <strong>retail installs</strong> and <strong>trade-fair stands</strong>.
                We plan the scope, coordinate production and logistics, manage on-site teams,
                and deliver structured photo reports. Most partners start with a <strong>pilot</strong>,
                then scale once the workflow is proven.
              </p>

              <div className="heroCtas">
                <a className="btn" href="#contact">
                  Start a pilot
                </a>
                <a className="btn btnGhost" href="#approach">
                  See the process
                </a>
              </div>

              <div className="heroMeta">
                <Pill>One point of contact</Pill>
                <Pill>Fast replies (English)</Pill>
                <Pill>Photos + notes</Pill>
                <Pill>Issues fixed</Pill>
              </div>

              <div className="micro">
                <strong>Typical path:</strong> Pilot (1–5) → Rollout (10–30) → Nationwide (if needed).
              </div>
            </div>

            <div className="heroPanel" role="img" aria-label="Pilot to rollout dashboard mock">
              <div className="panelTop">
                <div className="panelTitle">Pilot plan (example)</div>
                <div className="panelChips">
                  <span className="chip">Plan</span>
                  <span className="chip">Execute</span>
                  <span className="chip">Report</span>
                </div>
              </div>

              <div className="panelGrid">
                <div className="metric">
                  <div className="metricLabel">Pilot stores</div>
                  <div className="metricValue">1–5</div>
                </div>
                <div className="metric">
                  <div className="metricLabel">Typical lead time</div>
                  <div className="metricValue">7–15 days</div>
                </div>
                <div className="metric">
                  <div className="metricLabel">Reporting</div>
                  <div className="metricValue">24–48h</div>
                </div>
                <div className="metric">
                  <div className="metricLabel">Working model</div>
                  <div className="metricValue">White-label</div>
                </div>
              </div>

              <div className="panelList">
                <div className="listRow">
                  <span className="dot ok" /> Confirm scope + store list
                  <span className="right">Day 0</span>
                </div>
                <div className="listRow">
                  <span className="dot ok" /> Check materials + access
                  <span className="right">Day 1–2</span>
                </div>
                <div className="listRow">
                  <span className="dot ok" /> Execute installs
                  <span className="right">Day 3–10</span>
                </div>
                <div className="listRow">
                  <span className="dot ok" /> Fix issues (if any)
                  <span className="right">Same week</span>
                </div>
                <div className="listRow">
                  <span className="dot ok" /> Photo report delivered
                  <span className="right">24–48h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="strip">
          <div className="container stripInner">
            <div className="stripItem">
              <div className="stripNum">1</div>
              <div className="stripTxt">
                <strong>Start small</strong>
                <div>Pilot first to prove quality and workflow.</div>
              </div>
            </div>
            <div className="stripItem">
              <div className="stripNum">2</div>
              <div className="stripTxt">
                <strong>One owner for Spain</strong>
                <div>One person accountable for delivery and reporting.</div>
              </div>
            </div>
            <div className="stripItem">
              <div className="stripNum">3</div>
              <div className="stripTxt">
                <strong>Clear reporting</strong>
                <div>Photos + notes per store, delivered fast.</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <SectionHeader
              title="What we do"
              subtitle="We execute store projects in Spain — pilots, partial rollouts or nationwide coverage."
            />

            <div className="grid3">
              <Card
                title="Plan the job"
                footer={<span className="muted">Scope • risks • store constraints • schedule</span>}
              >
                <ul className="bullets">
<li>Review artwork, specs and production requirements</li>
<li>Confirm access, site constraints (stores or venues) and install method</li>
<li>Lock dates, responsibilities and escalation path</li>
                </ul>
              </Card>

              <Card
                title="Coordinate production & delivery"
                footer={<span className="muted">Print • build • QC • packing • delivery</span>}
              >
                <ul className="bullets">
                  <li>Make sure materials arrive install-ready</li>
                  <li>Coordinate deliveries per store type</li>
                  <li>Avoid on-site surprises (missing parts, wrong sizes)</li>
                </ul>
              </Card>

              <Card
                title="Install + photo report"
                footer={<span className="muted">White-label teams • fixes • reporting</span>}
              >
                <ul className="bullets">
                  <li>Install / remove / refresh campaigns</li>
                  <li>Resolve issues on site where possible</li>
                  <li>Photo packs + notes within 24–48h</li>
                </ul>
              </Card>
            </div>

            <div className="callout">
              <div>
                <strong>Want to test first?</strong> Send a store list and scope — we’ll propose a pilot plan.
              </div>
              <a className="btn btnSmall" href="#contact">
                Request a pilot plan
              </a>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="section sectionAlt">
          <div className="container">
            <SectionHeader
              title="How it starts (Pilot → Scale)"
             subtitle="How agencies and brands onboard a local Spain partner for retail rollouts and exhibitions."
            />

            <div className="timeline">
              <div className="tlItem">
                <div className="tlNum">01</div>
                <div className="tlBody">
                  <h3>Pilot (1–5 stores)</h3>
                  <p>
                    We run a small set of stores to prove quality, speed and reporting.
                    You get photos, notes, and a list of improvements for scaling.
                  </p>
                  <div className="tags">
                    <Pill>Fast setup</Pill>
                    <Pill>Clear proof</Pill>
                    <Pill>Low risk</Pill>
                  </div>
                </div>
              </div>

              <div className="tlItem">
                <div className="tlNum">02</div>
                <div className="tlBody">
                  <h3>Scale (rollout or event build)</h3>
                  <p>
                    We standardise delivery: one schedule, one reporting format and one escalation path.
  Whether it’s 10–30 stores or a venue build, your team spends less time coordinating.
                  </p>
                  <div className="tags">
                    <Pill>One status</Pill>
                    <Pill>Consistent QA</Pill>
                    <Pill>Issue handling</Pill>
                  </div>
                </div>
              </div>

              <div className="tlItem">
                <div className="tlNum">03</div>
                <div className="tlBody">
                  <h3>Ongoing coverage (when needed)</h3>
                  <p>
                    After successful rollouts, we can cover Spain end-to-end under NDA,
                    acting as your execution owner for the country.
                  </p>
                  <div className="tags">
                    <Pill>Nationwide</Pill>
                    <Pill>White-label</Pill>
                    <Pill>NDA-ready</Pill>
                  </div>
                </div>
              </div>
            </div>

            <div className="split">
              <div className="splitBox">
                <h3>What you get</h3>
                <ul className="bullets">
                  <li>One contact for Spain</li>
                  <li>One reporting format across stores</li>
                  <li>Less time chasing suppliers</li>
                  <li>Clear close-out per store</li>
                </ul>
              </div>
              <div className="splitBox">
                <h3>What we take responsibility for</h3>
                <ul className="bullets">
                  <li>Planning, constraints and access</li>
                  <li>On-site delivery and issue resolution</li>
                  <li>Quality checks and compliance</li>
                  <li>Photo reports and final notes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container">
            <SectionHeader
              title="Examples (confidential)"
              subtitle="We don’t publish client brands. These are typical scopes we deliver across retail and events."
            />

            <div className="grid3">
              <Card
                title="Pilot: window + POS refresh"
                footer={<span className="muted">1–5 stores • photos + close-out</span>}
              >
                <ul className="bullets">
                  <li>Window vinyls, posters, shelf messaging</li>
                  <li>Remove previous campaign</li>
                  <li>Photo report per store</li>
                </ul>
              </Card>

              <Card
                title="Exhibition: stand build & on-site coordination"
                footer={<span className="muted">Venue • build • setup • fix-ups</span>}
              >
                <ul className="bullets">
                  <li>Stand setup, branding and last-minute adjustments</li>
                  <li>Single point of contact on-site</li>
                  <li>Photo close-out for client reporting</li>
                </ul>
              </Card>

              <Card
                title="Ongoing: maintenance and replacements"
                footer={<span className="muted">Multi-city • repeat visits</span>}
              >
                <ul className="bullets">
                  <li>Replace damaged items and refresh POS</li>
                  <li>Store-by-store fixes</li>
                  <li>Weekly status (if required)</li>
                </ul>
              </Card>
            </div>

            <div className="ctaBar">
              <div>
                <strong>Need a quick Spain pilot?</strong>
                <div className="muted">
                  Send store count, locations and dates. We’ll reply with a simple plan.
                </div>
              </div>
              <a className="btn" href="#contact">
                Request feasibility
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section sectionAlt">
          <div className="container">
            <SectionHeader
              title="FAQ"
              subtitle="Straight answers to common pilot questions."
            />

            <div className="faq">
              <FAQItem
                q="Do you support trade fairs and exhibition stands?"
                a={
                  <p>
                    Yes. We can coordinate production, logistics and on-site setup in Spain, including
                    stand branding and last-minute fixes. We can also work white-label under NDA.
                  </p>
                }
              />
              <FAQItem
                q="Do you only take big rollouts?"
                a={
                  <p>
                    No. Most partnerships start with a pilot (1–5 stores). If the pilot is
                    successful, we scale to bigger rollouts.
                  </p>
                }
              />
              <FAQItem
                q="Can you work white-label and under NDA?"
                a={
                  <p>
                    Yes. We can work white-label and under NDA. We do not publish brand names
                    or store images publicly.
                  </p>
                }
              />
              <FAQItem
                q="Do you cover all of Spain?"
                a={
                  <p>
                    Yes. We can start with one city/region for the pilot, then expand nationwide.
                  </p>
                }
              />
              <FAQItem
                q="What exactly do you deliver after installs?"
                a={
                  <p>
                    A structured photo pack per store plus notes: what was installed, any issues,
                    and what was fixed or scheduled.
                  </p>
                }
              />
              <FAQItem
                q="Do you also manage printing/production?"
                a={
                  <p>
                    Yes, when needed. We coordinate printing/fabrication and make sure materials
                    arrive ready to install.
                  </p>
                }
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <SectionHeader
              title="Contact"
              subtitle="Tell us your store rollout or event details. We’ll reply with a clear pilot plan."
            />

            <div className="contactGrid">
              <div className="contactCard">
                <h3>What we need from you</h3>
                <p className="muted">
                  If you can, include store locations and a short scope. We’ll respond with
                  feasibility, timing and next steps.
                </p>

                <div className="contactList">
                  <div className="contactRow">
                    <span className="contactKey">Email</span>
                    <span className="contactVal">hello@moveops.services</span>
                  </div>
                  <div className="contactRow">
                    <span className="contactKey">Location</span>
                    <span className="contactVal">Spain (nationwide)</span>
                  </div>
                  <div className="contactRow">
                    <span className="contactKey">Model</span>
                    <span className="contactVal">White-label • NDA-ready</span>
                  </div>
                </div>

                <div className="miniBox">
                  <strong>Send this</strong>
                  <ul className="bullets">
                    <li>Retail rollout or event/venue name</li>
                    <li>Store list (city + count)</li>
                    <li>What to install (window / POS / display)</li>
                    <li>Target dates</li>
                    <li>Any access constraints</li>
                  </ul>
                </div>
              </div>

              <form className="form" onSubmit={onSubmit}>
                <div className="row2">
                  <label className="field">
                    <span>Name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="field">
                    <span>Email *</span>
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
                    <span>Company</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Agency / Brand"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="field">
                    <span>Role</span>
                    <select name="role" value={form.role} onChange={onChange}>
                      <option>Agency / Operations</option>
                      <option>Production / Procurement</option>
                      <option>Project Management</option>
                      <option>Brand / Retail</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>Message *</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Example: Retail pilot (3 stores, Madrid+Barcelona): window vinyl + POS refresh, dates, photo report. Or Event build: venue/city, stand size, required elements, build dates."
                    rows={6}
                    required
                  />
                </label>

                <button className="btn" type="submit">
                  Send
                </button>

                {status.type !== "idle" ? (
                  <div
                    className={`formStatus ${status.type === "error" ? "err" : "ok"}`}
                    role="status"
                  >
                    {status.msg}
                  </div>
                ) : null}

                <p className="fine">
                  We can work under NDA and operate white-label. We don’t publish client brands publicly.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footerInner">
            <div className="footLeft">
<div className="footBrand">
  <img className="footLogo" src={logo} alt="MOVE OPS. SERVICES" />
  <div>
    <div className="footSub">Spain rollout execution</div>
  </div>
</div>

              <div className="muted footCopy">
                Pilot-first partner for store projects in Spain. <span className="sep">•</span> © {year}
              </div>
            </div>

            <div className="footRight">
              <a href="#services">What we do</a>
              <a href="#approach">How it starts</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
