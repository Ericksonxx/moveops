import { useOutletContext } from "react-router-dom";

export default function ServiceCards({ title, items, images = [] }) {
  const ctx = useOutletContext();
  const t = ctx?.t;

  const data = items ?? t?.home?.blocks ?? [];
  const finalTitle = title ?? "Services";

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{finalTitle}</h2>
        </div>

        <div className="svcGrid">
          {data.map((it, idx) => (
            <article className="svcCard" key={`${it.title}-${idx}`}>
              <div className="svcMedia">
                {images[idx] ? (
                  <img src={images[idx].src} alt={images[idx].alt ?? it.title} loading="lazy" />
                ) : null}
              </div>

              <div className="svcBody">
                <div className="svcTitle">{it.title}</div>
                <div className="svcText">{it.text}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
