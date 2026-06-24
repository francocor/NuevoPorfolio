import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Code2, ShieldCheck, MapPin, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const TECH = ["React", "Vite", "Supabase", "Tailwind CSS", "Cloudflare Pages", "Claude Code"];

const BULLET_ICONS = [Sparkles, Code2, ShieldCheck];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, #00D4FF, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          {"// " + t("experience.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-sora font-bold text-4xl md:text-5xl text-[#F0F0FA] leading-tight mb-3"
        >
          {t("experience.title1")}{" "}
          <span className="gradient-text">{t("experience.title2")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#8888A8] font-sans text-base md:text-lg mb-14"
        >
          {t("experience.subtitle")}
        </motion.p>

        {/* Timeline + role card */}
        <div className="relative pl-8 md:pl-10">
          {/* Vertical timeline line */}
          <div className="absolute left-[6px] md:left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6C63FF] via-[#6C63FF]/30 to-transparent" />

          {/* Timeline node */}
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 18 }}
            className="absolute left-0 md:left-1 top-1 flex items-center justify-center"
          >
            <span className="absolute w-4 h-4 rounded-full bg-[#6C63FF]/40 animate-ping" />
            <span className="relative w-3 h-3 rounded-full bg-[#6C63FF] ring-4 ring-[#6C63FF]/15" />
          </motion.span>

          <motion.article
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-9 transition-all duration-300 hover:border-[#6C63FF]/30 hover:shadow-[0_0_60px_rgba(108,99,255,0.08)]"
          >
            {/* Top row: role + current badge */}
            <motion.div variants={fadeUp} className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <h3 className="font-sora font-bold text-xl md:text-2xl text-[#F0F0FA] leading-snug">
                {t("experience.role")}
              </h3>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-300 text-xs font-mono whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t("experience.current")}
              </span>
            </motion.div>

            {/* Company */}
            <motion.p variants={fadeUp} className="text-[#A0A0C0] font-sans text-sm md:text-base mb-4">
              {t("experience.company")}
            </motion.p>

            {/* Meta row */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6 text-[#8888A8] text-xs font-mono">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} className="text-[#6C63FF]" />
                {t("experience.period")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-[#6C63FF]" />
                {t("experience.mode")}
              </span>
            </motion.div>

            {/* Intro */}
            <motion.p variants={fadeUp} className="text-[#8888A8] font-sans text-sm md:text-base leading-relaxed mb-6">
              {t("experience.intro")}
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={stagger} className="space-y-3 mb-7">
              {["b1", "b2", "b3"].map((key, i) => {
                const Icon = BULLET_ICONS[i];
                return (
                  <motion.li key={key} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 h-7 rounded-lg border border-[#6C63FF]/20 bg-[#6C63FF]/[0.05] flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#6C63FF]" />
                    </span>
                    <p className="text-[#8888A8] font-sans text-sm leading-relaxed">
                      {t(`experience.${key}`)}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Tech chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
              {TECH.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-sans border border-white/[0.08] text-[#8888A8] bg-white/[0.02] transition-colors group-hover:border-[#6C63FF]/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
