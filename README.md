# Webilo

Base de contingut i estructura per a la web de Webilo.

Ara mateix el projecte té una web React/Vite funcional en català. La idea és tenir una landing clara, professional i orientada a conversió, amb la resta d'idiomes afegits més endavant.

## Fonts de veritat

- App React: [src/App.jsx](src/App.jsx)
- Entrada de l'app: [src/main.jsx](src/main.jsx)
- Estils globals: [src/styles/globals.css](src/styles/globals.css)
- Contingut principal en català: [src/data/locales/ca.js](src/data/locales/ca.js)
- Traduccions pendents: [src/data/locales/es.js](src/data/locales/es.js) i [src/data/locales/en.js](src/data/locales/en.js)
- Estructura i criteris de la web: [docs/estructura.md](docs/estructura.md)
- Resum de copy i missatges en català: [docs/contingut-ca.md](docs/contingut-ca.md)

## Estat actual

- Nom de marca: Webilo
- Idioma actiu: català
- Productes definits: Aparador Digital, Web Professional i Botiga Online
- Enfocament: landing page completa amb CTA de contacte i conversió

## Estructura prevista

La web es planteja com una landing amb aquestes seccions:

1. Navbar
2. Hero
3. Què fem
4. Serveis
5. Comparació
6. Com funciona
7. Per què nosaltres
8. Exemples
9. FAQ
10. CTA final
11. Contacte
12. Footer

## Notes

Els fitxers que hi havia al directori arrel queden com a esborranys inicials. La versió organitzada i escalable és la de `src/` i `docs/`.

## Com arrencar-la

1. Instal·la dependències amb `npm install`.
2. Inicia el projecte amb `npm run dev`.
3. Obre l'adreça que et mostri Vite.