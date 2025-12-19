import { useMemo, useState } from "react";
import "./App.css";

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

    const subject = encodeURIComponent("MoveOps — Pilot request (Spain)");
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
            <span className="brandMark" aria-hidden="true" />
            <span className="brandName">MoveOps</span>
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
                We execute your Spain store projects — starting with a small pilot.
              </h1>

              <p className="sub">
                International agencies use us when they need a reliable partner in Spain.
                We plan the job, coordinate production and logistics, send install teams,
                and deliver photo reports. Most partners start with <strong>1–5 stores</strong>,
                then scale when the workflow is proven.
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
                  <li>Review artwork, materials and instructions</li>
                  <li>Check store access and installation method</li>
                  <li>Confirm dates and responsibilities</li>
                </ul>
              </Card>

              <Card
                title="Coordinate production & delivery"
                footer={<span className="muted">Print • build • QC • packing • store drops</span>}
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
              subtitle="This is the usual way agencies onboard a new Spain partner."
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
                  <h3>Rollout (10–30+ stores)</h3>
                  <p>
                    We standardise the process: one schedule, one reporting format,
                    and one escalation path. Less coordination for your team.
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
                  <h3>Nationwide (when needed)</h3>
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
              subtitle="We don’t publish client brands. These are typical scopes we deliver."
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
                title="Rollout: display installations"
                footer={<span className="muted">10–30 stores • staged schedule</span>}
              >
                <ul className="bullets">
                  <li>Assemble and place display units</li>
                  <li>Adjustments for store constraints</li>
                  <li>One consolidated completion report</li>
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
              subtitle="Tell us the store count and dates. We’ll reply with a clear pilot plan."
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
                    placeholder="Example: Pilot for 3 stores in Madrid + Barcelona. Window vinyl + POS refresh. Target dates: Jan 10–15. Need photo report."
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
                <span className="brandMark" aria-hidden="true" />
                <div>
                  <div className="footName">MoveOps</div>
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
