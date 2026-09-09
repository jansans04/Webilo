import React, { useEffect, useRef, useState } from 'react';
import { activeContent } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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

function ServiceCard({ service, onOpenExample }) {
  const exampleAvailable = service.id === 'aparador';

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
      <div className="pricing-card__meta">
        <span>{service.technical.stack}</span>
        <span>{service.technical.structure}</span>
        <span>{service.technical.hosting}</span>
      </div>
      <div className="pricing-card__actions">
        <button
          type="button"
          className="btn btn-secondary pricing-card__preview"
          onClick={() => onOpenExample(service)}
          disabled={!exampleAvailable}
        >
          {exampleAvailable ? 'Veure exemple' : 'Exemple en preparació'}
        </button>
        <a href="#contacte" className="btn btn-primary pricing-card__cta">
          {service.cta}
        </a>
      </div>
    </article>
  );
}

function ExampleModal({ service, onClose }) {
  const viewportRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [service.id]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const scrollToSection = (key) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="example-modal" role="dialog" aria-modal="true" aria-labelledby="example-modal-title" onClick={onClose}>
      <div className="example-modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="example-modal__header">
          <div>
            <p className="example-modal__eyebrow">Exemple interactiu</p>
            <h3 id="example-modal-title">{service.name}</h3>
            <p>{service.tagline}</p>
          </div>
          <button type="button" className="example-modal__close" onClick={onClose} aria-label="Tancar finestra">
            ×
          </button>
        </div>

        <div className="example-modal__viewport" ref={viewportRef}>
          <div className="example-page">
            <header className="example-page__nav">
              <button type="button" className="example-page__brand" onClick={() => scrollToSection('inici')}>
                Logotip
              </button>
              <div className="example-page__links">
                <button type="button" className="example-page__link" onClick={() => scrollToSection('inici')}>
                  Inici
                </button>
                <button type="button" className="example-page__link" onClick={() => scrollToSection('avantatges')}>
                  Avantatges
                </button>
                <button type="button" className="example-page__link" onClick={() => scrollToSection('preus')}>
                  Preus
                </button>
                <button type="button" className="example-page__link" onClick={() => scrollToSection('contacte')}>
                  Contacte
                </button>
              </div>
            </header>

            <section className="example-page__section example-page__hero" ref={(node) => (sectionRefs.current.inici = node)}>
              <h4>Impulsa el teu negoci digital</h4>
              <p>
                Una landing de mostra molt simple, amb barra superior fixa, scroll intern i seccions clares per veure com
                podria quedar una web real dins d’una finestra.
              </p>
              <div className="example-page__actions">
                <button type="button" className="btn btn-primary" onClick={() => scrollToSection('avantatges')}>
                  Veure avantatges
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => scrollToSection('contacte')}>
                  Contactar
                </button>
              </div>
            </section>

            <section className="example-page__section" ref={(node) => (sectionRefs.current.avantatges = node)}>
              <div className="example-page__section-heading">
                <p>Per què escollir-nos?</p>
                <h5>Una web curta i clara</h5>
              </div>
              <div className="example-page__cards">
                {[
                  ['Ràpid', 'Configura la presentació i comunica el valor del negoci de manera directa.'],
                  ['Segur', 'Estructura neta i contingut ben presentat per generar confiança.'],
                  ['Efectiu', 'Botons i seccions que guien l’usuari cap al contacte.'],
                ].map(([title, text]) => (
                  <article key={title} className="example-page__card">
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="example-page__section" ref={(node) => (sectionRefs.current.preus = node)}>
              <div className="example-page__section-heading">
                <p>Plans de preus</p>
                <h5>Una comparativa molt visual</h5>
              </div>
              <div className="example-page__cards example-page__cards--pricing">
                {[
                  ['Bàsic', '9€ /mes', 'Ideal per començar.'],
                  ['Pro', '29€ /mes', 'Perfecte per créixer.'],
                  ['Premium', '59€ /mes', 'La versió més completa.'],
                ].map(([title, price, text], index) => (
                  <article key={title} className={`example-page__card ${index === 1 ? 'is-active' : ''}`}>
                    <strong>{title}</strong>
                    <p className="example-page__price">{price}</p>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="example-page__section example-page__contact" ref={(node) => (sectionRefs.current.contacte = node)}>
              <div>
                <span className="example-page__eyebrow">Contacte</span>
                <h4>Demana informació i responem ràpid</h4>
                <p>El formulari aquí és només una mostra visual del flux final, com a la landing de referència.</p>
              </div>
              <form className="example-page__form">
                <input type="text" placeholder="El teu nom" />
                <input type="email" placeholder="El teu correu electrònic" />
                <textarea rows="4" placeholder="En què et podem ajudar?" />
                <button type="button" className="btn btn-primary">
                  Enviar consulta
                </button>
              </form>
            </section>

            <footer className="example-page__footer">
              <span>© 2026 Demo landing</span>
              <span>Mostra interactiva dins la finestra</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeExample, setActiveExample] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const mainRef = useRef(null);
  const { whatWeDo, services, comparison, howItWorks, whyUs, faq, ctaFinal, contact, footer, company } = activeContent;

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const panels = Array.from(mainRef.current?.querySelectorAll('[data-page-panel]') ?? []);
    let locked = false;

    const getCurrentIndex = () => {
      const scrollTop = mainRef.current?.scrollTop ?? 0;
      const probe = scrollTop + (mainRef.current?.clientHeight ?? window.innerHeight) * 0.35;
      let currentIndex = 0;

      panels.forEach((panel, index) => {
        if (panel.offsetTop <= probe) {
          currentIndex = index;
        }
      });

      return currentIndex;
    };

    const onWheel = (event) => {
      if (activeExample || locked || panels.length === 0) {
        return;
      }

      if (Math.abs(event.deltaY) < 10) {
        return;
      }

      const currentIndex = getCurrentIndex();
      const currentPanel = panels[currentIndex];
      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      if (currentPanel) {
        const maxScrollTop = currentPanel.scrollHeight - currentPanel.clientHeight;
        const scrollTop = currentPanel.scrollTop ?? 0;

        if (scrollingDown && maxScrollTop > 1 && scrollTop < maxScrollTop - 1) {
          return;
        }

        if (scrollingUp && maxScrollTop > 1 && scrollTop > 1) {
          return;
        }
      }

      const nextIndex = Math.min(Math.max(currentIndex + (scrollingDown ? 1 : -1), 0), panels.length - 1);

      if (nextIndex === currentIndex) {
        return;
      }

      event.preventDefault();
      locked = true;
      panels[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };

    const mainNode = mainRef.current;
    mainNode?.addEventListener('wheel', onWheel, { passive: false });
    return () => mainNode?.removeEventListener('wheel', onWheel);
  }, [activeExample]);

  const scrollToSection = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-shell">
      <Navbar onNavigate={scrollToSection} />

      <main className="page-scroll" ref={mainRef}>
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

        <div className="page-panel" data-page-panel id="serveis">
          <section className="section section--alt" id="serveis-contingut" data-reveal>
            <div className="container">
              <SectionHeading
                eyebrow="Serveis"
                title="Tres maneres de començar segons el teu moment"
                subtitle="Els preus són clars i el focus està en el que necessita cada negoci per començar bé."
              />
              <div className="pricing-grid">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} onOpenExample={setActiveExample} />
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="comparacio" data-reveal>
            <div className="container">
              <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} subtitle="Escull segons el que vols aconseguir, no segons la tecnologia." />
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

        <div className="page-panel" data-page-panel id="com-funciona">
          <section className="section section--alt" id="com-funciona-contingut" data-reveal>
            <div className="container">
              <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} subtitle="El procés ha de ser fàcil d’entendre i fàcil de seguir." />
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
              <SectionHeading eyebrow="FAQ" title="Preguntes freqüents" subtitle="Respostes curtes i útils perquè la gent no s’encalli abans d’escriure’t." />
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

        <div className="page-panel" data-page-panel id="contacte">
          <section className="section section--cta" id="cta-final" data-reveal>
            <div className="container cta-banner">
              <div>
                <p className="section-heading__eyebrow">Tancament</p>
                <h2 className="cta-banner__title">{ctaFinal.title}</h2>
                <p className="cta-banner__text">{ctaFinal.subtitle}</p>
              </div>
              <a href="#contacte" className="btn btn-ghost cta-banner__button">
                {ctaFinal.cta}
              </a>
            </div>
          </section>

          <section className="section" id="contacte-contingut" data-reveal>
            <div className="container contact-grid">
              <div className="contact-copy">
                <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.description} />
                <div className="contact-details">
                  <div>
                    <span>Telèfon</span>
                    <strong>{company.phone}</strong>
                  </div>
                  <div>
                    <span>WhatsApp</span>
                    <strong>{company.whatsapp}</strong>
                  </div>
                  <div>
                    <span>Email</span>
                    <strong>{company.email}</strong>
                  </div>
                  <div>
                    <span>Horari</span>
                    <strong>{company.schedule}</strong>
                  </div>
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
                          <option value="" disabled>
                            Tria una opció
                          </option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
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
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href.replace('#', ''));
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="footer__links">
                {footer.legal.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </main>

      {activeExample ? <ExampleModal service={activeExample} onClose={() => setActiveExample(null)} /> : null}
    </div>
  );
}

export default App;