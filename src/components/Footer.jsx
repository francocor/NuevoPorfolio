import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5493816348569";
const EMAIL = "Francocornejoc15@gmail.com";

function ContactDropdown({ label }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      sublabel: "+54 9 381 634-8569",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "#25D366",
      bg: "rgba(37,211,102,0.08)",
      border: "rgba(37,211,102,0.2)",
    },
    {
      icon: Mail,
      label: "Gmail",
      sublabel: EMAIL,
      href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
      color: "#6C63FF",
      bg: "rgba(108,99,255,0.08)",
      border: "rgba(108,99,255,0.2)",
    },
  ];

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C63FF] text-white font-sans font-medium text-sm hover:bg-[#5B52EE] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] active:scale-[0.98]"
      >
        <Mail size={15} />
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-0.5"
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-64 rounded-xl border border-white/[0.08] bg-[#111118] shadow-2xl shadow-black/40 overflow-hidden z-50"
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-200"
                    style={{ background: opt.bg, borderColor: opt.border }}
                  >
                    <Icon size={16} style={{ color: opt.color }} />
                  </div>
                  <div>
                    <p className="text-[#F0F0FA] font-sans text-sm font-medium group-hover:text-white transition-colors">
                      {opt.label}
                    </p>
                    <p className="text-[#8888A8] font-sans text-xs truncate">{opt.sublabel}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const contactItems = [
    {
      icon: Mail,
      label: t("footer.mail_label"),
      value: t("footer.mail"),
      href: `mailto:${t("footer.mail")}`,
    },
    {
      icon: Phone,
      label: t("footer.phone_label"),
      value: t("footer.phone"),
      href: `tel:${t("footer.phone")}`,
    },
    {
      icon: MapPin,
      label: t("footer.location_label"),
      value: t("footer.location"),
      href: null,
    },
  ];

  return (
    <footer id="contact" ref={ref} className="relative pt-24 pb-12 px-6 border-t border-white/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-[#6C63FF]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left: headline + CTA */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-4"
            >
              {"// " + t("footer.label")}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-sora font-bold text-4xl md:text-5xl text-[#F0F0FA] leading-tight mb-6"
            >
              {t("footer.title1")}{" "}
              <span className="gradient-text">{t("footer.title2")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#8888A8] font-sans text-base leading-relaxed mb-8 max-w-lg"
            >
              {t("footer.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <ContactDropdown label={t("footer.cta")} />
            </motion.div>
          </div>

          {/* Right: contact details + social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center gap-5"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#6C63FF]" />
                </div>
                <div>
                  <p className="text-[#8888A8] text-xs font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#F0F0FA] font-sans text-sm hover:text-[#6C63FF] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#F0F0FA] font-sans text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/francocor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:bg-white/[0.06] hover:border-[#6C63FF]/40 transition-colors"
              >
                <Github size={17} className="text-[#8888A8]" />
              </a>
              <a
                href="https://linkedin.com/m/in/franco-cornejo-3b3aaa209/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:bg-white/[0.06] hover:border-[#6C63FF]/40 transition-colors"
              >
                <Linkedin size={17} className="text-[#8888A8]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8888A8] font-sans text-sm">{t("footer.made_with")}</p>
          <p className="text-[#8888A8] font-sans text-xs">
            © {new Date().getFullYear()} Franco Cornejo. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
