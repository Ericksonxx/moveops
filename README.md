# MoveOps — Next.js Migration

## Setup

```bash
npm install
npm run dev
```

## Copiar assets al repo

Desde tu repo actual, copia estos archivos a `/public/`:

```bash
cp src/assets/moveops-logo.png public/
cp src/assets/favicon.png public/
cp src/assets/hero-snipes.jpg public/
cp src/assets/maps/spain.svg public/
mkdir -p public/services
cp src/assets/services/retail.jpg public/services/
cp src/assets/services/stand.jpeg public/services/
cp src/assets/services/rollouts.jpeg public/services/
```

También crea un `public/og.png` (1200×630px) para Open Graph si tienes uno.

## Deploy en Vercel (proyecto existente)

1. Reemplaza todos los archivos del repo con los de esta carpeta (excepto `.git`)
2. Elimina archivos Vite que ya no necesitas:
   ```bash
   rm vite.config.js eslint.config.js index.html
   rm -rf src/
   ```
3. Verifica que `RESEND_API_KEY` está configurada en Vercel → Settings → Environment Variables
4. Push → Vercel hace el deploy automáticamente

## Variables de entorno

En `.env.local` (local) y en Vercel (producción):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Añadir posts al blog

Edita `lib/posts.js` y añade un objeto:
```js
{
  slug: "url-del-post",
  lang: "es",
  tag: "Categoría",
  title: "Título",
  excerpt: "Descripción corta",
  date: "2025-04-01",
  readTime: "5 min",
  body: `<h2>...</h2><p>...</p>`,
  cta: { title: "...", text: "..." }
}
```

## Estructura

```
app/
  layout.js                    # Root layout + SEO global
  page.js                      # Home (/)
  globals.css                  # Todos los estilos (de theme.css original)
  sitemap.js                   # /sitemap.xml automático
  robots.js                    # /robots.txt
  contact/page.js              # /contact
  blog/page.js                 # /blog
  blog/[slug]/page.js          # /blog/:slug
  spain-installation-partner/  # Landing SEO
  exhibition-stand-installation-spain/  # Landing SEO
  api/contact/route.js         # Formulario → Resend

components/
  Shell.js        # Nav + footer + mobile menu
  HomePage.js     # Home completo
  HowItWorks.js   # Interactivo
  Proof.js        # Reporting mock
  CoverageMap.js  # Mapa con pins
  FAQ.js          # Acordeón
  ContactForm.js  # Formulario

lib/
  i18n.js   # Todo el copy ES/EN
  posts.js  # Blog posts
```
