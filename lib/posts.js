export const posts = [
  {
    slug: "retail-rollout-spain-guide",
    lang: "en",
    tag: "Retail Rollout",
    cover: "/services/retail.jpg",
    coverAlt: "Retail installation example",
    title: "How to Execute a Retail Rollout in Spain: A Practical Guide",
    excerpt: "Opening stores or deploying campaigns across multiple Spanish locations? Here's how to avoid the most common coordination failures.",
    date: "2025-02-10",
    readTime: "6 min read",
    body: `<h2>What is a retail rollout?</h2><p>A retail rollout is the coordinated deployment of store openings, visual merchandising updates, or campaign installations across multiple points of sale — simultaneously or in rapid sequence.</p><p>In Spain, this typically means working across Madrid, Barcelona, Valencia, and secondary cities, each with their own logistics requirements, access windows, and local contractor networks.</p><h2>The biggest risks</h2><ul><li><strong>Access windows missed:</strong> Spanish shopping centres have strict delivery and installation slots.</li><li><strong>No local coordinator:</strong> Managing everything from HQ without a local point of contact creates gaps.</li><li><strong>Materials arriving late:</strong> Production and logistics need to be verified before installation day.</li><li><strong>No structured reporting:</strong> Without photos and notes, you lose visibility and evidence.</li></ul><h2>The pilot-first approach</h2><p>Start with 1–3 sites to validate the workflow before scaling. The pilot phase typically takes 7–15 days from brief to close-out.</p><h2>Working with a white-label partner</h2><p>Many international agencies prefer to work with a local execution partner on a white-label basis — we operate under your brand with no MoveOps branding visible in deliverables.</p>`,
    cta: { title: "Planning a retail rollout in Spain?", text: "Tell us about your project and we'll come back with feasibility, timing and a pilot plan." },
  },
  {
    slug: "montaje-stand-feria-espana",
    lang: "es",
    tag: "Stands y Ferias",
    cover: "/services/stand.jpeg",
    coverAlt: "Montaje de stand en feria",
    title: "Montaje de Stand en Feria: Qué Necesitas Coordinar (y Qué Suele Fallar)",
    excerpt: "IFEMA, Fira Barcelona, ferias sectoriales... El montaje de un stand tiene más variables de las que parece. Aquí tienes la lista real.",
    date: "2025-02-18",
    readTime: "5 min de lectura",
    body: `<h2>Por qué el montaje de stand es más complejo de lo que parece</h2><p>Montar un stand en una feria no es solo aparecer con los materiales el día anterior. Hay normativa del recinto, ventanas de acceso, coordinación con proveedores de producción, gestión de incidencias onsite y un cierre documentado que el cliente necesita.</p><h2>Los puntos donde más falla la ejecución</h2><ul><li><strong>Accesos y slots:</strong> IFEMA y Fira tienen franjas horarias estrictas para carga y descarga.</li><li><strong>Normativa técnica:</strong> Altura máxima, anclajes, requisitos eléctricos — cada recinto tiene su normativa.</li><li><strong>Material que llega tarde:</strong> Si la producción no está verificada antes del montaje, cualquier fallo es urgente.</li><li><strong>Sin responsable único:</strong> Cuando hay varios proveedores sin coordinador, los problemas no tienen dueño claro.</li></ul><h2>El cierre: la parte que más se descuida</h2><p>Fotos del stand terminado, notas de incidencias y confirmación de desmontaje son el mínimo para cualquier proyecto profesional.</p>`,
    cta: { title: "¿Tienes un stand que montar en España?", text: "Cuéntanos el recinto, fechas y alcance. Te respondemos con viabilidad y un plan." },
  },
  {
    slug: "stand-installation-partner-spain",
    lang: "en",
    tag: "Exhibition Stands",
    cover: "/services/rollouts.jpeg",
    coverAlt: "Stand installation partner Spain",
    title: "What to Look for in a Stand Installation Partner in Spain",
    excerpt: "Not all execution partners are the same. Here's what separates reliable stand installation in Spain from the rest.",
    date: "2025-03-01",
    readTime: "5 min read",
    body: `<h2>Why local execution matters</h2><p>International brands and agencies often underestimate how much local knowledge matters when installing stands in Spain. Venue access protocols, local contractor networks, and reporting expectations all vary significantly from other European markets.</p><h2>Key criteria</h2><ul><li><strong>Single point of contact:</strong> One person accountable from brief to close-out.</li><li><strong>Pre-installation verification:</strong> Materials, access slots, and venue rules checked before build day.</li><li><strong>Structured reporting:</strong> Photos and notes at each stage — non-negotiable.</li><li><strong>White-label capability:</strong> If you're an agency, your partner must operate under your brand seamlessly.</li><li><strong>Scalability:</strong> The workflow should be identical for one stand or ten.</li></ul><h2>The pilot model</h2><p>Rather than committing to a full rollout, start with a pilot project — one or two stands. A partner confident in their process will welcome this approach.</p>`,
    cta: { title: "Looking for a stand installation partner in Spain?", text: "Tell us about your project. We'll reply with feasibility, timing and a pilot plan." },
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
