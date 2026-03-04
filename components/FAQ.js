"use client";
import { useState } from "react";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button className={`faqItem ${open ? "open" : ""}`} onClick={() => setOpen((v) => !v)} type="button">
      <div className="faqQ"><span>{q}</span><span>{open ? "–" : "+"}</span></div>
      <div className="faqA">{a}</div>
    </button>
  );
}

export default function FAQ({ items }) {
  return (
    <div className="faq">
      {items.map((it) => <FAQItem key={it.q} q={it.q} a={it.a} />)}
    </div>
  );
}
