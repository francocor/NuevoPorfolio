import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Code, Layers, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const POINTS = [
  { icon: Eye,       colorClass: "text-[#6C63FF]", borderClass: "border-[#6C63FF]/20 bg-[#6C63FF]/[0.05]" },
  { icon: Code,      colorClass: "text-[#00D4FF]", borderClass: "border-[#00D4FF]/20 bg-[#00D4FF]/[0.05]" },
  { icon: Layers,    colorClass: "text-[#6C63FF]", borderClass: "border-[#6C63FF]/20 bg-[#6C63FF]/[0.05]" },
  { icon: ArrowRight, colorClass: "text-[#00D4FF]", borderClass: "border-[#00D4FF]/20 bg-[#00D4FF]/[0.05]" },
];

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

export default function UXUI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="approach" ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, #6C63FF, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          {"// " + t("approach.label")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: title + text + quote */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-sora font-bold text-fluid-section text-[#F0F0FA] leading-tight mb-6"
            >
              {t("approach.title1")}
              <br />
              <span className="gradient-text">{t("approach.title2")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#8888A8] font-sans text-base md:text-lg leading-relaxed mb-8"
            >
              {t("approach.intro")}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-xl border-l-2 border-[#6C63FF] border border-[#6C63FF]/20 bg-[#6C63FF]/[0.04]"
            >
              <p className="text-[#F0F0FA] font-sans text-sm md:text-base leading-relaxed italic">
                "{t("approach.quote")}"
              </p>
            </motion.blockquote>
          </div>

          {/* Right: 4 differentiator cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`p-5 rounded-xl border ${point.borderClass} flex flex-col gap-3`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg border ${point.borderClass} flex items-center justify-center`}
                  >
                    <Icon size={16} className={point.colorClass} />
                  </div>
                  <h4 className="font-sora font-semibold text-[#F0F0FA] text-sm leading-snug">
                    {t(`approach.point${i + 1}_title`)}
                  </h4>
                  <p className="text-[#8888A8] font-sans text-sm leading-relaxed">
                    {t(`approach.point${i + 1}_desc`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
