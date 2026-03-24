
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const MESSAGES = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
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
      title1: "Construyo interfaces que",
      title2: "funcionan y se sienten bien.",
      subtitle: "Frontend Developer · con enfoque en UX/UI",
      description: "Desarrollo productos digitales modernos — código limpio, diseño claro y foco en la experiencia real del usuario.",
      cta_projects: "Ver proyectos",
      cta_cv: "Descargar CV",
      toggle_aria: "Cambiar idioma",
      scroll_hint: "Scroll para explorar",
    },

    about: {
      label: "Sobre mí",
      title1: "No solo construyo",
      title2: "interfaces — las entiendo.",
      p1: "Soy Franco, Frontend Developer de Tucumán, Argentina. Me especializo en construir interfaces modernas, funcionales y bien resueltas visualmente.",
      p2: "Trabajo con React y el stack frontend actual para construir productos que no solo funcionan — sino que se sienten correctos de usar.",
      p3: "Lo que me diferencia es que entiendo el diseño desde adentro: aplico criterio de UX/UI directamente en el desarrollo, desde la jerarquía visual hasta la microinteracción que hace una acción intuitiva.",
      p4: "Graduado en la UTN Argentina, con especialización en curso en Diseño UX/UI. Actualmente trabajo como freelancer y estoy abierto a nuevas oportunidades.",
      stat1_value: "3+",
      stat1_label: "Años de experiencia",
      stat2_value: "5+",
      stat2_label: "Proyectos entregados",
      stat3_value: "10+",
      stat3_label: "Tecnologías dominadas",
    },

    stack: {
      tech_label: "Stack",
      tech_title: "Tecnologías que domino",
      tools_title: "Herramientas de trabajo",
    },

    projects: {
      label: "Proyectos",
      title1: "Casos de estudio",
      title2: "reales.",
      subtitle: "No solo qué construí — sino cómo y por qué.",
      context_label: "Contexto",
      challenge_label: "Desafío",
      role_label: "Mi rol frontend",
      ux_label: "Decisiones UX/UI",
      result_label: "Resultado",
      view_code: "Ver código",
      harmonia_category: "App Web · Salud",
      harmonia_context: "Sistema de gestión de historias clínicas para médicos independientes y consultorios privados.",
      harmonia_challenge: "Digitalizar un flujo médico complejo — pacientes, turnos, recetas y estudios — sin sacrificar claridad ni velocidad de uso.",
      harmonia_role: "Desarrollé el frontend completo con React: autenticación por rol, CRUD de pacientes, gestión de turnos, vistas de historial clínico y dashboard de actividad.",
      harmonia_ux: "Diseñé la jerarquía de información para que médicos no técnicos naveguen sin fricción. Simplifiqué el flujo de carga de datos y establecí un sistema visual consistente en toda la app. Documentado en Figma.",
      harmonia_result: "Interfaz funcional, intuitiva y visualmente clara. Flujo validado con usuarios reales.",
      hospital_category: "App Web · Gestión",
      hospital_context: "Sistema de gestión hospitalaria para el Hospital San Pablo, cubriendo admisiones, turnos y administración interna.",
      hospital_challenge: "Construir una interfaz que diferentes perfiles — administrativos, médicos, recepcionistas — pudiesen usar sin curva de aprendizaje pronunciada.",
      hospital_role: "Desarrollé el módulo de admisiones y gestión de turnos, integración con APIs del sistema central, y diseño responsivo para uso en tablets de mostrador.",
      hospital_ux: "Definí roles visuales diferenciados por perfil de usuario. Prioricé las acciones frecuentes en primer plano y diseñé estados de error claros y recuperables.",
      hospital_result: "Sistema en uso real por el equipo del hospital. Reducción de errores en carga de datos y feedback positivo sobre usabilidad.",
      nefrogen_category: "App Web · Salud",
      nefrogen_context: "Plataforma de gestión para una clínica de nefrología — seguimiento de pacientes, tratamientos y evolución clínica.",
      nefrogen_challenge: "Presentar datos médicos complejos — evoluciones, estudios, tratamientos — de forma clara, rápida de leer y sin perder información crítica.",
      nefrogen_role: "Construí el frontend completo: módulo de pacientes, vistas de evolución con timelines, sección de tratamientos y exportación de reportes.",
      nefrogen_ux: "Apliqué jerarquía visual estricta para priorizar información crítica. Diseñé componentes de timeline para mostrar evolución temporal de forma clara e intuitiva.",
      nefrogen_result: "Aplicación funcional usada por profesionales de salud. Datos complejos presentados con claridad gracias a decisiones de diseño deliberadas.",
    },

    approach: {
      label: "Mi diferencial",
      title1: "Frontend que entiende",
      title2: "el producto completo.",
      intro: "La mayoría de los developers recibe un diseño y lo implementa. Yo también puedo leer ese diseño, cuestionar lo que no funciona para el usuario, proponer mejoras con fundamento y entregarlo mejor de lo que llegó.",
      point1_title: "Criterio visual aplicado al código",
      point1_desc: "No implemento interfaces a ciegas — evalúo jerarquía, contraste, espaciado y flujo visual antes de escribir una línea.",
      point2_title: "UX integrado en el desarrollo",
      point2_desc: "Las microinteracciones, los estados de error y los flujos de navegación los pienso como parte del producto, no como detalles finales.",
      point3_title: "Componentes con propósito",
      point3_desc: "Cada componente que construyo tiene en cuenta no solo cómo funciona, sino cómo lo experimenta el usuario final.",
      point4_title: "Traducción diseño → código",
      point4_desc: "Entiendo Figma, entiendo tokens de diseño y entiendo por qué el diseñador tomó cada decisión — lo que hace la implementación fiel al producto real.",
      quote: "No soy diseñador. Soy el developer que hace que el producto final se vea y se sienta mejor de lo que llegó al sprint.",
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
      desc: "Estoy disponible para nuevas oportunidades como Frontend Developer. Me interesa trabajar en productos donde el detalle técnico y la experiencia de usuario importen por igual.",
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
      title1: "I build interfaces that",
      title2: "work and feel right.",
      subtitle: "Frontend Developer · UX/UI expertise",
      description: "I develop modern digital products — clean code, clear design and a genuine focus on real user experience.",
      cta_projects: "View projects",
      cta_cv: "Download CV",
      toggle_aria: "Toggle language",
      scroll_hint: "Scroll to explore",
    },

    about: {
      label: "About me",
      title1: "I don't just build",
      title2: "interfaces — I understand them.",
      p1: "I'm Franco, a Frontend Developer from Tucumán, Argentina. I specialize in building modern, functional and visually polished interfaces.",
      p2: "I work with React and the modern frontend stack to build products that don't just work — they feel right to use.",
      p3: "What sets me apart is that I understand design from the inside: I apply UX/UI thinking directly in development, from visual hierarchy to the microinteraction that makes an action intuitive.",
      p4: "UTN Argentina graduate, currently completing a UX/UI Design specialization. Working as a freelancer and open to new opportunities.",
      stat1_value: "3+",
      stat1_label: "Years of experience",
      stat2_value: "5+",
      stat2_label: "Projects delivered",
      stat3_value: "10+",
      stat3_label: "Technologies mastered",
    },

    stack: {
      tech_label: "Stack",
      tech_title: "Technologies I work with",
      tools_title: "Tools & workflow",
    },

    projects: {
      label: "Projects",
      title1: "Real case",
      title2: "studies.",
      subtitle: "Not just what I built — but how and why.",
      context_label: "Context",
      challenge_label: "Challenge",
      role_label: "My frontend role",
      ux_label: "UX/UI decisions",
      result_label: "Result",
      view_code: "View code",
      harmonia_category: "Web App · Healthcare",
      harmonia_context: "Medical records management system for independent physicians and private clinics.",
      harmonia_challenge: "Digitize a complex medical workflow — patients, appointments, prescriptions and studies — without sacrificing clarity or speed of use.",
      harmonia_role: "Built the full frontend with React: role-based authentication, patient CRUD, appointment management, clinical history views and activity dashboard.",
      harmonia_ux: "Designed the information hierarchy so non-technical physicians navigate without friction. Simplified data entry flows and established a consistent visual system throughout the app. Documented in Figma.",
      harmonia_result: "Functional, intuitive and visually clear interface. Flow validated with real users.",
      hospital_category: "Web App · Management",
      hospital_context: "Hospital management system for Hospital San Pablo, covering admissions, appointments and internal administration.",
      hospital_challenge: "Build an interface that different profiles — administrative, medical, receptionists — could use without a steep learning curve.",
      hospital_role: "Developed the admissions and appointment management module, API integration with the central system, and responsive design for tablet use at the front desk.",
      hospital_ux: "Defined differentiated visual roles by user profile. Prioritized frequent actions front and center, and designed clear, recoverable error states.",
      hospital_result: "System in active use by the hospital team. Reduced data entry errors and positive usability feedback.",
      nefrogen_category: "Web App · Healthcare",
      nefrogen_context: "Management platform for a nephrology clinic — patient tracking, treatments and clinical evolution.",
      nefrogen_challenge: "Present complex medical data — evolutions, studies, treatments — clearly and quickly readable, without losing critical information.",
      nefrogen_role: "Built the complete frontend: patient module, timeline evolution views, treatment section and report export.",
      nefrogen_ux: "Applied strict visual hierarchy to prioritize critical information. Designed timeline components to show patient temporal evolution clearly and intuitively.",
      nefrogen_result: "Functional application used by healthcare professionals. Complex data presented clearly through deliberate design decisions.",
    },

    approach: {
      label: "My differentiator",
      title1: "Frontend that understands",
      title2: "the whole product.",
      intro: "Most developers receive a design and implement it. I can also read that design, question what doesn't work for the user, propose improvements with reasoning, and deliver it better than it arrived.",
      point1_title: "Visual thinking applied to code",
      point1_desc: "I don't implement interfaces blindly — I evaluate hierarchy, contrast, spacing and visual flow before writing a line.",
      point2_title: "UX integrated into development",
      point2_desc: "Microinteractions, error states and navigation flows are part of the product for me — not final details.",
      point3_title: "Components with purpose",
      point3_desc: "Every component I build considers not just how it functions, but how the end user experiences it.",
      point4_title: "Design to code translation",
      point4_desc: "I understand Figma, design tokens and the reasoning behind every design decision — making my implementation faithful to the real product.",
      quote: "I'm not a designer. I'm the developer who makes the final product look and feel better than it did when it arrived in the sprint.",
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
      desc: "I'm available for new opportunities as a Frontend Developer. I'm interested in working on products where technical detail and user experience matter equally.",
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
