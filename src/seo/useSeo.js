import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, canonical, ogImage, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      upsertMeta(`meta[name="description"]`, { name: "description", content: description });
      upsertMeta(`meta[property="og:description"]`, { property: "og:description", content: description });
      upsertMeta(`meta[name="twitter:description"]`, { name: "twitter:description", content: description });
    }

    if (canonical) upsertLink("canonical", canonical);

    if (title) {
      upsertMeta(`meta[property="og:title"]`, { property: "og:title", content: title });
      upsertMeta(`meta[name="twitter:title"]`, { name: "twitter:title", content: title });
    }

    upsertMeta(`meta[property="og:type"]`, { property: "og:type", content: "website" });

    if (canonical) upsertMeta(`meta[property="og:url"]`, { property: "og:url", content: canonical });

    if (ogImage) {
      upsertMeta(`meta[property="og:image"]`, { property: "og:image", content: ogImage });
      upsertMeta(`meta[name="twitter:image"]`, { name: "twitter:image", content: ogImage });
      upsertMeta(`meta[name="twitter:card"]`, { name: "twitter:card", content: "summary_large_image" });
    }

    // robots
    if (noindex) {
      upsertMeta(`meta[name="robots"]`, { name: "robots", content: "noindex,nofollow" });
    } else {
      // keep existing if you already set it in index.html; otherwise set index,follow
      upsertMeta(`meta[name="robots"]`, { name: "robots", content: "index,follow" });
    }
  }, [title, description, canonical, ogImage, noindex]);
}
