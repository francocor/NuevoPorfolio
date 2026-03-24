import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  visible: { transition: { staggerChildren: 0.1 } },
};

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
      <span className="font-sora font-bold text-3xl gradient-text">{value}</span>
      <span className="text-[#8888A8] text-xs font-sans text-center mt-1 leading-snug">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label mb-4"
        >
          {"// " + t("about.label")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora font-bold text-4xl md:text-5xl text-[#F0F0FA] leading-tight mb-8"
            >
              {t("about.title1")}
              <br />
              <span className="gradient-text">{t("about.title2")}</span>
            </motion.h2>

            <div className="space-y-4">
              {["p1", "p2", "p3", "p4"].map((key) => (
                <motion.p
                  key={key}
                  variants={fadeUp}
                  className="text-[#8888A8] font-sans leading-relaxed text-base md:text-lg"
                >
                  {t(`about.${key}`)}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right: code snippet + stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Code snippet */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="text-[#8888A8] text-xs md:text-sm leading-relaxed overflow-x-auto font-mono">
{`const franco = {
  role: "Frontend Developer",
  focus: ["React", "UX/UI", "Clean Code"],
  location: "Tucumán, Argentina",
  available: true,
  superpower: "interfaces that feel right"
};`}
              </pre>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
              <StatCard
                value={t("about.stat1_value")}
                label={t("about.stat1_label")}
              />
              <StatCard
                value={t("about.stat2_value")}
                label={t("about.stat2_label")}
              />
              <StatCard
                value={t("about.stat3_value")}
                label={t("about.stat3_label")}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
