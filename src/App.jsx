import React, { useCallback, useEffect, useRef, useState } from 'react';
import { activeContent } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ---------------------------------------------------------------------------
// Section heading
// ---------------------------------------------------------------------------
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </div>
  );
}

function FeatureCard({ icon, label }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <p className="feature-card__label">{label}</p>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Inline demo: Aparador Digital (landing page senzilla)
// ---------------------------------------------------------------------------
function DemoAparador() {
  const sectionRefs = useRef({});
  const viewportRef = useRef(null);

  const scrollTo = (key) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="demo-window" ref={viewportRef}>
      {/* Navbar */}
      <header className="demo-nav demo-nav--light">
        <span className="demo-brand">🌿 Floristeria Marta</span>
        <nav className="demo-nav__links">
          <button type="button" onClick={() => scrollTo('inici')}>Inici</button>
          <button type="button" onClick={() => scrollTo('serveis')}>Serveis</button>
          <button type="button" onClick={() => scrollTo('contacte')}>Contacte</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="demo-section demo-hero--green" ref={(n) => (sectionRefs.current.inici = n)}>
        <p className="demo-eyebrow">Floristeria a Igualada des de 1998</p>
        <h2 className="demo-h2">Flors per a cada moment especial</h2>
        <p className="demo-p">Ram de núvia, centres de taula, plantes d'interior i decoració floral a mida.</p>
        <div className="demo-actions">
          <button type="button" className="demo-btn demo-btn--primary" onClick={() => scrollTo('contacte')}>Fes una consulta</button>
          <button type="button" className="demo-btn demo-btn--ghost" onClick={() => scrollTo('serveis')}>Veure serveis</button>
        </div>
      </section>

      {/* Serveis */}
      <section className="demo-section demo-section--alt" ref={(n) => (sectionRefs.current.serveis = n)}>
        <h3 className="demo-h3">Què oferim</h3>
        <div className="demo-cards-3">
          {[
            ['💐', 'Rams i centres', 'Per a casaments, aniversaris o simplement per alegrar algú.'],
            ['🌱', 'Plantes i tests', `Selecció de plantes d'interior i exterior per a la llar o l'oficina.`],
            ['🎁', 'Regals florals', 'Cistelles i composicions personalitzades per a qualsevol ocasió.'],
          ].map(([icon, title, text]) => (
            <article key={title} className="demo-card">
              <span className="demo-card__icon">{icon}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contacte */}
      <section className="demo-section demo-section--contact" ref={(n) => (sectionRefs.current.contacte = n)}>
        <div className="demo-contact-info">
          <h3 className="demo-h3">Troba'ns</h3>
          <p className="demo-p">📍 Carrer Major, 14 — Igualada</p>
          <p className="demo-p">📞 93 800 12 34</p>
          <p className="demo-p">🕐 Dilluns–Divendres 9–20h · Dissabte 9–14h</p>
        </div>
        <div className="demo-map-placeholder">
          <span>📍 Mapa</span>
        </div>
      </section>

      <footer className="demo-footer">
        <span>© 2025 Floristeria Marta</span>
        <span>Exemple — Aparador Digital</span>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inline demo: Web Professional (corporativa multi-pàgina)
// ---------------------------------------------------------------------------
function DemoProfessional() {
  const [page, setPage] = useState('inici');

  const pages = {
    inici: (
      <div className="demo-page-content">
        <section className="demo-section demo-hero--blue">
          <p className="demo-eyebrow">Assessoria comptable i fiscal</p>
          <h2 className="demo-h2">El teu negoci, en bones mans</h2>
          <p className="demo-p">Més de 15 anys ajudant autònoms i pimes a portar la comptabilitat sense maldecaps.</p>
          <button type="button" className="demo-btn demo-btn--primary" onClick={() => setPage('contacte')}>Demana cita</button>
        </section>
        <section className="demo-section demo-section--alt">
          <h3 className="demo-h3">Per què confiar en nosaltres?</h3>
          <div className="demo-cards-3">
            {[['✓ Resposta ràpida', 'Sempre disponibles quan ens necessites.'], ['✓ Transparència', 'Sense lletres petites ni sorpreses.'], ['✓ Experiència', '+500 clients atesos des de 2008.']].map(([t, d]) => (
              <article key={t} className="demo-card demo-card--minimal"><strong>{t}</strong><p>{d}</p></article>
            ))}
          </div>
        </section>
      </div>
    ),
    serveis: (
      <div className="demo-page-content">
        <section className="demo-section">
          <h2 className="demo-h2">Els nostres serveis</h2>
          <div className="demo-service-list">
            {[
              ['📋', 'Comptabilitat mensual', 'Registre de factures, conciliació bancària i estat de comptes.'],
              ['🧾', 'Declaracions trimestrals', 'IVA, IRPF i impostos de societats al dia.'],
              ['👥', 'Gestió laboral', 'Nòmines, altes i baixes, contractes.'],
              ['📊', 'Assessoria fiscal', 'Planificació per pagar menys i complir la normativa.'],
            ].map(([icon, title, desc]) => (
              <article key={title} className="demo-service-item">
                <span>{icon}</span>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </article>
            ))}
          </div>
        </section>
      </div>
    ),
    sobre: (
      <div className="demo-page-content">
        <section className="demo-section">
          <h2 className="demo-h2">Qui som</h2>
          <p className="demo-p" style={{ maxWidth: '40ch' }}>Som un equip de tres assessors ubicats a Barcelona, especialitzats en autònoms i petites empreses. Creiem que la gestió comptable ha de ser simple i transparent.</p>
          <div className="demo-team">
            {[['👩', 'Anna G.', 'Comptable sènior'], ['👨', 'Marc F.', 'Assessor fiscal'], ['👩', 'Laia P.', 'Gestió laboral']].map(([ico, name, role]) => (
              <div key={name} className="demo-team-card"><span className="demo-team-avatar">{ico}</span><strong>{name}</strong><span>{role}</span></div>
            ))}
          </div>
        </section>
      </div>
    ),
    contacte: (
      <div className="demo-page-content">
        <section className="demo-section demo-section--contact">
          <div>
            <h2 className="demo-h2">Parlem?</h2>
            <p className="demo-p">📍 Carrer Balmes, 100, Barcelona</p>
            <p className="demo-p">📞 93 400 00 01 · info@assessoria.cat</p>
            <p className="demo-p">🕐 Dl–Dv 9–18h</p>
          </div>
          <div className="demo-contact-form">
            <input type="text" placeholder="Nom i cognoms" readOnly className="demo-input" />
            <input type="email" placeholder="Correu electrònic" readOnly className="demo-input" />
            <textarea rows="3" placeholder="En què et podem ajudar?" readOnly className="demo-input" />
            <button type="button" className="demo-btn demo-btn--primary">Enviar missatge</button>
          </div>
        </section>
      </div>
    ),
  };

  return (
    <div className="demo-window">
      <header className="demo-nav demo-nav--dark">
        <span className="demo-brand">⚖️ Assessoria Gil</span>
        <nav className="demo-nav__links">
          {[['inici', 'Inici'], ['serveis', 'Serveis'], ['sobre', 'Sobre nosaltres'], ['contacte', 'Contacte']].map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={page === id ? 'demo-nav-active' : ''}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <div className="demo-page-viewport">
        {pages[page]}
      </div>
      <footer className="demo-footer">
        <span>© 2025 Assessoria Gil</span>
        <span>Exemple — Web Professional</span>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inline demo: Botiga Online (e-commerce)
// ---------------------------------------------------------------------------
function DemoBotiga() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); // 'shop' | 'cart' | 'checkout'

  const products = [
    { id: 1, name: 'Samarreta Bàsica', price: 24.90, emoji: '👕', cat: 'Roba' },
    { id: 2, name: 'Pantalons Slim', price: 49.90, emoji: '👖', cat: 'Roba' },
    { id: 3, name: 'Jaqueta Lleugera', price: 79.90, emoji: '🧥', cat: 'Roba' },
    { id: 4, name: 'Mocassins Clàssics', price: 89.90, emoji: '👞', cat: 'Calçat' },
    { id: 5, name: 'Bossa de mà', price: 39.90, emoji: '👜', cat: 'Complements' },
    { id: 6, name: 'Cinturó Cuir', price: 29.90, emoji: '🪡', cat: 'Complements' },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing
        ? prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div className="demo-window">
      <header className="demo-nav demo-nav--shop">
        <span className="demo-brand">🛍️ ModaEstil</span>
        <nav className="demo-nav__links">
          <button type="button" className={view === 'shop' ? 'demo-nav-active' : ''} onClick={() => setView('shop')}>Botiga</button>
          <button type="button" className={view === 'cart' ? 'demo-nav-active' : ''} onClick={() => setView('cart')}>
            Carret {cartCount > 0 && <span className="demo-cart-badge">{cartCount}</span>}
          </button>
        </nav>
      </header>

      {view === 'shop' && (
        <div className="demo-page-viewport">
          <section className="demo-section demo-hero--shop">
            <h2 className="demo-h2">Nova col·lecció tardor</h2>
            <p className="demo-p">Roba de qualitat per al dia a dia. Enviament gratuït a partir de 60€.</p>
          </section>
          <div className="demo-product-grid">
            {products.map((p) => (
              <article key={p.id} className="demo-product-card">
                <div className="demo-product-img">{p.emoji}</div>
                <div className="demo-product-info">
                  <span className="demo-product-cat">{p.cat}</span>
                  <strong>{p.name}</strong>
                  <span className="demo-product-price">{p.price.toFixed(2)} €</span>
                </div>
                <button type="button" className="demo-btn demo-btn--add" onClick={() => addToCart(p)}>
                  + Afegir
                </button>
              </article>
            ))}
          </div>
        </div>
      )}

      {view === 'cart' && (
        <div className="demo-page-viewport">
          <section className="demo-section">
            <h2 className="demo-h2">El teu carret</h2>
            {cart.length === 0 ? (
              <p className="demo-p">Encara no has afegit cap producte.</p>
            ) : (
              <>
                <div className="demo-cart-list">
                  {cart.map((item) => (
                    <div key={item.id} className="demo-cart-item">
                      <span>{item.emoji} {item.name}</span>
                      <span>×{item.qty}</span>
                      <span>{(item.price * item.qty).toFixed(2)} €</span>
                    </div>
                  ))}
                  <div className="demo-cart-total">
                    <strong>Total</strong>
                    <strong>{total.toFixed(2)} €</strong>
                  </div>
                </div>
                <button type="button" className="demo-btn demo-btn--primary" style={{ marginTop: '1rem' }} onClick={() => setView('checkout')}>
                  Finalitzar compra
                </button>
              </>
            )}
            <button type="button" className="demo-btn demo-btn--ghost" style={{ marginTop: '0.5rem' }} onClick={() => setView('shop')}>
              ← Seguir comprant
            </button>
          </section>
        </div>
      )}

      {view === 'checkout' && (
        <div className="demo-page-viewport">
          <section className="demo-section">
            <h2 className="demo-h2">Checkout</h2>
            <div className="demo-checkout">
              <div className="demo-checkout-form">
                <input type="text" placeholder="Nom i cognoms" readOnly className="demo-input" />
                <input type="email" placeholder="Correu electrònic" readOnly className="demo-input" />
                <input type="text" placeholder="Adreça d'enviament" readOnly className="demo-input" />
                <div className="demo-payment-methods">
                  <span className="demo-payment-pill">💳 Targeta</span>
                  <span className="demo-payment-pill">📱 Bizum</span>
                  <span className="demo-payment-pill">🅿️ PayPal</span>
                </div>
                <button type="button" className="demo-btn demo-btn--primary">
                  Pagar {total.toFixed(2)} €
                </button>
              </div>
              <div className="demo-checkout-summary">
                <strong>Resum</strong>
                {cart.map((item) => (
                  <div key={item.id} className="demo-checkout-row">
                    <span>{item.name} ×{item.qty}</span>
                    <span>{(item.price * item.qty).toFixed(2)} €</span>
                  </div>
                ))}
                <div className="demo-checkout-row demo-checkout-row--total">
                  <strong>Total</strong>
                  <strong>{total.toFixed(2)} €</strong>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <footer className="demo-footer">
        <span>© 2025 ModaEstil</span>
        <span>Exemple — Botiga Online</span>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Demo registry — shared by the pricing cards and the modal
// ---------------------------------------------------------------------------
const DEMOS = {
  aparador: DemoAparador,
  professional: DemoProfessional,
  botiga: DemoBotiga,
};

// ---------------------------------------------------------------------------
// Pricing card — the three services shown side by side, horizontally
// ---------------------------------------------------------------------------
function PricingCard({ service, onPreview }) {
  return (
    <article className={`pricing-card ${service.featured ? 'pricing-card--featured' : ''}`}>
      {service.badge ? <span className="pricing-card__badge">{service.badge}</span> : null}

      <p className="pricing-card__type">{service.type}</p>
      <h3 className="pricing-card__title">{service.name}</h3>

      <div className="pricing-card__price">
        <strong>{service.price}</strong>
        <span>{service.note}</span>
      </div>

      <p className="pricing-card__tagline">{service.tagline}</p>

      <ul className="pricing-card__list">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="pricing-card__actions">
        <button
          type="button"
          className="btn btn-secondary pricing-card__preview"
          onClick={() => onPreview(service.id)}
        >
          Veure exemple
        </button>
        <a href="#contacte" className="btn btn-primary pricing-card__cta">
          {service.cta}
        </a>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Demo modal — opens the corresponding example in a window over the page
// ---------------------------------------------------------------------------
function DemoModal({ service, onClose }) {
  const Demo = DEMOS[service.id];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="demo-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Exemple: ${service.name}`}
      onClick={onClose}
    >
      <div className="demo-modal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="demo-modal__header">
          <div>
            <p className="demo-modal__eyebrow">Exemple interactiu</p>
            <h3>{service.name}</h3>
          </div>
          <button
            type="button"
            className="demo-modal__close"
            onClick={onClose}
            aria-label="Tanca l'exemple"
          >
            ×
          </button>
        </div>
        <div className="demo-modal__viewport">
          {Demo ? <Demo /> : <div className="demo-placeholder">Exemple en preparació</div>}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeDemo, setActiveDemo] = useState(null);
  const mainRef = useRef(null);

  const { whatWeDo, services, comparison, howItWorks, whyUs, faq, ctaFinal, contact, footer, company } = activeContent;

  const activeService = activeDemo ? services.find((s) => s.id === activeDemo) : null;

  // Reveal on scroll
  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  // Panel-snap scroll on wheel
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const panels = Array.from(main.querySelectorAll('[data-page-panel]'));
    let locked = false;

    const getPanelBounds = () =>
      panels.map((p) => ({ top: p.offsetTop, bottom: p.offsetTop + p.offsetHeight }));

    const getCurrentIndex = () => {
      const scrollTop = main.scrollTop;
      const mid = scrollTop + main.clientHeight * 0.4;
      let idx = 0;
      getPanelBounds().forEach((b, i) => { if (b.top <= mid) idx = i; });
      return idx;
    };

    const onWheel = (e) => {
      if (locked) return;
      if (Math.abs(e.deltaY) < 8) return;

      const idx = getCurrentIndex();
      const scrollTop = main.scrollTop;
      const clientH = main.clientHeight;
      const scrollDown = e.deltaY > 0;
      const scrollUp = !scrollDown;

      // Check if we're mid-panel (more than 2px from panel boundary)
      const panelTop = panels[idx]?.offsetTop ?? 0;
      const panelBottom = panelTop + (panels[idx]?.offsetHeight ?? 0);
      const nearBottom = scrollTop + clientH >= panelBottom - 4;
      const nearTop = scrollTop <= panelTop + 4;

      // Only intercept when we're AT the boundary
      if (scrollDown && !nearBottom) return;
      if (scrollUp && !nearTop) return;

      const nextIdx = Math.min(Math.max(idx + (scrollDown ? 1 : -1), 0), panels.length - 1);
      if (nextIdx === idx) return;

      e.preventDefault();
      locked = true;
      panels[nextIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => { locked = false; }, 800);
    };

    main.addEventListener('wheel', onWheel, { passive: false });
    return () => main.removeEventListener('wheel', onWheel);
  }, []);

  const scrollToSection = useCallback((targetId) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="page-shell">
      <Navbar onNavigate={scrollToSection} />
      <main className="page-scroll" ref={mainRef}>
        {/* Panel 1: Hero + Què fem */}
        <div className="page-panel" data-page-panel id="inici">
          <Hero />
          <section className="section" id="quefem" data-reveal>
            <div className="container section-grid section-grid--two">
              <div>
                <SectionHeading eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} subtitle={whatWeDo.description} />
              </div>
              <div className="feature-grid">
                {whatWeDo.items.map((item) => (
                  <FeatureCard key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Panel 2: Serveis (graella de 3 targetes + modal d'exemple) */}
        <div className="page-panel" data-page-panel id="serveis">
          <section className="section section--alt" id="serveis-contingut" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="Serveis"
                title="Tres maneres de començar"
                subtitle="Cada negoci és diferent. Escull el que s'adapta al teu moment i compara'ls d'un cop d'ull."
              />
            </div>
          </section>

          <section className="section services-inline" data-reveal>
            <div className="container">
              <div className="pricing-grid">
                {services.map((service) => (
                  <PricingCard key={service.id} service={service} onPreview={setActiveDemo} />
                ))}
              </div>
            </div>
          </section>

          <section className="section section--alt" id="comparacio" data-reveal>
            <div className="container">
              <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} subtitle="Escull segons el que vols aconseguir." />
              <div className="comparison-grid">
                {comparison.items.map((item, index) => (
                  <article key={item.label} className={`comparison-card comparison-card--${index + 1}`}>
                    <p className="comparison-card__label">{item.label}</p>
                    <p className="comparison-card__value">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Panel 3: Com funciona + Per què nosaltres + FAQ */}
        <div className="page-panel" data-page-panel id="com-funciona">
          <section className="section section--alt" id="com-funciona-contingut" data-reveal>
            <div className="container">
              <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} subtitle="El procés ha de ser fàcil d'entendre i fàcil de seguir." />
              <div className="steps-grid">
                {howItWorks.steps.map((step) => (
                  <article key={step.number} className="step-card">
                    <span className="step-card__number">{step.number}</span>
                    <h3 className="step-card__title">{step.title}</h3>
                    <p className="step-card__text">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="per-que-nosaltres" data-reveal>
            <div className="container section-grid section-grid--two section-grid--reverse">
              <div>
                <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} subtitle={whyUs.description} />
                <a href="#contacte" className="btn btn-primary section-cta">
                  Parlem del teu projecte
                </a>
              </div>
              <div className="points-panel">
                {whyUs.points.map((point) => (
                  <div key={point} className="points-panel__item">
                    <span className="points-panel__check">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="faq" data-reveal>
            <div className="container section-grid section-grid--two">
              <SectionHeading eyebrow="FAQ" title="Preguntes freqüents" subtitle="Respostes curtes i útils perquè la gent no s'encalli abans d'escriure't." />
              <div className="faq-list">
                {faq.map((item, index) => {
                  const open = openFaq === index;
                  return (
                    <article key={item.question} className={`faq-item ${open ? 'is-open' : ''}`}>
                      <button type="button" className="faq-item__question" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open}>
                        <span>{item.question}</span>
                        <span className="faq-item__icon">{open ? '−' : '+'}</span>
                      </button>
                      {open ? <p className="faq-item__answer">{item.answer}</p> : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Panel 4: CTA + Contacte + Footer */}
        <div className="page-panel" data-page-panel id="contacte">
          <section className="section section--cta" id="cta-final" data-reveal>
            <div className="container cta-banner">
              <div>
                <p className="section-heading__eyebrow">Tancament</p>
                <h2 className="cta-banner__title">{ctaFinal.title}</h2>
                <p className="cta-banner__text">{ctaFinal.subtitle}</p>
              </div>
              <a href="#contacte-contingut" className="btn btn-ghost cta-banner__button">
                {ctaFinal.cta}
              </a>
            </div>
          </section>

          <section className="section" id="contacte-contingut" data-reveal>
            <div className="container contact-grid">
              <div className="contact-copy">
                <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.description} />
                <div className="contact-details">
                  <div><span>Telèfon</span><strong>{company.phone}</strong></div>
                  <div><span>WhatsApp</span><strong>{company.whatsapp}</strong></div>
                  <div><span>Email</span><strong>{company.email}</strong></div>
                  <div><span>Horari</span><strong>{company.schedule}</strong></div>
                </div>
              </div>
              <form className="contact-form">
                {contact.formFields.map((field) => {
                  if (field.type === 'textarea') {
                    return (
                      <label key={field.name} className="form-field form-field--full">
                        <span>{field.label}</span>
                        <textarea name={field.name} placeholder={field.placeholder} rows="5" />
                      </label>
                    );
                  }
                  if (field.type === 'select') {
                    return (
                      <label key={field.name} className="form-field form-field--full">
                        <span>{field.label}</span>
                        <select name={field.name} defaultValue="">
                          <option value="" disabled>Tria una opció</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </label>
                    );
                  }
                  return (
                    <label key={field.name} className="form-field">
                      <span>{field.label}</span>
                      <input type={field.type} name={field.name} placeholder={field.placeholder} />
                    </label>
                  );
                })}
                <button type="submit" className="btn btn-primary contact-form__submit">
                  {contact.submitLabel}
                </button>
              </form>
            </div>
          </section>

          <footer className="footer" data-reveal>
            <div className="container footer__grid">
              <div>
                <p className="footer__brand">{company.name}</p>
                <p className="footer__text">{footer.tagline}</p>
              </div>
              <nav className="footer__links" aria-label="Enllaços del peu de pàgina">
                {footer.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (!link.href.startsWith('#')) return;
                      e.preventDefault();
                      scrollToSection(link.href.slice(1));
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="footer__links">
                {footer.legal.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </main>

      {activeService ? (
        <DemoModal service={activeService} onClose={() => setActiveDemo(null)} />
      ) : null}
    </div>
  );
}

export default App;
