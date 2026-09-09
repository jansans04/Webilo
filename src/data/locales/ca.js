export const ca = {
  locale: 'ca',
  status: 'active',
  company: {
    name: 'Webilo',
    slogan: '[ ESLOGAN ]',
    phone: '[ TELÈFON ]',
    whatsapp: '[ WHATSAPP ]',
    whatsappLink: 'https://wa.me/[ NÚMERO ]',
    email: '[ EMAIL ]',
    address: '[ ADREÇA ]',
    schedule: '[ HORARI ]',
    social: {
      instagram: '[ LINK INSTAGRAM ]',
      facebook: '[ LINK FACEBOOK ]',
      linkedin: '[ LINK LINKEDIN ]',
    },
    city: '[ CIUTAT / ZONA ]',
  },
  nav: {
    links: [
      { label: 'Serveis', href: '#serveis' },
      { label: 'Com funciona', href: '#com-funciona' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacte', href: '#contacte' },
    ],
    cta: 'Parlem?',
  },
  hero: {
    eyebrow: 'Disseny web professional',
    title: 'Fes que el teu negoci també existeixi a internet.',
    subtitle:
      'Creem webs modernes i professionals per a autònoms i negocis que volen tenir més visibilitat, generar confiança i aconseguir nous clients.',
    ctaPrimary: { label: 'Vull la meva web', href: '#contacte' },
    ctaSecondary: { label: 'Veure serveis', href: '#serveis' },
    trust: ['Preus clars', 'Sense contractes', 'Entregat en dies'],
  },
  whatWeDo: {
    eyebrow: 'Què fem',
    title: 'Una web no ha de ser complicada.',
    description:
      "T'ajudem a tenir una presència professional a internet sense tecnicismes ni maldecaps. Ens encarreguem de tot: del disseny, del contingut i de posar-la en marxa.",
    items: [
      { icon: '📄', label: 'Una pàgina senzilla per començar' },
      { icon: '🌐', label: 'Una web professional completa' },
      { icon: '🛒', label: 'Una botiga online per vendre' },
    ],
  },
  services: [
    {
      id: 'aparador',
      name: 'Aparador Digital',
      type: 'Landing page',
      price: '150 €',
      note: 'pagament únic',
      tagline: 'La teva empresa a internet, en pocs dies i sense complicacions.',
      featured: false,
      cta: 'Vull un Aparador Digital',
      features: [
        'Una sola pàgina amb tot el que un client potencial necessita saber de tu',
        "Es veu perfecta tant al mòbil com a l'ordinador",
        'Apareixes a Google quan la gent et busqui pel teu nom o servei',
        'Llesta en pocs dies — ideal per començar a tenir presència a internet ja',
      ],
      technical: {
        stack: 'Codi propi amb HTML, Next.js o Astro + Tailwind',
        structure: '1 sola pàgina amb scroll (Inici / Serveis / Contacte)',
        hosting: 'No inclòs',
      },
    },
    {
      id: 'professional',
      name: 'Web Professional',
      type: 'Web corporativa',
      price: '500 €',
      note: 'pagament únic',
      tagline: 'La web completa que la teva empresa necessita per generar confiança i clients.',
      featured: true,
      badge: 'Més escollit',
      cta: 'Vull una Web Professional',
      features: [
        'Diverses pàgines perquè el client trobi tota la informació',
        'Disseny fet a mida amb els colors, logo i estil de la teva marca',
        'Formulari de contacte i ubicació a Google Maps integrats',
        'Preparada perquè Google et trobi millor (SEO bàsic inclòs)',
        'WhatsApp i xarxes socials integrats',
      ],
      technical: {
        stack: 'Codi propi sobre el mateix boilerplate base',
        structure: 'Fins a 5 pàgines',
        hosting: 'Opcional',
      },
    },
    {
      id: 'botiga',
      name: 'Botiga Online',
      type: 'E-commerce',
      price: '1.000 €',
      note: 'pagament únic',
      tagline: 'Ven els teus productes 24 hores al dia, sense dependre d’un local físic.',
      featured: false,
      cta: 'Vull una Botiga Online',
      features: [
        'Ven els teus productes per internet, disponible dia i nit',
        'Pagaments segurs amb targeta, Bizum i altres mètodes habituals',
        'Gestiona productes, preus i comandes des d’un panell fàcil d’utilitzar',
        'Preparada per créixer amb nous productes, ofertes i categories',
      ],
      technical: {
        stack: 'Shopify',
        structure: 'Botiga amb categories i productes precarregats',
        hosting: 'Quota de Shopify a càrrec del client',
      },
    },
  ],
  comparison: {
    eyebrow: 'Comparació',
    title: 'Quina web necessita el teu negoci?',
    items: [
      { label: 'Aparador Digital', value: 'Ideal per començar a tenir presència online.' },
      { label: 'Web Professional', value: 'Ideal per a empreses que volen una web completa i professional.' },
      { label: 'Botiga Online', value: 'Ideal per a negocis que volen vendre productes per internet.' },
    ],
  },
  howItWorks: {
    eyebrow: 'El procés',
    title: 'Senzill des del primer dia.',
    steps: [
      {
        number: '01',
        title: 'Parlem',
        description: 'Ens expliques què fa el teu negoci i què necessites. Sense tecnicismes.',
      },
      {
        number: '02',
        title: 'Preparem',
        description: 'Preparem l’estructura, el disseny i els continguts de la web.',
      },
      {
        number: '03',
        title: 'Creem',
        description: 'Construïm la web i adaptem el contingut. T’anem informant del progrés.',
      },
      {
        number: '04',
        title: 'Publiquem',
        description: 'La teva web queda preparada per rebre visites i començar a funcionar.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Per què nosaltres',
    title: 'Sense complicacions. Sense tecnicismes.',
    description:
      'Treballem amb autònoms i petits negocis que no necessiten una gran agència, sinó algú que els entengui i els ajudi a posar-se a internet de manera clara i honesta.',
    points: [
      'Preus clars, sense sorpreses',
      'Procés senzill i ben explicat',
      'Disseny modern i professional',
      'Responsive per a tots els dispositius',
      'SEO bàsic inclòs',
      'Comunicació directa i propera',
      'Solucions adaptades a cada negoci',
      'Sense contractes de manteniment obligatoris',
    ],
  },
  showcase: {
    eyebrow: 'Exemples',
    title: 'Imagina el teu negoci així.',
    description: 'Webs que hem creat per a clients reals, adaptades a cada negoci i a la seva identitat.',
    items: [
      { id: 1, title: '[ PROJECTE 1 ]', category: 'Aparador Digital' },
      { id: 2, title: '[ PROJECTE 2 ]', category: 'Web Professional' },
      { id: 3, title: '[ PROJECTE 3 ]', category: 'Botiga Online' },
    ],
  },
  faq: [
    {
      question: 'Quant trigueu a fer una web?',
      answer:
        'Depèn del servei i de la rapidesa amb què arribi el material. L’important és deixar-ho ben tancat abans de prometre terminis concrets.',
    },
    {
      question: 'Què necessiteu de mi?',
      answer:
        'Els textos del negoci, el logo si en tens, i les fotos o materials que vulguis utilitzar. Si falta alguna cosa, ho podem ordenar junts.',
    },
    {
      question: 'El domini i el hosting estan inclosos?',
      answer:
        'No estan definits dins del preu base. Es poden facturar a part o gestionar com a extra, segons el cas.',
    },
    {
      question: 'Puc modificar la web més endavant?',
      answer:
        'Sí, però caldrà definir si els canvis entren dins del manteniment o si es pressuposten a part.',
    },
    {
      question: 'La web funciona bé en mòbil?',
      answer: 'Sí. La web s’ha de pensar amb una estructura responsive des del principi.',
    },
    {
      question: 'Feu webs per qualsevol tipus de negoci?',
      answer:
        'Sí, sempre que el projecte encaixi amb el tipus de servei i el temps que volen invertir-hi.',
    },
    {
      question: 'Què passa si ja tinc una web?',
      answer:
        'Es pot revisar si convé renovar-la, redissenyar-la o simplement optimitzar el que ja existeix.',
    },
    {
      question: 'Podeu ajudar-me amb el contingut?',
      answer:
        'Sí, com a suport d’organització i maquetació. Si després voleu redacció més avançada, s’haurà de definir com a extra.',
    },
  ],
  ctaFinal: {
    title: 'El teu negoci ja està a internet?',
    subtitle: 'Si encara no tens una web professional, podem ajudar-te a posar-hi remei.',
    cta: 'Parlem del meu projecte',
  },
  contact: {
    eyebrow: 'Contacte',
    title: 'Parlem?',
    description: 'Explica’ns el teu projecte i et respondrem tan aviat com puguem.',
    formFields: [
      { name: 'nom', label: 'Nom', type: 'text', required: true, placeholder: 'El teu nom' },
      { name: 'empresa', label: 'Empresa', type: 'text', required: false, placeholder: 'El nom del teu negoci' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'correu@exemple.com' },
      { name: 'telefon', label: 'Telèfon', type: 'tel', required: false, placeholder: 'El teu telèfon' },
      {
        name: 'servei',
        label: 'Què necessites?',
        type: 'select',
        required: true,
        options: [
          'Aparador Digital — 150 €',
          'Web Professional — 500 €',
          'Botiga Online — 1.000 €',
          'No ho sé encara',
          'Altra consulta',
        ],
      },
      {
        name: 'missatge',
        label: 'Missatge',
        type: 'textarea',
        required: false,
        placeholder: 'Explica’ns una mica el teu negoci i el que necessites...',
      },
    ],
    submitLabel: 'Enviar consulta',
  },
  footer: {
    tagline: 'Webs professionals per a negocis que volen créixer.',
    links: [
      { label: 'Serveis', href: '#serveis' },
      { label: 'Com funciona', href: '#com-funciona' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacte', href: '#contacte' },
    ],
    legal: [
      { label: 'Avís legal', href: '/avis-legal' },
      { label: 'Política de privacitat', href: '/privacitat' },
      { label: 'Política de cookies', href: '/cookies' },
    ],
  },
};