"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Shell({ children, lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const year = new Date().getFullYear();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function toggleLang() { setLang((l) => (l === "en" ? "es" : "en")); }

  const LangToggle = () => (
    <button className="langBtn" type="button" onClick={toggleLang} aria-label="Change language">
      {lang === "en" ? "ES" : "EN"}
    </button>
  );

  return (
    <div className="page">
      <header className="nav">
        <div className="container navInner">
          <Link className="brand" href="/" aria-label="Home">
            <img className="brandLogo" src="/moveops-logo.png" alt="MoveOps" />
          </Link>

          {/* Desktop */}
          <nav className="navLinks navDesktop" aria-label="Primary">
            <Link href="/spain-installation-partner" className={pathname === "/spain-installation-partner" ? "active" : ""}>{t.nav.install}</Link>
            <Link href="/exhibition-stand-installation-spain" className={pathname === "/exhibition-stand-installation-spain" ? "active" : ""}>{t.nav.stands}</Link>
            <Link href="/blog" className={pathname.startsWith("/blog") ? "active" : ""}>Blog</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>{t.nav.contact}</Link>
            <LangToggle />
            <Link className="navCta" href="/contact">{t.nav.cta}</Link>
          </nav>

          {/* Mobile */}
          <div className="navMobile">
            <LangToggle />
            <button className={`hamburger ${menuOpen ? "open" : ""}`} type="button"
              onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu" aria-expanded={menuOpen}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div className={`mobileSheet ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          <div className="mobileSheetTop">
            <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
              <img className="brandLogo" src="/moveops-logo.png" alt="MoveOps" />
            </Link>
            <div className="mobileSheetActions">
              <LangToggle />
              <button className="sheetClose" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
            </div>
          </div>
          <nav className="mobileSheetNav" aria-label="Mobile">
            <Link href="/spain-installation-partner" onClick={() => setMenuOpen(false)}>{t.nav.install}</Link>
            <Link href="/exhibition-stand-installation-spain" onClick={() => setMenuOpen(false)}>{t.nav.stands}</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
            <Link className="btn mobileSheetCta" href="/contact" onClick={() => setMenuOpen(false)}>{t.nav.cta}</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footGrid">
            <div className="footBrand">
              <img className="footLogo" src="/moveops-logo.png" alt="MoveOps" />
              <div className="footMeta">
                <div className="footTitle">{t.footer}</div>
                <div className="footSub">© {year}</div>
              </div>
            </div>
            <nav className="footNav" aria-label="Footer">
              <Link href="/spain-installation-partner">{t.nav.install}</Link>
              <Link href="/exhibition-stand-installation-spain">{t.nav.stands}</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">{t.nav.contact}</Link>
            </nav>
            <div className="footCta">
              <div className="footEmailLabel">Email</div>
              <a className="footEmail" href="mailto:hello@moveops.services">hello@moveops.services</a>
            </div>
          </div>
        </div>
      </footer>

      <Link className="floatCta" href="/contact">{t.nav.floatCta}</Link>
    </div>
  );
}
