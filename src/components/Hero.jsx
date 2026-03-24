import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const { lang, toggleLang, t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(108,99,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full animate-mesh-1"
          style={{
            background: "radial-gradient(circle, #6C63FF, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.18,
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full animate-mesh-2"
          style={{
            background: "radial-gradient(circle, #00D4FF, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full animate-mesh-3"
          style={{
            background: "radial-gradient(circle, #4F4BD4, transparent 70%)",
            filter: "blur(60px)",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Available badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] text-sm text-[#8888A8] font-sans">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#8888A8] font-mono text-base mb-2"
        >
          {`// ${t("hero.greeting")}`}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-sora font-bold text-5xl md:text-7xl lg:text-8xl text-[#F0F0FA] leading-tight tracking-tight mb-5"
        >
          {t("hero.name")}
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-5">
          <h2 className="font-sora font-semibold text-2xl md:text-4xl lg:text-[2.6rem] text-[#F0F0FA] leading-snug tracking-tight">
            {t("hero.title1")}
            <br className="hidden md:block" />
            <span className="gradient-text"> {t("hero.title2")}</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#8888A8] font-mono text-sm md:text-base mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[#8888A8] font-sans text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C63FF] text-white font-sans font-medium text-sm hover:bg-[#5B52EE] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] active:scale-[0.98]"
          >
            {t("hero.cta_projects")}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/CV_FrancoCornejo_ES.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] bg-white/[0.03] text-[#F0F0FA] font-sans font-medium text-sm hover:bg-white/[0.06] hover:border-white/[0.20] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={15} />
            {t("hero.cta_cv")}
          </a>
        </motion.div>

        {/* Lang toggle */}
        <motion.div variants={itemVariants} className="mt-8">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("hero.toggle_aria")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-sm font-sans text-[#8888A8] hover:text-[#F0F0FA]"
          >
            <span className={lang === "es" ? "text-[#6C63FF] font-semibold" : ""}>ES</span>
            <span className="text-white/20">/</span>
            <span className={lang === "en" ? "text-[#6C63FF] font-semibold" : ""}>EN</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8888A8]"
      >
        <span className="text-xs font-sans">{t("hero.scroll_hint")}</span>
        <div className="animate-bounce-slow">
          <ArrowDown size={15} />
        </div>
      </motion.div>
    </section>
  );
}
