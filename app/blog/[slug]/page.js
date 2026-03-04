import Link from "next/link";
import { posts, getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://moveops.services/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="page">
      <header className="nav">
        <div className="container navInner">
          <Link href="/"><img className="brandLogo" src="/moveops-logo.png" alt="MoveOps" /></Link>
          <nav className="navLinks navDesktop">
            <Link href="/blog">Blog</Link>
            <Link href="/contact" className="navCta">Contact</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <div className="container">
          <div className="postWrap">
            <Link href="/blog" className="backLink">← Blog</Link>
            <div className="postHeader">
              <div className="postKicker">{post.tag}</div>
              <h1 className="postTitle">{post.title}</h1>
              <div className="postMeta">{post.date} · {post.readTime}</div>
            </div>
            <div className="postBody" dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="postCta">
              <div className="postCtaTitle">{post.cta.title}</div>
              <div className="postCtaText">{post.cta.text}</div>
              <Link href="/contact" className="btn">{post.lang === "es" ? "Hablar del proyecto" : "Talk about your project"}</Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footGrid">
            <div className="footBrand">
              <img className="footLogo" src="/moveops-logo.png" alt="MoveOps" />
              <div className="footMeta"><div className="footTitle">MoveOps</div><div className="footSub">© {new Date().getFullYear()}</div></div>
            </div>
            <nav className="footNav"><Link href="/">Home</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></nav>
            <div className="footCta"><a className="footEmail" href="mailto:hello@moveops.services">hello@moveops.services</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
