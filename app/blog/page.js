import Link from "next/link";
import { posts } from "../../lib/posts";

export const metadata = {
  title: "Blog — Retail, Stands y Ejecución en España | MoveOps",
  description: "Guías técnicas sobre montaje de stands, retail rollouts y ejecución de campañas en España.",
  alternates: { canonical: "https://moveops.services/blog" },
};

export default function BlogPage() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container navInner">
          <Link href="/"><img className="brandLogo" src="/moveops-logo.png" alt="MoveOps" /></Link>
          <nav className="navLinks navDesktop">
            <Link href="/">Home</Link>
            <Link href="/contact" className="navCta">Contact</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <h1 className="h2">Retail, Stands & Execution in Spain</h1>
              <p className="subtle">Technical guides for agencies and brands executing projects in Spain.</p>
            </div>
            <div className="blogGrid">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blogCard">
                  {post.cover && (
                    <div className="blogCover">
                      <img src={post.cover} alt={post.coverAlt || post.title} loading="lazy" />
                    </div>
                  )}
                  <div className="blogTag">{post.tag}</div>
                  <div className="blogTitle">{post.title}</div>
                  <div className="blogExcerpt">{post.excerpt}</div>
                  <div className="blogMeta">{post.date} · {post.readTime}</div>
                  <div className="blogReadMore">Read more →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footSimple">
            <div className="footBrand">
              <img className="footLogo" src="/moveops-logo.png" alt="MoveOps" />
              <div className="footMeta"><div className="footTitle">MoveOps</div><div className="footSub">© {new Date().getFullYear()}</div></div>
            </div>
            <div className="footCta">
              <div className="footEmailLabel">Email</div>
              <a className="footEmail" href="mailto:hello@moveops.services">hello@moveops.services</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
