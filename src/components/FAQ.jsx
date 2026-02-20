import { useState } from "react";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button className={`faqItem ${open ? "open" : ""}`} type="button" onClick={() => setOpen((v) => !v)}>
      <div className="faqQ">
        <span>{q}</span>
        <span className="faqPlus" aria-hidden="true">{open ? "–" : "+"}</span>
      </div>
      <div className="faqA" role="region">{a}</div>
    </button>
  );
}

export default function FAQ({ title, items }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{title}</h2>
        </div>
        <div className="faq">
          {items.map((it) => (
            <Item key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
