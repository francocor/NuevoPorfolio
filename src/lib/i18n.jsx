// src/lib/i18n.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

/* === Diccionarios === */
const MESSAGES = {
  es: {
    nav: { home: "Inicio", projects: "Proyectos", resume: "Resumen", contact: "Contacto" },

    hero: {
      name: "Franco Cornejo",
      role1: "Programador Full Stack",
      role2: "Diseñador UX/UI",
      toggle_aria: "Cambiar idioma",
    },

    about: {
      title: "Mi camino en el desarrollo",
      p1: "Soy programador Full Stack y diseñador UX/UI de San Miguel de Tucumán, Argentina.",
      p2: "Actualmente trabajo como freelancer y estoy en constante aprendizaje, combinando lógica y creatividad para desarrollar soluciones digitales funcionales y atractivas.",
      p3: "📚 Graduado en la UTN Argentina, ahora curso una especialización en Diseño UX/UI, para crear productos centrados en el usuario.",
      p4: "🎮 Fuera del código disfruto los videojuegos, el gym y las buenas series.",
    },

    roles: {
      dev_title: "Full Stack Developer",
      dev_quote:
        "Me especializo en construir soluciones web completas, desde el backend robusto hasta el frontend interactivo. Trabajo con tecnologías como React, Node.js, y bases de datos modernas, buscando siempre optimizar el rendimiento y la experiencia del usuario",
      ux_title: "UX/UI Designer",
      ux_quote:
        "Diseño experiencias digitales centradas en las personas. Utilizo herramientas como Figma y aplico principios de diseño accesible y visual para crear interfaces claras, intuitivas y atractivas que conectan con el usuario desde el primer clic.",
    },

    tech: { title: "⚙ Tecnologías que domino" },
    tools: { title: "🧰 Herramientas de trabajo" },

    projects: {
      title_left: "Mis",
      title_right: "Proyectos",
      items: {
        harmonia:
          "Desarrollo de aplicación web para profesionales de la salud con sistema de historias clínicas digitales, carga de consultas, recetas médicas y gestión de turnos. Incluye login por rol (profesional, secretaria, administrador), paneles de control, filtros por pacientes y visualización de agenda médica. Tecnologías: React.js, Node.js, MySQL.",
        hospital:
          "Desarrollo de sitio institucional para brindar información a la comunidad sobre servicios, especialidades y campañas de prevención. Implementación de una app interna para el personal con login para gestionar documentación y optimizar trámites. Tecnologías: React.js, Node.js, MySQL",
        nefrogen:
          "Sitio web institucional con información sobre el equipo médico, especialidades y atención al público. Integración de turnos en línea. Tecnología: React.js",
      },
    },

    resume: {
      title: "Resumen",
      es_label: "CV Español",
      es_sub: "Versión en español (PDF)",
      en_label: "CV English",
      en_sub: "English version (PDF)",
      view: "Ver",
      download: "Descargar",
      preview_fallback: "Tu navegador no puede mostrar la vista previa del PDF.",
      open_btn: "Abrir CV Español",
      open_btn_en: "Abrir CV Inglés",
    },

    footer: {
      phone: "Teléfono",
      mail: "Mail",
      location: "San Miguel de Tucumán, Tucumán, Argentina",
    },
  },

  en: {
    nav: { home: "Home", projects: "Projects", resume: "Résumé", contact: "Contact" },

    hero: {
      name: "Franco Cornejo",
      role1: "Full-Stack Developer",
      role2: "UX/UI Designer",
      toggle_aria: "Toggle language",
    },

    about: {
      title: "My journey in development",
      p1: "I am a Full-Stack Developer and UX/UI Designer from San Miguel de Tucumán, Argentina.",
      p2: "I currently work as a freelancer and keep learning constantly, combining logic and creativity to build functional and attractive digital solutions.",
      p3: "📚 I graduated from UTN Argentina and I'm now pursuing a specialization in UX/UI Design to create user-centered products.",
      p4: "🎮 Outside of coding, I enjoy video games, the gym, and good TV series.",
    },

    roles: {
      dev_title: "Full-Stack Developer",
      dev_quote:
        "I specialize in building complete web solutions, from a robust backend to an interactive frontend. I work with technologies like React, Node.js, and modern databases, always aiming to optimize performance and user experience.",
      ux_title: "UX/UI Designer",
      ux_quote:
        "I design people-centered digital experiences. I use tools like Figma and apply accessible, visual design principles to craft clear, intuitive, and engaging interfaces that connect with users from the very first click.",
    },

    tech: { title: "⚙ Technologies I use" },
    tools: { title: "🧰 Tooling" },

    projects: {
      title_left: "My",
      title_right: "Projects",
      items: {
        harmonia:
          "Web app for healthcare professionals with electronic medical records, visit logging, e-prescriptions, and appointment management. Includes role-based login (doctor, secretary, admin), dashboards, patient filtering, and calendar views. Stack: React.js, Node.js, MySQL.",
        hospital:
          "Institutional site to inform the community about services, specialties, and prevention campaigns. Internal staff app with login to manage documents and streamline processes. Stack: React.js, Node.js, MySQL.",
        nefrogen:
          "Institutional website with information about the medical team, specialties, and patient services. Online appointment integration. Tech: React.js.",
      },
    },

    resume: {
      title: "Résumé",
      es_label: "Spanish CV",
      es_sub: "Spanish version (PDF)",
      en_label: "English CV",
      en_sub: "English version (PDF)",
      view: "View",
      download: "Download",
      preview_fallback: "Your browser can’t display the PDF preview.",
      open_btn: "Open Spanish CV",
      open_btn_en: "Open English CV",
    },

    footer: {
      phone: "Phone",
      mail: "Email",
      location: "San Miguel de Tucumán, Tucumán, Argentina",
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
