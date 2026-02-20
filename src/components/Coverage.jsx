export default function Coverage({ title, subtitle, chips }) {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{title}</h2>
          <p className="subtle">{subtitle}</p>
        </div>
<div className="chipRow">
  {chips.map((c) => (
    <span key={c} className="chip">{c}</span>
  ))}
</div>
      </div>
    </section>
  );
}
