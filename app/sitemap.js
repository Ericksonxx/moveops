import { posts } from "../lib/posts";

export default function sitemap() {
  const base = "https://moveops.services";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/spain-installation-partner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/exhibition-stand-installation-spain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.7 })),
  ];
}
