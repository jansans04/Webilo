import React from 'react';
import { activeContent } from '../data/content';

function DesktopMockup() {
  return (
    <div className="mockup-desktop">
      <div className="mockup-desktop__chrome">
        <div className="mockup-desktop__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-desktop__bar" />
      </div>
      <div className="mockup-desktop__screen">
        <div className="mockup-site">
          <div className="mockup-site__nav">
            <div className="mockup-pill mockup-pill--dark" style={{ width: 40 }} />
            <div style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
              <div className="mockup-pill" style={{ width: 28 }} />
              <div className="mockup-pill" style={{ width: 28 }} />
              <div className="mockup-pill" style={{ width: 28 }} />
            </div>
          </div>
          <div className="mockup-site__hero">
            <div className="mockup-pill mockup-pill--title" style={{ width: '70%' }} />
            <div className="mockup-pill mockup-pill--title" style={{ width: '55%', height: 14 }} />
            <div className="mockup-pill" style={{ width: '80%', height: 8, marginTop: 8 }} />
            <div className="mockup-pill" style={{ width: '65%', height: 8 }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <div className="mockup-pill mockup-pill--accent" style={{ width: 72, height: 22, borderRadius: 6 }} />
              <div className="mockup-pill mockup-pill--outline" style={{ width: 72, height: 22, borderRadius: 6 }} />
            </div>
          </div>
          <div className="mockup-site__cards">
            {[1, 2, 3].map((i) => (
              <div key={i} className="mockup-card">
                <div className="mockup-pill mockup-pill--accent-light" style={{ width: 24, height: 24, borderRadius: 6 }} />
                <div className="mockup-pill" style={{ width: '80%', height: 7, marginTop: 8 }} />
                <div className="mockup-pill" style={{ width: '60%', height: 6 }} />
                <div className="mockup-pill" style={{ width: '70%', height: 6 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mockup-desktop__base" />
      <div className="mockup-desktop__foot" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mockup-phone">
      <div className="mockup-phone__notch" />
      <div className="mockup-phone__screen">
        <div className="mockup-site mockup-site--mobile">
          <div className="mockup-pill mockup-pill--dark" style={{ width: 50, height: 6, marginBottom: 10 }} />
          <div className="mockup-pill mockup-pill--title" style={{ width: '85%', height: 10 }} />
          <div className="mockup-pill mockup-pill--title" style={{ width: '70%', height: 10 }} />
          <div className="mockup-pill" style={{ width: '90%', height: 6, marginTop: 8 }} />
          <div className="mockup-pill" style={{ width: '75%', height: 6 }} />
          <div className="mockup-pill mockup-pill--accent" style={{ width: '80%', height: 20, borderRadius: 6, marginTop: 12 }} />
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[1, 2].map((i) => (
              <div key={i} className="mockup-card mockup-card--mobile">
                <div className="mockup-pill mockup-pill--accent-light" style={{ width: 20, height: 20, borderRadius: 5 }} />
                <div style={{ flex: 1 }}>
                  <div className="mockup-pill" style={{ width: '70%', height: 6 }} />
                  <div className="mockup-pill" style={{ width: '55%', height: 5 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Separa l'última paraula del títol (amb la puntuació final enganxada)
// perquè es pugui destacar en cursiva + color accent, sense tocar el
// text en si (ve tal qual de content.js / locales/ca.js).
function splitLastWord(text) {
  const trimmed = (text || '').trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace === -1) {
    return { rest: '', last: trimmed };
  }
  return { rest: `${trimmed.slice(0, lastSpace)} `, last: trimmed.slice(lastSpace + 1) };
}

export default function Hero(props) {
  const { hero } = activeContent;
  const { rest, last } = splitLastWord(hero.title);

  return (
    <section className="hero" id="inici" aria-label="Presentació" {...props}>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {rest}
            <em className="hero__title-accent">{last}</em>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a href={hero.ctaPrimary.href} className="btn btn-primary hero__btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary hero__btn-secondary">
              {hero.ctaSecondary.label}
            </a>
          </div>
          <div className="hero__trust">
            {hero.trust.map((item) => (
              <span key={item} className="hero__trust-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__mockups">
            <DesktopMockup />
            <PhoneMockup />
          </div>
          <div className="hero__blob" />
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C360 60 1080 60 1440 0V60H0V0Z" fill="var(--color-surface)" />
        </svg>
      </div>
    </section>
  );
}
