import React, { useEffect, useState } from 'react';
import { activeContent } from '../data/content';

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { company, nav } = activeContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (href) => {
    const targetId = href.replace('#', '');
    onNavigate?.(targetId);
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-logo" href="#inici" onClick={() => handleNavigate('#inici')}>
          <img className="site-logo__image" src="/logo.jpg" alt="Webilo" />
          <span className="site-logo__text">{company.name}</span>
        </a>

        <nav className="site-nav" aria-label="Navegació principal">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary site-header__cta" href="#contacte">
          {nav.cta}
        </a>

        <button
          type="button"
          className={`site-nav__toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Obrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`site-drawer ${menuOpen ? 'site-drawer--open' : ''}`}>
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="site-drawer__link"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-primary site-drawer__cta"
          href="#contacte"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate('#contacte');
          }}
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}