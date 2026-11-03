
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const MESSAGES = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      approach: "Mi enfoque",
      resume: "Currículum",
      contact: "Contacto",
      toggle_aria: "Cambiar idioma",
    },

    hero: {
      badge: "Disponible para trabajar",
      greeting: "Hola, soy",
      name: "Franco Cornejo",
      title1: "Construyo productos web",
      title2: "completos, de punta a punta.",
      subtitle: "Full Stack Developer | React Frontend Developer | QA Manual Tester | AI Platform Engineer",
      description: "Desarrollo aplicaciones web modernas — del frontend a la base de datos —, valido su calidad con testing manual y potencio el flujo con desarrollo asistido por IA.",
      cta_projects: "Ver proyectos",
      cta_cv: "Descargar CV",
      toggle_aria: "Cambiar idioma",
      scroll_hint: "Scroll para explorar",
    },

    about: {
      label: "Sobre mí",
      title1: "No solo construyo la interfaz —",
      title2: "construyo el producto completo.",
      p1: "Soy Franco, de Tucumán, Argentina. Trabajo con varios sombreros: Full Stack Developer, React Frontend Developer, QA Manual Tester y AI Platform Engineer — desde construir la app de punta a punta hasta validar su calidad y potenciar el flujo con IA.",
      p2: "Trabajo con React, Node y bases de datos SQL y NoSQL para entregar productos que funcionan en toda su profundidad — no solo en la superficie.",
      p3: "Lo que me diferencia es que entiendo el diseño desde adentro: aplico criterio de UX/UI directamente en el desarrollo, desde la arquitectura de la app hasta la microinteracción que hace una acción intuitiva.",
      p4: "Graduado en la UTN Argentina, con especialización en Diseño UX/UI. Actualmente trabajo como AI Platform Engineer en BuildShare / BuilderK, desarrollando plataformas internas potenciadas con inteligencia artificial.",
      stat1_value: "3+",
      stat1_label: "Años de experiencia",
      stat2_value: "5+",
      stat2_label: "Proyectos entregados",
      stat3_value: "12+",
      stat3_label: "Tecnologías dominadas",
    },

    stack: {
      tech_label: "Stack",
      tech_title: "Tecnologías que domino",
      tools_title: "Herramientas de trabajo",
    },

    experience: {
      label: "Experiencia",
      title1: "Experiencia",
      title2: "profesional.",
      subtitle: "Dónde aplico todo esto en el mundo real, hoy.",
      role: "Full Stack Developer · QA · AI Platform Engineer",
      company: "BuildShare Development Capital Inc. / BuilderK",
      period: "2026 — Actualidad",
      mode: "Remoto",
      current: "Actual",
      intro: "Plataforma SaaS de operaciones, CRM y cotización para el sector construcción — más de 100 pantallas en producción (React 18, TypeScript y Supabase) con releases gobernados por CI/CD. Desarrollo, aseguro la calidad y doy soporte sobre el producto.",
      b1: "Construyo y mejoro funcionalidades de punta a punta con React 18, TypeScript, Vite, Tailwind CSS y Supabase (PostgreSQL), desplegando en Cloudflare Pages con CI/CD en GitHub Actions.",
      b2: "Desarrollo asistido por IA con Claude Code, ChatGPT, Kilo Code y OpenCode: análisis, debugging, documentación y revisión de código — sin delegar el criterio técnico ni la arquitectura.",
      b3: "QA funcional y de regresión: diseño y ejecuto casos de prueba, valido APIs con Postman e integridad de datos con SQL, y sigo cada defecto hasta su cierre y verificación en producción.",
      b4: "Soporte de plataforma a usuarios internos: reproduzco incidencias, aíslo la causa raíz (consola, red, logs y datos) y verifico las correcciones en producción.",
    },

    projects: {
      label: "Proyectos",
      title1: "Casos de estudio",
      title2: "reales.",
      subtitle: "Productos en producción — no solo qué construí, sino cómo y por qué.",
      context_label: "Contexto",
      challenge_label: "Desafío",
      role_label: "Mi rol",
      highlight_label: "Destacado",
      result_label: "Resultado",
      view_code: "Ver código",
      view_live: "Ver en vivo",
      private: "Privado",
      private_hint: "Proyecto de cliente — repositorio privado",

      inmuebles_category: "App de Gestión · Inmobiliaria",
      inmuebles_context: "Plataforma de gestión integral para inmobiliarias argentinas: cartera de propiedades, CRM, ventas, alquileres con ajuste por índice, cobranza, liquidaciones a propietarios, caja, sitio web público y portales para inquilinos y propietarios.",
      inmuebles_challenge: "Modelar las reglas reales del mercado — contratos bajo Ley 27.551 o DNU 70/2023, ajustes por ICL, IPC, UVA o CER, operaciones en pesos y dólares, liquidaciones con copropiedad — sin producir un cálculo incorrecto en silencio.",
      inmuebles_role: "Desarrollé la aplicación completa en un monorepo TypeScript (Turborepo): frontend web, API y base de datos PostgreSQL, empaquetada como app de escritorio (Electron) con instalación propia por agencia y copias de seguridad automáticas.",
      inmuebles_highlight: "Cálculos auditables que avisan y no computan si falta un dato (por ejemplo un índice); recibos y liquidaciones en PDF; buscador global por rol; roles y permisos editables con auditoría, y un manual integrado con ayuda contextual.",
      inmuebles_result: "Producto terminado, mostrado y vendido a inmobiliarias, con instalación propia y datos aislados por agencia.",

      multiventas_category: "E-commerce · Retail",
      multiventas_context: "Tienda online y back-office para un comercio de tecnología Apple (iPhone, iPad, Mac, accesorios) con dos sucursales en Tucumán: catálogo público, panel de administración, inventario y punto de venta.",
      multiventas_challenge: "Unificar la venta online y la operación interna con stock serializado por IMEI, transferencias entre sucursales, pagos y control de inventario en tiempo real.",
      multiventas_role: "Desarrollé la aplicación completa con Next.js (App Router, TypeScript) y Supabase (Postgres, Auth, Storage): catálogo, carrito y checkout, dashboard de KPIs, productos, inventario, pedidos, POS y gestión de usuarios.",
      multiventas_highlight: "Pagos con MercadoPago (webhook), carga masiva de IMEIs y de precios con deshacer, dashboard con gráficos, rate limiting y Turnstile en el checkout. Suite de tests unitarios, de integración y E2E (Vitest + Playwright).",
      multiventas_result: "Plataforma en producción (Vercel) con automatizaciones: expiración de pedidos impagos y resumen diario.",

      consulvia_category: "SaaS Multi-tenant · Salud",
      consulvia_context: "Plataforma de gestión para profesionales de la salud y centros médicos: agenda, pacientes, historia clínica, documentos y facturación en un solo lugar, sobre una base multi-tenant segura.",
      consulvia_challenge: "Aislar los datos de cada organización y proteger información de salud desde el diseño: multi-tenant con Row Level Security, doble factor, catálogo de permisos, auditoría append-only y cifrado de campos sensibles.",
      consulvia_role: "Desarrollo del sistema completo en un monorepo pnpm TypeScript: API y worker en Fastify (monolito modular), base PostgreSQL con Drizzle ORM y pg-boss, y una PWA en React 19 + Vite (app del staff, portal del paciente y reserva de turnos pública).",
      consulvia_highlight: "Mobile-first (PWA desde 360 px, es-AR); contratos de datos compartidos con Zod; e integración continua en cada PR: typecheck, lint, tests unitarios/integración/E2E, build de imagen, auditoría de dependencias y escaneo de secretos.",
      consulvia_result: "Base segura y escalable, entregable por etapas, lista para desplegarse single-tenant o multi-tenant sobre el mismo build.",

      mostrador_category: "Sistema POS · Retail",
      mostrador_context: "Sistema de punto de venta y back-office para un local de comida de barrio (almacén, fiambrería, forrajería). Corre en la propia PC del local: una máquina es el servidor y las demás terminales se conectan por el navegador en la red local.",
      mostrador_challenge: "Modelar el stock real del negocio: productos que son su propio stock, productos armados por receta (fiambre que se fetea, forraje que se fracciona), costo capturado al momento de la venta, lotes por vencimiento (sale primero el más viejo) y jornadas que cruzan la medianoche.",
      mostrador_role: "Desarrollé el sistema completo en TypeScript: servidor Fastify que sirve la API y el cliente, base SQLite (modo WAL) y una pantalla de venta en React + Vite pensada para teclado y lector de código de barras.",
      mostrador_highlight: "Margen real por canal (descuenta la comisión de las apps de delivery), reportes en CSV y PDF, e instalación de un clic (un .bat deja los accesos y arranca la caja al encender la PC).",
      mostrador_result: "Sistema operativo en el local, sin dependencia de internet ni de servicios de terceros.",
    },

    approach: {
      label: "Mi diferencial",
      title1: "Construyo pensando en",
      title2: "el producto completo.",
      intro: "La mayoría de los developers se queda en su capa. Yo entiendo el producto de punta a punta: la interfaz que ve el usuario, la lógica y los datos que la sostienen, y la experiencia que hace que todo se sienta correcto.",
      point1_title: "Del frontend a la base de datos",
      point1_desc: "Diseño y construyo cada capa — UI en React, APIs en Node, modelado de datos — entendiendo cómo se conectan entre sí.",
      point2_title: "UX integrado en el desarrollo",
      point2_desc: "Las microinteracciones, los estados de error y los flujos de navegación los pienso como parte del producto, no como detalles finales.",
      point3_title: "Componentes con propósito",
      point3_desc: "Cada componente que construyo tiene en cuenta no solo cómo funciona, sino cómo lo experimenta el usuario final.",
      point4_title: "IA como multiplicador",
      point4_desc: "Integro desarrollo asistido por IA en mi flujo diario para entregar más rápido, con mejor documentación y revisión de código.",
      quote: "No me quedo en una sola capa. Soy el developer que entiende el producto completo y hace que el resultado final se vea y se sienta mejor de lo que llegó al sprint.",
    },

    resume: {
      label: "Currículum",
      title: "Mi resumen profesional",
      es_label: "Español",
      en_label: "English",
      es_subtitle: "Versión en español (PDF)",
      en_subtitle: "English version (PDF)",
      view: "Ver",
      download: "Descargar",
    },

    footer: {
      label: "Contacto",
      title1: "¿Trabajamos",
      title2: "juntos?",
      desc: "Estoy disponible para nuevas oportunidades como Full Stack Developer, React Frontend Developer, QA Manual Tester o AI Platform Engineer. Me interesa trabajar en productos donde el detalle técnico y la experiencia de usuario importen por igual.",
      cta: "Escribime",
      phone_label: "Teléfono",
      phone: "+54 9 381 634-8569",
      mail_label: "Mail",
      mail: "Francocornejoc15@gmail.com",
      location_label: "Ubicación",
      location: "San Miguel de Tucumán, Argentina",
      made_with: "Diseñado y construido por Franco Cornejo",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      approach: "My approach",
      resume: "Resume",
      contact: "Contact",
      toggle_aria: "Toggle language",
    },

    hero: {
      badge: "Available for work",
      greeting: "Hi, I'm",
      name: "Franco Cornejo",
      title1: "I build complete web",
      title2: "products, end to end.",
      subtitle: "Full Stack Developer | React Frontend Developer | QA Manual Tester | AI Platform Engineer",
      description: "I develop modern web applications — from the frontend to the database —, validate their quality with manual testing and supercharge the workflow with AI-assisted development.",
      cta_projects: "View projects",
      cta_cv: "Download CV",
      toggle_aria: "Toggle language",
      scroll_hint: "Scroll to explore",
    },

    about: {
      label: "About me",
      title1: "I don't just build the interface —",
      title2: "I build the whole product.",
      p1: "I'm Franco, from Tucumán, Argentina. I wear several hats: Full Stack Developer, React Frontend Developer, QA Manual Tester and AI Platform Engineer — from building the app end to end to validating its quality and supercharging the workflow with AI.",
      p2: "I work with React, Node and SQL & NoSQL databases to ship products that work all the way through — not just on the surface.",
      p3: "What sets me apart is that I understand design from the inside: I apply UX/UI thinking directly in development, from app architecture to the microinteraction that makes an action intuitive.",
      p4: "UTN Argentina graduate, with a UX/UI Design specialization. Currently working as an AI Platform Engineer at BuildShare / BuilderK, building internal platforms powered by artificial intelligence.",
      stat1_value: "3+",
      stat1_label: "Years of experience",
      stat2_value: "5+",
      stat2_label: "Projects delivered",
      stat3_value: "12+",
      stat3_label: "Technologies mastered",
    },

    stack: {
      tech_label: "Stack",
      tech_title: "Technologies I work with",
      tools_title: "Tools & workflow",
    },

    experience: {
      label: "Experience",
      title1: "Professional",
      title2: "experience.",
      subtitle: "Where I apply all of this in the real world, today.",
      role: "Full Stack Developer · QA · AI Platform Engineer",
      company: "BuildShare Development Capital Inc. / BuilderK",
      period: "2026 — Present",
      mode: "Remote",
      current: "Current",
      intro: "A SaaS platform for operations, CRM and quoting in the construction sector — 100+ production screens (React 18, TypeScript and Supabase) with CI/CD-governed releases. I develop, ensure quality and support the product.",
      b1: "I build and improve features end to end with React 18, TypeScript, Vite, Tailwind CSS and Supabase (PostgreSQL), deploying to Cloudflare Pages with CI/CD on GitHub Actions.",
      b2: "AI-assisted development with Claude Code, ChatGPT, Kilo Code and OpenCode: analysis, debugging, documentation and code review — without delegating technical judgment or architecture.",
      b3: "Functional and regression QA: I design and run test cases, validate APIs with Postman and data integrity with SQL, and track every defect to closure and verification in production.",
      b4: "Platform support for internal users: I reproduce incidents, isolate the root cause (console, network, logs and data) and verify fixes in production.",
    },

    projects: {
      label: "Projects",
      title1: "Real case",
      title2: "studies.",
      subtitle: "Products in production — not just what I built, but how and why.",
      context_label: "Context",
      challenge_label: "Challenge",
      role_label: "My role",
      highlight_label: "Highlight",
      result_label: "Result",
      view_code: "View code",
      view_live: "View live",
      private: "Private",
      private_hint: "Client project — private repository",

      inmuebles_category: "Management App · Real Estate",
      inmuebles_context: "Full management platform for Argentine real estate agencies: property portfolio, CRM, sales, index-adjusted rentals, collections, owner settlements, cash, a public website and portals for tenants and owners.",
      inmuebles_challenge: "Model the market's real rules — contracts under Law 27.551 or DNU 70/2023, adjustments by ICL, IPC, UVA or CER, operations in pesos and dollars, settlements with co-ownership — without ever producing a wrong amount silently.",
      inmuebles_role: "Built the full application in a TypeScript monorepo (Turborepo): web frontend, API and PostgreSQL database, packaged as a desktop app (Electron) with a per-agency install and automatic backups.",
      inmuebles_highlight: "Auditable calculations that warn and refuse to compute when a value is missing (e.g. an index); PDF receipts and settlements; a role-aware global search; editable roles and permissions with an audit trail, and an in-app manual with contextual help.",
      inmuebles_result: "Finished product, demoed and sold to real estate agencies, each with its own install and data isolated per agency.",

      multiventas_category: "E-commerce · Retail",
      multiventas_context: "Online store and back-office for an Apple technology retailer (iPhone, iPad, Mac, accessories) with two branches in Tucumán: public catalog, admin panel, inventory and point of sale.",
      multiventas_challenge: "Unify online sales and internal operations with IMEI-serialized stock, inter-branch transfers, payments and real-time inventory control.",
      multiventas_role: "Built the full application with Next.js (App Router, TypeScript) and Supabase (Postgres, Auth, Storage): catalog, cart and checkout, KPI dashboard, products, inventory, orders, POS and user management.",
      multiventas_highlight: "MercadoPago payments (webhook), bulk IMEI and price updates with undo, a charts dashboard, rate limiting and Turnstile at checkout. Unit, integration and E2E test suite (Vitest + Playwright).",
      multiventas_result: "Platform in production (Vercel) with automations: auto-expiry of unpaid orders and a daily summary.",

      consulvia_category: "Multi-tenant SaaS · Health",
      consulvia_context: "Practice management platform for health professionals and medical centers: agenda, patients, clinical records, documents and billing in one place, on a secure multi-tenant foundation.",
      consulvia_challenge: "Isolate each organization's data and protect health information by design: multi-tenant with Row Level Security, two-factor auth, a permission catalog, an append-only audit trail and encryption of sensitive fields.",
      consulvia_role: "Development of the full system in a pnpm TypeScript monorepo: Fastify API and worker (modular monolith), PostgreSQL with Drizzle ORM and pg-boss, and a React 19 + Vite PWA (staff app, patient portal and public booking).",
      consulvia_highlight: "Mobile-first (PWA from 360 px, es-AR); shared data contracts with Zod; and CI on every PR: typecheck, lint, unit/integration/E2E tests, image build, dependency audit and secret scanning.",
      consulvia_result: "A secure, scalable foundation, deliverable in stages, ready to deploy single-tenant or multi-tenant on the same build.",

      mostrador_category: "POS System · Retail",
      mostrador_context: "Point-of-sale and back-office system for a neighbourhood food shop (groceries, delicatessen, animal feed). It runs on the shop's own PC: one machine is the server and the other terminals connect through the browser over the local network.",
      mostrador_challenge: "Model the business's real stock: products that are their own stock, recipe-built products (ham sliced off a wheel, feed bagged from a sack), cost captured at the moment of sale, lots by expiry (oldest leaves first) and business days that cross midnight.",
      mostrador_role: "Built the full system in TypeScript: a Fastify server that serves both the API and the client, a SQLite database (WAL mode) and a React + Vite sales screen designed for keyboard and barcode scanner.",
      mostrador_highlight: "Real margin per channel (it subtracts the delivery apps' commission), CSV and PDF reports, and one-click install (a .bat drops the shortcuts and starts the till at boot).",
      mostrador_result: "A system running in the shop, with no dependency on the internet or third-party services.",
    },

    approach: {
      label: "My differentiator",
      title1: "I build with the whole",
      title2: "product in mind.",
      intro: "Most developers stay in their layer. I understand the product end to end: the interface the user sees, the logic and data that support it, and the experience that makes it all feel right.",
      point1_title: "From frontend to database",
      point1_desc: "I design and build every layer — React UI, Node APIs, data modeling — understanding how they connect to each other.",
      point2_title: "UX integrated into development",
      point2_desc: "Microinteractions, error states and navigation flows are part of the product for me — not final details.",
      point3_title: "Components with purpose",
      point3_desc: "Every component I build considers not just how it functions, but how the end user experiences it.",
      point4_title: "AI as a multiplier",
      point4_desc: "I integrate AI-assisted development into my daily workflow to ship faster, with better documentation and code review.",
      quote: "I don't stay in a single layer. I'm the developer who understands the whole product and makes the final result look and feel better than it did when it arrived in the sprint.",
    },

    resume: {
      label: "Resume",
      title: "My professional resume",
      es_label: "Español",
      en_label: "English",
      es_subtitle: "Spanish version (PDF)",
      en_subtitle: "English version (PDF)",
      view: "View",
      download: "Download",
    },

    footer: {
      label: "Contact",
      title1: "Let's work",
      title2: "together.",
      desc: "I'm available for new opportunities as a Full Stack Developer, React Frontend Developer, QA Manual Tester or AI Platform Engineer. I'm interested in working on products where technical detail and user experience matter equally.",
      cta: "Get in touch",
      phone_label: "Phone",
      phone: "+54 9 381 634-8569",
      mail_label: "Email",
      mail: "Francocornejoc15@gmail.com",
      location_label: "Location",
      location: "San Miguel de Tucumán, Argentina",
      made_with: "Designed and built by Franco Cornejo",
      rights: "All rights reserved.",
    },
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(
    () => (key, fallback = key) => {
      const parts = key.split(".");
      let cur = MESSAGES[lang] || {};
      for (const p of parts) cur = cur?.[p];
      return (typeof cur === "string" && cur) || fallback;
    },
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "es" ? "en" : "es")),
      t,
    }),
    [lang, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
