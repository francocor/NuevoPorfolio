import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { useI18n } from "@/lib/i18n";

import Proyecto1MedPc from "@/assets/Proyecto1AppMedi.png";
import Proyecto1MedCel from "@/assets/Proyecto1AppMediCel.png";
import Proyecto2Nefro from "@/assets/Proyecto2Nefrog.png";
import Proyecto2NefroCel from "@/assets/Proyecto2NefrogCel.png";
import Proyecto3Hosp from "@/assets/Proyecto3Hospi.png";
import Proyecto3HospCel from "@/assets/Proyecto3HospiCel.png";

const PROJECTS = [
  {
    key: "harmonia",
    title: "Harmonia",
    githubUrl: "https://github.com/francocor/HistoriasClinicas",
    figmaUrl: "https://www.figma.com/design/ShsV06LZ1EOLp236nMlAg6/Porfolio?node-id=0-1&t=1t5VGvYOpBuIfp17-1",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    desktopImage: Proyecto1MedPc,
    mobileImage: Proyecto1MedCel,
  },
  {
    key: "hospital",
    title: "Hospital San Pablo",
    githubUrl: "https://github.com/Enzogz98/HospSanPablo",
    figmaUrl: null,
    stack: ["React", "JavaScript", "Node.js", "MySQL"],
    desktopImage: Proyecto3Hosp,
    mobileImage: Proyecto3HospCel,
  },
  {
    key: "nefrogen",
    title: "Nefrogen",
    githubUrl: "https://github.com/francocor/Nefrogem",
    figmaUrl: null,
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    desktopImage: Proyecto2Nefro,
    mobileImage: Proyecto2NefroCel,
  },
];

const FigmaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C31.02 19 33.44 17.99 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#A259FF"/>
  </svg>
);

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useI18n();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
      className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-[#6C63FF]/30 transition-all duration-300 hover:shadow-[0_0_60px_rgba(108,99,255,0.07)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image panel */}
        <div
          className={`relative bg-[#0a0a12] flex items-center justify-center p-8 min-h-[300px] overflow-hidden ${
            !isEven ? "lg:order-2" : ""
          }`}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(108,99,255,0.4), transparent 70%)",
            }}
          />
          <div className="relative flex items-center justify-center w-full">
            <img
              src={project.desktopImage}
              alt={`${project.title} desktop`}
              className="relative z-[5] w-full max-w-[380px] rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
            />
            {project.mobileImage && (
              <img
                src={project.mobileImage}
                alt={`${project.title} mobile`}
                className="absolute -bottom-4 -right-2 w-16 md:w-[72px] rounded-xl shadow-2xl z-10 border border-white/10"
              />
            )}
          </div>
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
                {project.figmaUrl && (
                  <span
                    className="p-2 rounded-lg border border-white/[0.08] opacity-60"
                    title="Documentado en Figma"
                  >
                    <FigmaIcon />
                  </span>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] transition-colors"
                  title={t("projects.view_code")}
                >
                  <Github size={15} className="text-[#8888A8]" />
                </a>
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

              {/* UX/UI highlight */}
              <div className="p-4 rounded-xl border border-[#6C63FF]/20 bg-[#6C63FF]/[0.04]">
                <p className="text-[#6C63FF] text-xs font-mono mb-1">
                  {t("projects.ux_label")}
                </p>
                <p className="text-[#A0A0C0] text-sm font-sans leading-relaxed">
                  {t(`projects.${project.key}_ux`)}
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
          className="font-sora font-bold text-4xl md:text-5xl text-[#F0F0FA] mb-3"
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
