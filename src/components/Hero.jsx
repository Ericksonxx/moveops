import { Link } from "react-router-dom";

export default function Hero({
  title,
  sub,
  pills,
  stats,
  primaryCta,
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref,
  imageSrc,
  imageAlt = "Project photo",
}) {
  return (
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroLeft">
          <h1 className="h1">{title}</h1>
          <p className="lead">{sub}</p>

          <div className="pillRow">
{pills?.slice(0, 3).map((p) => (
  <span key={p} className="pill">{p}</span>
))}
          </div>

          <div className="statsRow">
            {stats?.map((s) => (
              <div key={s.k} className="stat">
                <div className="statV">{s.v}</div>
                <div className="statK">{s.k}</div>
              </div>
            ))}
          </div>

          <div className="ctaRow">
            <Link className="btn" to={primaryHref}>{primaryCta}</Link>
            {secondaryCta ? (
              <Link className="btn btnGhost" to={secondaryHref}>{secondaryCta}</Link>
            ) : null}
          </div>
        </div>

        <div className="heroRight">
          {imageSrc ? (
            <div className="heroMedia" aria-hidden="false">
              <img src={imageSrc} alt={imageAlt} loading="eager" />
            </div>
          ) : (
            <div className="panel">
              <div className="panelTitle">Operational close-out</div>
              <ul className="check">
                <li>Access & slot checks</li>
                <li>On-site supervision</li>
                <li>Photos + notes + punch list</li>
              </ul>
              <div className="panelHint">White-label / NDA supported.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
