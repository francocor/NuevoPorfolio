import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "home",     id: "#home" },
  { key: "about",    id: "#about" },
  { key: "projects", id: "#projects" },
  { key: "approach", id: "#approach" },
  { key: "resume",   id: "#resume" },
  { key: "contact",  id: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080E]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <a
          href="#home"
          className="font-sora font-bold text-xl gradient-text hover:opacity-80 transition-opacity"
        >
          &lt;FC/&gt;
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.id}
              className="relative px-4 py-2 text-sm text-[#8888A8] hover:text-[#F0F0FA] transition-colors duration-200 group font-sans"
            >
              {t(`nav.${link.key}`)}
              <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
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
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.id}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-[#8888A8] hover:text-[#F0F0FA] hover:bg-white/[0.03] rounded-lg transition-colors font-sans text-sm"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
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
