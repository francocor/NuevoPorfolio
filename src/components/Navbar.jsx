import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "home",       id: "#home" },
  { key: "about",      id: "#about" },
  { key: "experience", id: "#experience" },
  { key: "projects",   id: "#projects" },
  { key: "approach",   id: "#approach" },
  { key: "resume",     id: "#resume" },
  { key: "contact",    id: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { lang, toggleLang, t } = useI18n();

  // Thin scroll-progress bar at the very top
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: highlight the nav link of the section currently in view.
  // Position-based (last section whose top crossed the 35% line) — robust
  // across browsers and cheap thanks to rAF throttling.
  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.id.slice(1));
    let ticking = false;

    const compute = () => {
      ticking = false;
      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Snap to the last section when reaching the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    compute();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080E]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] z-10"
      />

      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <a
          href="#home"
          className="font-sora font-bold text-xl gradient-text hover:opacity-80 transition-opacity"
        >
          &lt;FC/&gt;
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id.slice(1);
            return (
              <a
                key={link.key}
                href={link.id}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-4 py-2 text-sm transition-colors duration-200 group font-sans ${
                  isActive ? "text-[#F0F0FA]" : "text-[#8888A8] hover:text-[#F0F0FA]"
                }`}
              >
                {t(`nav.${link.key}`)}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] transition-transform duration-200 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label={t("nav.toggle_aria")}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-sm font-sans text-[#8888A8] hover:text-[#F0F0FA]"
          >
            <span className={lang === "es" ? "text-[#6C63FF] font-semibold" : ""}>ES</span>
            <span className="text-white/20">/</span>
            <span className={lang === "en" ? "text-[#6C63FF] font-semibold" : ""}>EN</span>
          </button>

          <button
            className="md:hidden p-2 text-[#F0F0FA] hover:text-[#6C63FF] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#08080E]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6"
          >
            <nav className="flex flex-col gap-1 pt-4">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.id.slice(1);
                return (
                  <a
                    key={link.key}
                    href={link.id}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`py-3 px-4 rounded-lg transition-colors font-sans text-sm ${
                      isActive
                        ? "text-[#F0F0FA] bg-white/[0.04] border-l-2 border-[#6C63FF]"
                        : "text-[#8888A8] hover:text-[#F0F0FA] hover:bg-white/[0.03]"
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                );
              })}
              <button
                onClick={() => { toggleLang(); setOpen(false); }}
                className="mt-2 py-3 px-4 text-left text-[#8888A8] hover:text-[#F0F0FA] hover:bg-white/[0.03] rounded-lg transition-colors font-sans text-sm"
              >
                {lang === "es" ? "Switch to English" : "Cambiar a Español"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
