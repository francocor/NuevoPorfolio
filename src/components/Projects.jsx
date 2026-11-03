import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Store, HeartPulse, ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useSpotlight } from "@/hooks/useSpotlight";

import inmueblesDesktop from "@/assets/projects/inmuebles-desktop.png";
import multiventasDesktop from "@/assets/projects/multiventas-desktop.png";

const PROJECTS = [
  {
    key: "inmuebles",
    title: "InmueblesPro",
    stack: ["React", "TypeScript", "Turborepo", "Node.js", "PostgreSQL", "Electron", "Docker"],
    desktopImage: inmueblesDesktop,
    githubUrl: null,
    liveUrl: null,
  },
  {
    key: "multiventas",
    title: "Multiventas Tucumán",
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Playwright", "Vercel"],
    desktopImage: multiventasDesktop,
    githubUrl: null,
    liveUrl: null,
  },
  {
    key: "consulvia",
    title: "Consulvia",
    stack: ["React 19", "TypeScript", "Fastify", "PostgreSQL", "Drizzle", "Vite", "Docker"],
    cover: "health",
    githubUrl: null,
    liveUrl: null,
  },
  {
    key: "mostrador",
    title: "Mostrador",
    stack: ["React", "TypeScript", "Fastify", "SQLite", "Vite", "Node.js"],
    cover: "store",
    githubUrl: null,
    liveUrl: null,
  },
];

const COVER_ICONS = { store: Store, health: HeartPulse };

function PreviewFrame({ project }) {
  const CoverIcon = project.cover ? COVER_ICONS[project.cover] : null;
  return (
    <div className="relative w-full max-w-[460px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] opacity-60 blur-3xl"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(108,99,255,0.25), transparent 70%)" }}
      />
      {/* window */}
      <div className="relative rounded-xl border border-white/10 bg-[#0b0b14] shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-300">
        {/* top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        {/* body */}
        {project.desktopImage ? (
          <img
            src={project.desktopImage}
            alt={`${project.title} — preview`}
            loading="lazy"
            className="w-full h-[240px] md:h-[280px] object-cover object-top group-hover:object-[center_30%] transition-[object-position] duration-[1200ms] ease-out"
          />
        ) : (
          <div className="relative w-full h-[240px] md:h-[280px] flex flex-col items-center justify-center gap-3 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(108,99,255,0.6) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative w-16 h-16 rounded-2xl border border-[#6C63FF]/30 bg-[#6C63FF]/10 flex items-center justify-center">
              {CoverIcon && <CoverIcon size={30} className="text-[#6C63FF]" />}
            </div>
            <span className="relative font-sora font-semibold text-lg text-[#F0F0FA]">
              {project.title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "-60px" });
  const { ref: spotRef, onMouseMove } = useSpotlight();
  const { t } = useI18n();
  const isEven = index % 2 === 0;

  const setRefs = useCallback(
    (node) => {
      inViewRef.current = node;
      spotRef.current = node;
    },
    [spotRef]
  );

  return (
    <motion.article
      ref={setRefs}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
      className="spotlight group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-[#6C63FF]/30 transition-all duration-300 hover:shadow-[0_0_60px_rgba(108,99,255,0.07)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Preview panel */}
        <div
          className={`relative bg-[#0a0a12] flex items-center justify-center p-8 min-h-[300px] overflow-hidden ${
            !isEven ? "lg:order-2" : ""
          }`}
        >
          <PreviewFrame project={project} />
        </div>

        {/* Content panel */}
        <div
          className={`p-8 md:p-10 flex flex-col justify-between ${
            !isEven ? "lg:order-1" : ""
          }`}
        >
          <div>
            {/* Header row */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-xs font-mono text-[#6C63FF] border border-[#6C63FF]/30 bg-[#6C63FF]/[0.08] px-3 py-1 rounded-full">
                {t(`projects.${project.key}_category`)}
              </span>
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
                    title={t("projects.view_live")}
                  >
                    <ExternalLink size={15} className="text-[#8888A8]" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
                    title={t("projects.view_code")}
                  >
                    <Github size={15} className="text-[#8888A8]" />
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.08] text-[10px] font-mono text-[#8888A8]"
                    title={t("projects.private_hint")}
                  >
                    <Lock size={11} />
                    {t("projects.private")}
                  </span>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-sora font-bold text-2xl md:text-3xl text-[#F0F0FA] mb-6">
              {project.title}
            </h3>

            {/* Case study fields */}
            <div className="space-y-4">
              {[
                { label: t("projects.context_label"),   key: `projects.${project.key}_context` },
                { label: t("projects.challenge_label"), key: `projects.${project.key}_challenge` },
                { label: t("projects.role_label"),      key: `projects.${project.key}_role` },
              ].map(({ label, key }) => (
                <div key={key}>
                  <p className="text-[#6C63FF] text-xs font-mono mb-1">{label}</p>
                  <p className="text-[#8888A8] text-sm font-sans leading-relaxed">{t(key)}</p>
                </div>
              ))}

              {/* Highlight */}
              <div className="p-4 rounded-xl border border-[#6C63FF]/20 bg-[#6C63FF]/[0.04]">
                <p className="text-[#6C63FF] text-xs font-mono mb-1">
                  {t("projects.highlight_label")}
                </p>
                <p className="text-[#A0A0C0] text-sm font-sans leading-relaxed">
                  {t(`projects.${project.key}_highlight`)}
                </p>
              </div>

              {/* Result */}
              <div>
                <p className="text-[#00D4FF] text-xs font-mono mb-1">
                  {t("projects.result_label")}
                </p>
                <p className="text-[#8888A8] text-sm font-sans leading-relaxed">
                  {t(`projects.${project.key}_result`)}
                </p>
              </div>
            </div>
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.06]">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-sans border border-white/[0.08] text-[#8888A8] bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          {"// " + t("projects.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-sora font-bold text-fluid-section text-[#F0F0FA] mb-3"
        >
          {t("projects.title1")}{" "}
          <span className="gradient-text">{t("projects.title2")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#8888A8] font-sans text-base md:text-lg mb-16"
        >
          {t("projects.subtitle")}
        </motion.p>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.key} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
