import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import RotatingRole from "@/components/RotatingRole";
import MagneticButton from "@/components/MagneticButton";
import heroPhoto from "@/assets/franco.jpg";

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

const photoVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
};

function PhotoFrame() {
  return (
    <div className="relative">
      {/* Studio-light ambient glow behind the figure */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-[#6C63FF]/25 via-[#00D4FF]/10 to-transparent blur-3xl opacity-70"
      />

      {/* Gradient ring frame */}
      <div className="relative w-60 sm:w-72 lg:w-[24rem] aspect-[4/5] rounded-[2rem] p-[1.5px] bg-gradient-to-b from-[#6C63FF]/50 via-white/10 to-[#00D4FF]/40">
        <div className="relative w-full h-full rounded-[calc(2rem-1.5px)] overflow-hidden bg-[#070709]">
          <img
            src={heroPhoto}
            alt="Franco Cornejo — Full Stack Developer"
            className="w-full h-full object-cover scale-[1.18] origin-top"
            style={{ objectPosition: "center 12%" }}
          />

          {/* Inner top highlight for depth */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 55% at 50% 0%, rgba(255,255,255,0.08), transparent 55%)",
            }}
          />

          {/* Bottom fade so the figure melts into the frame */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #070709 5%, rgba(7,7,9,0.6) 40%, transparent)",
            }}
          />
        </div>
      </div>

      {/* Floating availability chip */}
      <div className="absolute -bottom-3 -left-3 sm:-left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-[#0d0d16]/90 backdrop-blur text-xs text-[#C8C8DE] font-mono shadow-lg shadow-black/40">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Full Stack
      </div>
    </div>
  );
}

export default function Hero() {
  const { lang, toggleLang, t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 lg:py-0"
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

      {/* Content grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center"
      >
        {/* Left: text */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Available badge */}
          <motion.div variants={itemVariants} className="mb-6">
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
            className="font-sora font-bold text-fluid-hero text-[#F0F0FA] mb-5"
          >
            {t("hero.name")}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="font-sora font-semibold text-fluid-title text-[#F0F0FA] mb-5"
          >
            {t("hero.title1")}{" "}
            <span className="gradient-text">{t("hero.title2")}</span>
          </motion.h2>

          {/* Subtitle — rotating role typewriter */}
          <motion.p
            variants={itemVariants}
            className="text-[#8888A8] font-mono text-sm md:text-base mb-4 min-h-[1.5em] flex items-center justify-center lg:justify-start"
          >
            <RotatingRole text={t("hero.subtitle")} />
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#8888A8] font-sans text-base md:text-lg max-w-xl leading-relaxed mb-9"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6C63FF] text-white font-sans font-medium text-sm hover:bg-[#5B52EE] transition-colors duration-200 hover:shadow-[0_0_40px_rgba(108,99,255,0.45)]"
            >
              {t("hero.cta_projects")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/CV_FrancoCornejo_ES.pdf"
              download
              strength={0.25}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] text-[#F0F0FA] font-sans font-medium text-sm hover:bg-white/[0.06] hover:border-white/[0.20] transition-colors duration-200"
            >
              <Download size={15} />
              {t("hero.cta_cv")}
            </MagneticButton>
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

        {/* Right: photo */}
        <motion.div
          variants={photoVariants}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <PhotoFrame />
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
