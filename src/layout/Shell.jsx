// src/layout/Shell.jsx
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import logo from "../assets/moveops-logo.png";
import { i18n } from "../copy/i18n.js";
import "../styles/theme.css";

function LangToggle({ lang, onToggle }) {
  return (
    <button className="langBtn" type="button" onClick={onToggle} aria-label="Change language">
      <span className="langPill">{lang === "es" ? "ES" : "EN"}</span>
      <span className="langArrow">↔</span>
      <span className="langPill">{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}

export default function Shell() {
  const [lang, setLang] = useState("en"); // default EN (UK SEO)
  const t = i18n[lang];
  const location = useLocation();
  const year = useMemo(() => new Date().getFullYear(), []);

  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  function toggleLang() {
    setLang((l) => (l === "es" ? "en" : "es"));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // close menu on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // close menu on Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // close menu if resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const contactHref = "/contact";

  return (
    <div className="page">
      <header className="nav">
        <div className="container navInner">
          <NavLink className="brand" to="/" aria-label="Home" onClick={closeMenu}>
            <img className="brandLogo" src={logo} alt="MoveOps" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="navLinks navDesktop" aria-label="Primary">
            <NavLink to="/spain-installation-partner" className={({ isActive }) => (isActive ? "active" : "")}>
              {t.nav.install}
            </NavLink>
            <NavLink to="/exhibition-stand-installation-spain" className={({ isActive }) => (isActive ? "active" : "")}>
              {t.nav.stands}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              {t.nav.contact}
            </NavLink>

            <LangToggle lang={lang} onToggle={toggleLang} />

            <NavLink className="navCta" to={contactHref} state={{ from: location.pathname }}>
              {t.nav.cta}
            </NavLink>
          </nav>

          {/* Mobile actions */}
          <div className="navMobile">
            <LangToggle lang={lang} onToggle={toggleLang} />

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile full-screen menu */}
<div className={`mobileSheet ${menuOpen ? "open" : ""}`} id="mobileMenu" aria-hidden={!menuOpen}>
  <div className="mobileSheetTop">
    <NavLink className="brand" to="/" aria-label="Home" onClick={closeMenu}>
      <img className="brandLogo" src={logo} alt="MoveOps" />
    </NavLink>

    <div className="mobileSheetActions">
      <LangToggle lang={lang} onToggle={toggleLang} />
      <button className="sheetClose" type="button" onClick={closeMenu} aria-label="Close menu">
        ✕
      </button>
    </div>
  </div>

  <nav className="mobileSheetNav" aria-label="Mobile">
    <NavLink to="/spain-installation-partner" onClick={closeMenu}>
      {t.nav.install}
    </NavLink>
    <NavLink to="/exhibition-stand-installation-spain" onClick={closeMenu}>
      {t.nav.stands}
    </NavLink>
    <NavLink to="/contact" onClick={closeMenu}>
      {t.nav.contact}
    </NavLink>

    <NavLink className="btn mobileSheetCta" to={contactHref} state={{ from: location.pathname }} onClick={closeMenu}>
      {t.nav.cta}
    </NavLink>
  </nav>
</div>

        {/* Mobile menu panel */}
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`} id="mobileMenu">
          <div className="container mobileMenuInner">
            <NavLink to="/spain-installation-partner" onClick={closeMenu}>
              {t.nav.install}
            </NavLink>
            <NavLink to="/exhibition-stand-installation-spain" onClick={closeMenu}>
              {t.nav.stands}
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              {t.nav.contact}
            </NavLink>

            <NavLink className="btn mobileCta" to={contactHref} state={{ from: location.pathname }} onClick={closeMenu}>
              {t.nav.cta}
            </NavLink>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen ? <button className="menuBackdrop" aria-label="Close menu" onClick={closeMenu} /> : null}
      </header>

      <main>
        <Outlet context={{ lang, t }} />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footGrid">
            <div className="footBrand">
              <img className="footLogo" src={logo} alt="MoveOps" />
              <div className="footMeta">
                <div className="footTitle">{t.footer}</div>
                <div className="footSub">© {year}</div>
              </div>
            </div>

            <nav className="footNav" aria-label="Footer">
              <NavLink to="/spain-installation-partner">{t.nav.install}</NavLink>
              <NavLink to="/exhibition-stand-installation-spain">{t.nav.stands}</NavLink>
              <NavLink to="/contact">{t.nav.contact}</NavLink>
            </nav>

            <div className="footCta">
              <div className="footEmailLabel">Email</div>
              <a className="footEmail" href="mailto:hello@moveops.services">
                hello@moveops.services
              </a>
            </div>
          </div>
        </div>
      </footer>

      <NavLink className="floatCta" to="/contact" aria-label="Get a quote">
        {t.nav.floatCta}
      </NavLink>
    </div>
  );
}