
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
      role: "AI Platform Engineer — Claude Coder",
      company: "BuildShare Development Capital Inc. / BuilderK",
      period: "2026 — Actualidad",
      mode: "Remoto",
      current: "Actual",
      intro: "Desarrollo, validación y mejora de plataformas internas orientadas a operaciones, gestión de proyectos y automatización de flujos de trabajo con inteligencia artificial.",
      b1: "Desarrollo asistido por IA con Claude Code, ChatGPT, Kilo Code y OpenCode: debugging, documentación, revisión de código y optimización de procesos.",
      b2: "Mejoras sobre funcionalidades construidas con React, Vite, Supabase, Tailwind CSS y Cloudflare Pages.",
      b3: "Validación funcional, detección de errores, revisión de interfaces y soporte a usuarios internos.",
    },

    projects: {
      label: "Proyectos",
      title1: "Casos de estudio",
      title2: "reales.",
      subtitle: "No solo qué construí — sino cómo y por qué.",
      context_label: "Contexto",
      challenge_label: "Desafío",
      role_label: "Mi rol",
      ux_label: "Decisiones UX/UI",
      result_label: "Resultado",
      view_code: "Ver código",
      harmonia_category: "App Web · Salud",
      harmonia_context: "Sistema de gestión de historias clínicas para médicos independientes y consultorios privados.",
      harmonia_challenge: "Digitalizar un flujo médico complejo — pacientes, turnos, recetas y estudios — sin sacrificar claridad ni velocidad de uso.",
      harmonia_role: "Desarrollé la aplicación completa: frontend en React, API en Node/Express y base de datos PostgreSQL. Autenticación por rol, CRUD de pacientes, gestión de turnos, historial clínico y dashboard de actividad.",
      harmonia_ux: "Diseñé la jerarquía de información para que médicos no técnicos naveguen sin fricción. Simplifiqué el flujo de carga de datos y establecí un sistema visual consistente en toda la app. Documentado en Figma.",
      harmonia_result: "Interfaz funcional, intuitiva y visualmente clara. Flujo validado con usuarios reales.",
      hospital_category: "App Web · Gestión",
      hospital_context: "Sistema de gestión hospitalaria para el Hospital San Pablo, cubriendo admisiones, turnos y administración interna.",
      hospital_challenge: "Construir una interfaz que diferentes perfiles — administrativos, médicos, recepcionistas — pudiesen usar sin curva de aprendizaje pronunciada.",
      hospital_role: "Desarrollé el módulo de admisiones y gestión de turnos de punta a punta, con integración a la API del sistema central y diseño responsivo para uso en tablets de mostrador.",
      hospital_ux: "Definí roles visuales diferenciados por perfil de usuario. Prioricé las acciones frecuentes en primer plano y diseñé estados de error claros y recuperables.",
      hospital_result: "Sistema en uso real por el equipo del hospital. Reducción de errores en carga de datos y feedback positivo sobre usabilidad.",
      nefrogen_category: "App Web · Salud",
      nefrogen_context: "Plataforma de gestión para una clínica de nefrología — seguimiento de pacientes, tratamientos y evolución clínica.",
      nefrogen_challenge: "Presentar datos médicos complejos — evoluciones, estudios, tratamientos — de forma clara, rápida de leer y sin perder información crítica.",
      nefrogen_role: "Construí la aplicación completa: frontend en React, backend en Node y base de datos MySQL. Módulo de pacientes, vistas de evolución con timelines, sección de tratamientos y exportación de reportes.",
      nefrogen_ux: "Apliqué jerarquía visual estricta para priorizar información crítica. Diseñé componentes de timeline para mostrar evolución temporal de forma clara e intuitiva.",
      nefrogen_result: "Aplicación funcional usada por profesionales de salud. Datos complejos presentados con claridad gracias a decisiones de diseño deliberadas.",
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
      role: "AI Platform Engineer — Claude Coder",
      company: "BuildShare Development Capital Inc. / BuilderK",
      period: "2026 — Present",
      mode: "Remote",
      current: "Current",
      intro: "Development, validation and improvement of internal platforms focused on operations, project management and AI-powered workflow automation.",
      b1: "AI-assisted development with Claude Code, ChatGPT, Kilo Code and OpenCode: debugging, documentation, code review and process optimization.",
      b2: "Improvements on features built with React, Vite, Supabase, Tailwind CSS and Cloudflare Pages.",
      b3: "Functional validation, bug detection, interface review and support for internal users.",
    },

    projects: {
      label: "Projects",
      title1: "Real case",
      title2: "studies.",
      subtitle: "Not just what I built — but how and why.",
      context_label: "Context",
      challenge_label: "Challenge",
      role_label: "My role",
      ux_label: "UX/UI decisions",
      result_label: "Result",
      view_code: "View code",
      harmonia_category: "Web App · Healthcare",
      harmonia_context: "Medical records management system for independent physicians and private clinics.",
      harmonia_challenge: "Digitize a complex medical workflow — patients, appointments, prescriptions and studies — without sacrificing clarity or speed of use.",
      harmonia_role: "Built the full application: React frontend, Node/Express API and PostgreSQL database. Role-based authentication, patient CRUD, appointment management, clinical history and activity dashboard.",
      harmonia_ux: "Designed the information hierarchy so non-technical physicians navigate without friction. Simplified data entry flows and established a consistent visual system throughout the app. Documented in Figma.",
      harmonia_result: "Functional, intuitive and visually clear interface. Flow validated with real users.",
      hospital_category: "Web App · Management",
      hospital_context: "Hospital management system for Hospital San Pablo, covering admissions, appointments and internal administration.",
      hospital_challenge: "Build an interface that different profiles — administrative, medical, receptionists — could use without a steep learning curve.",
      hospital_role: "Built the admissions and appointment management module end to end, with integration to the central system's API and responsive design for tablet use at the front desk.",
      hospital_ux: "Defined differentiated visual roles by user profile. Prioritized frequent actions front and center, and designed clear, recoverable error states.",
      hospital_result: "System in active use by the hospital team. Reduced data entry errors and positive usability feedback.",
      nefrogen_category: "Web App · Healthcare",
      nefrogen_context: "Management platform for a nephrology clinic — patient tracking, treatments and clinical evolution.",
      nefrogen_challenge: "Present complex medical data — evolutions, studies, treatments — clearly and quickly readable, without losing critical information.",
      nefrogen_role: "Built the full application: React frontend, Node backend and MySQL database. Patient module, timeline evolution views, treatment section and report export.",
      nefrogen_ux: "Applied strict visual hierarchy to prioritize critical information. Designed timeline components to show patient temporal evolution clearly and intuitively.",
      nefrogen_result: "Functional application used by healthcare professionals. Complex data presented clearly through deliberate design decisions.",
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
